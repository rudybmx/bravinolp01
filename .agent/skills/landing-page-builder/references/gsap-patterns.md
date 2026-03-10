# GSAP + ScrollTrigger — Patterns & Gotchas

Reference file for the Landing Page Builder skill. Read this when implementing scroll-driven animations.

---

## 1. Setup & Registration (ALWAYS do this first)

```typescript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ONCE at app level
gsap.registerPlugin(ScrollTrigger)
```

## 2. React Integration (gsap.context)

GSAP in React MUST use `gsap.context()` for proper cleanup. Without it, ScrollTriggers persist after component unmount and cause memory leaks.

```typescript
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function AnimatedSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // All GSAP code goes here
      gsap.from('.card', {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    }, containerRef) // scope to container

    return () => ctx.revert() // kills all ScrollTriggers + tweens
  }, [])

  return <div ref={containerRef}>...</div>
}
```

## 3. Common ScrollTrigger Patterns

### Fade-Up on Enter
```typescript
gsap.from(element, {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: 'power4.out',
  scrollTrigger: {
    trigger: element,
    start: 'top 85%',
    toggleActions: 'play none none reverse'
  }
})
```

### Scrub-Linked (Parallax)
```typescript
gsap.to('.bg-layer', {
  y: '-30%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true  // links to scroll position
  }
})
```

### Pinned Horizontal Scroll
```typescript
const sections = gsap.utils.toArray('.panel')

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-container',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => '+=' + document.querySelector('.horizontal-container')!.scrollWidth
  }
})
```

### Stagger Batch (Multiple Elements)
```typescript
gsap.utils.toArray('.card').forEach((card, i) => {
  gsap.from(card as Element, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card as Element,
      start: 'top 90%'
    }
  })
})
```

## 4. Critical Gotchas

### ❌ NEVER: Multiple ScrollTriggers in one timeline
```typescript
// THIS IS WRONG — will break
const tl = gsap.timeline()
tl.to('.a', { x: 100, scrollTrigger: { ... } })
  .to('.b', { x: 100, scrollTrigger: { ... } })
```
The scrollbar OR the timeline can control the playhead — not both. Create separate ScrollTriggers for each animation.

### ❌ NEVER: Animate layout properties
```typescript
// BAD — causes reflow, janky performance
gsap.to(el, { top: '100px', left: '50px', width: '300px' })

// GOOD — GPU-accelerated, smooth
gsap.to(el, { y: 100, x: 50, scale: 1.2, opacity: 0.5 })
```

### ✅ ALWAYS: Responsive with matchMedia
```typescript
ScrollTrigger.matchMedia({
  '(min-width: 769px)': function() {
    // Desktop animations
    gsap.from('.hero-title', { y: 100, opacity: 0, duration: 1.5 })
  },
  '(max-width: 768px)': function() {
    // Simpler mobile animations
    gsap.from('.hero-title', { opacity: 0, duration: 0.8 })
  }
})
```

### ✅ ALWAYS: Refresh after dynamic content loads
```typescript
// After images load, fonts render, or layout shifts
ScrollTrigger.refresh()
```

## 5. Recommended Easing Curves

| Use Case | Easing | Feel |
|---|---|---|
| Hero entrance | `power4.out` | Dramatic, confident |
| Card reveals | `power3.out` | Smooth, professional |
| Parallax backgrounds | `none` | Linear, natural |
| Button hover | `power2.out` | Quick, responsive |
| Elastic bounce | `elastic.out(1, 0.3)` | Playful, bouncy |
| Scroll-scrubbed | `none` | Direct 1:1 mapping |
