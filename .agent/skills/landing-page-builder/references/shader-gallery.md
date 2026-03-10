# GLSL Shader Recipes — Image Effects Gallery

Reference file for the Landing Page Builder skill. Read this when implementing shader-based visual effects with React Three Fiber.

---

## When to Use Shaders

Shaders are GPU programs that run per-pixel. Use them when CSS/JS animations can't achieve the effect:
- Image distortion on hover (liquid, wave, ripple)
- RGB channel splitting
- Noise-driven animations
- Gradient mesh backgrounds
- Particle systems with per-particle color

**Rule:** If the effect can be done with CSS `filter`, `transform`, or `clip-path`, do it there. Shaders are expensive and harder to debug.

---

## 1. Basic R3F Plane with Custom Shader

```typescript
// components/three/ImagePlane.tsx
import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

// Vertex Shader (usually the same for 2D effects)
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Fragment Shader (this is where the magic happens)
const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uHover;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
  }
`

export function ImagePlane({ imagePath }: { imagePath: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useLoader(THREE.TextureLoader, imagePath)
  const uniforms = useRef({
    uTexture: { value: texture },
    uTime: { value: 0 },
    uHover: { value: 0 },
  })

  useFrame((state) => {
    uniforms.current.uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1.6, 0.9, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  )
}
```

---

## 2. RGB Shift Effect (Hover Distortion)

Separates the R, G, and B channels of an image, offsetting each by a different amount.

```glsl
// Fragment Shader — RGB Shift
uniform sampler2D uTexture;
uniform float uHover;   // 0.0 = idle, 1.0 = fully hovered
varying vec2 vUv;

void main() {
  float shift = uHover * 0.01;  // Intensity of the effect

  float r = texture2D(uTexture, vUv + vec2(shift, 0.0)).r;
  float g = texture2D(uTexture, vUv).g;
  float b = texture2D(uTexture, vUv - vec2(shift, 0.0)).b;

  gl_FragColor = vec4(r, g, b, 1.0);
}
```

**Usage:** Animate `uHover` from 0 to 1 with GSAP on mouseenter/mouseleave.

---

## 3. Wave Distortion (Scroll-Driven)

Makes the image ripple like water based on scroll velocity.

```glsl
// Vertex Shader — Wave
uniform float uTime;
uniform float uScrollVelocity;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;

  // Distort vertices based on scroll speed
  float wave = sin(pos.x * 5.0 + uTime * 2.0) * uScrollVelocity * 0.05;
  pos.z += wave;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
```

**Usage:** Pass `scrollVelocity` from Lenis to the uniform.

---

## 4. Liquid Distortion (Mouse Follow)

Creates a liquid-like warp centered at the mouse position on the image.

```glsl
// Fragment Shader — Liquid
uniform sampler2D uTexture;
uniform vec2 uMouse;       // Mouse position in UV space (0-1)
uniform float uIntensity;  // Distortion strength
varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  // Distance from mouse to current pixel
  float dist = distance(uv, uMouse);

  // Circular distortion falloff
  float strength = smoothstep(0.3, 0.0, dist) * uIntensity;

  // Push UVs away from mouse position
  vec2 direction = normalize(uv - uMouse);
  uv += direction * strength * 0.1;

  gl_FragColor = texture2D(uTexture, uv);
}
```

---

## 5. Noise Grain (Film Grain Overlay)

Adds organic film grain that animates over time. Apply as a post-processing effect or overlay.

```glsl
// Fragment Shader — Grain
uniform float uTime;
varying vec2 vUv;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  float grain = random(vUv + fract(uTime)) * 0.08;  // 0.08 = grain intensity
  gl_FragColor = vec4(vec3(grain), grain);  // Blend with multiply or add
}
```

---

## 6. Gradient Mesh Background

Animated multi-color gradient that flows and morphs.

```glsl
uniform float uTime;
varying vec2 vUv;

void main() {
  vec3 color1 = vec3(0.1, 0.0, 0.3);   // Deep purple
  vec3 color2 = vec3(0.0, 0.2, 0.5);   // Dark blue
  vec3 color3 = vec3(0.8, 0.2, 0.4);   // Hot pink

  float noise = sin(vUv.x * 3.0 + uTime * 0.5) * cos(vUv.y * 4.0 + uTime * 0.3);
  float blend = smoothstep(-1.0, 1.0, noise);

  vec3 color = mix(mix(color1, color2, vUv.x + sin(uTime * 0.2) * 0.3), color3, blend);

  gl_FragColor = vec4(color, 1.0);
}
```

---

## Performance Tips for Shaders

1. **Keep fragment shaders simple.** Every pixel on screen runs the shader. Complex math = dropped frames.
2. **Use `lowp` or `mediump` precision** on mobile: `precision mediump float;`
3. **Avoid `if` statements in shaders** — they break GPU parallelism. Use `step()`, `smoothstep()`, `mix()` instead.
4. **Texture size matters.** Keep images at 1024x1024 or 2048x2048 max. Use `.webp` or compressed textures.
5. **Don't create new uniforms every frame.** Use `useRef` for the uniforms object and mutate `.value` inside `useFrame`.
