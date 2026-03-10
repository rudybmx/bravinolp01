# Lenis Smooth Scroll — Setup Patterns

Reference file for the Landing Page Builder skill. Read this when setting up smooth scrolling.

---

## 1. Installation

```bash
npm i lenis
```

> **Note:** The old package was `@studio-freight/lenis`. The new official package is just `lenis`.

## 2. Next.js App Router Setup

### SmoothScroll Provider Component

```typescript
// src/components/layout/SmoothScroll.tsx
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,           // Lower = smoother (0.05–0.1 recommended)
      wheelMultiplier: 1,    // Scroll speed multiplier
      touchMultiplier: 2,    // Touch device speed
    })

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return <>{children}</>
}
```

### Root Layout Integration

```typescript
// src/app/layout.tsx
import SmoothScroll from '@/components/layout/SmoothScroll'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
```

### Required CSS

```css
/* globals.css */
html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}
```

## 3. Vite + React Setup

Same SmoothScroll component, but wrap in `main.tsx` or `App.tsx`:

```typescript
// App.tsx
import SmoothScroll from './components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <main>
        {/* Page sections */}
      </main>
    </SmoothScroll>
  )
}
```

## 4. Lenis + React Three Fiber (Conflict Resolution)

**Problem:** Lenis controls the page scroll. R3F's `<ScrollControls>` also tries to control scroll. They fight.

**Solution A: Lenis handles everything (recommended)**
- Use Lenis for the page
- The R3F `<Canvas>` is `position: fixed` and doesn't scroll
- Pass scroll progress to R3F via a shared store or ref

```typescript
// Create a scroll store
import { create } from 'zustand'

interface ScrollStore {
  progress: number
  velocity: number
  setProgress: (p: number) => void
  setVelocity: (v: number) => void
}

export const useScrollStore = create<ScrollStore>((set) => ({
  progress: 0,
  velocity: 0,
  setProgress: (p) => set({ progress: p }),
  setVelocity: (v) => set({ velocity: v }),
}))

// In SmoothScroll.tsx, feed data to the store:
lenis.on('scroll', (e: any) => {
  ScrollTrigger.update()
  useScrollStore.getState().setProgress(e.progress)
  useScrollStore.getState().setVelocity(e.velocity)
})

// In your R3F scene, consume the store:
function FloatingObject() {
  const meshRef = useRef<THREE.Mesh>(null)
  const progress = useScrollStore((s) => s.progress)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = progress * Math.PI * 2
    }
  })

  return <mesh ref={meshRef}>...</mesh>
}
```

**Solution B: R3F handles everything**
- Don't use Lenis at all
- Use `<ScrollControls>` from Drei
- The page content lives INSIDE the Canvas
- Appropriate for fully 3D experiences, not typical landing pages

## 5. Programmatic Scroll

```typescript
// Scroll to a specific section
lenis.scrollTo('#features', {
  offset: -80,       // Account for header height
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))  // easeOutExpo
})

// Scroll to top
lenis.scrollTo(0)

// Stop/start scroll (for modals)
lenis.stop()
lenis.start()
```

## 6. Common Issues & Fixes

| Issue | Cause | Fix |
|---|---|---|
| Scroll events not firing | Wrong CSS on body/html | Add the required Lenis CSS above |
| Sticky elements broken | Old smooth-scroll libs broke `position: sticky` | Lenis supports sticky natively — just use it |
| Page jumps on load | Content height changes after fonts/images load | Call `ScrollTrigger.refresh()` after load |
| Mobile janky | `lerp` too low | Set `lerp: 0.1` on mobile, `0.05` on desktop |
| Modals can't scroll | Lenis captures all scroll events | Use `[data-lenis-prevent]` attribute on modal containers |
