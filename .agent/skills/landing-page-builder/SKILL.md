---
name: landing-page-builder
description: Build stunning, award-worthy creative landing pages with scroll-driven animations, 3D effects, and premium motion design. Use this skill whenever the user wants to create a landing page, portfolio site, product showcase, marketing page, hero section, animated website, creative frontend, scroll-based animation, parallax effect, or any interactive web experience. Also use it when the user mentions GSAP, ScrollTrigger, Lenis, React Three Fiber, shaders, or Framer Motion in the context of building a page. Trigger this skill even if the user just says "create a page" or "build a site" — it handles everything from inspiration analysis to production code.
---

# Landing Page Builder — Creative Frontend Engineering Skill

Build distinctive, scroll-driven, animation-rich landing pages that win awards and convert visitors. This skill transforms inspiration references into production-ready code using a systematic, step-by-step workflow.

## Core Philosophy

Every landing page has a soul. Before writing a single line of code, understand the soul of the page: *Who is it for? What emotion should it provoke? What action should the visitor take?* The code is just the vehicle for that intention.

**Three Pillars:**
1. **Interpolation (The Feel):** It's not about *whether* something moves — it's about *how it stops*. Every motion needs inertia, easing, and weight. Use `lerp`, GSAP easing functions (`power4.out`, `expo.out`), and Lenis smooth scroll to make everything feel physical.
2. **Depth (The Space):** Even 2D pages use layers. Parallax speed differentials, z-index stacking, subtle scale changes on scroll — these create perception of three-dimensional space without a WebGL canvas.
3. **Micro-Feedback (The Response):** Every hover, click, and scroll position change produces immediate, subtle visual feedback. The page feels alive because it *reacts* to the user.

---

## 🧠 Content Intelligence Engine — Smart Delivery Matrix

When the user provides the **context of the business/company**, use this intelligence engine to automatically select the optimal visual language, animation patterns, and content delivery strategy. The goal: the visitor looks at the page and says *"Wow, this is beautiful."*

### Sector → Visual DNA Auto-Mapping

| Business Sector | Visual Tone | Color Strategy | Hero Style | Key Animation | Typography Vibe |
|---|---|---|---|---|---|
| **Tech/SaaS** | Dark, futuristic, neon accents | Dark bg + electric accent (cyan, violet) | 3D particles / gradient mesh | Floating elements + parallax depth | Geometric sans (Space Grotesk, Outfit) |
| **Health/Dental/Medical** | Clean, trust, warm | White/soft gray + teal/emerald accent | Lifestyle photo + soft overlay | Gentle fade-ups + smooth counters | Rounded sans (Plus Jakarta, Nunito) |
| **Law/Finance** | Sophisticated, minimal, serious | Navy/charcoal + gold/warm accent | Typography hero, no clutter | Subtle slide-ins + refined easing | Serif + sans pairs (Playfair + Inter) |
| **E-commerce/Products** | Vibrant, product-focused, dynamic | Brand colors + high-contrast CTA | Product image hero with motion | Horizontal scroll showcase + hover zoom | Modern sans (Manrope, Satoshi) |
| **Restaurant/Food** | Warm, inviting, sensory | Earth tones + warm highlights | Full-bleed food photography | Parallax layers + text reveal | Elegant serif (Cormorant, DM Serif) |
| **Agency/Creative** | Bold, experimental, breaking grids | High contrast + unexpected combos | Full-screen video or kinetic type | Scroll-jacking + split text + chaos | Display fonts (Syne, Cabinet Grotesk) |
| **Real Estate/Architecture** | Luxury, spacious, refined | Neutral palette + metallic accent | Full-viewport property image | Slow parallax + smooth horizontal | Light-weight sans (Archivo, Poppins) |
| **Education/Courses** | Approachable, bright, structured | Bright primaries + clean white | Illustration or video testimonial | Staggered card reveals + counters | Friendly sans (DM Sans, Rubik) |
| **Events/Entertainment** | Energetic, bold, immersive | Vivid gradients + neon | Video background or 3D scene | Fast staggers + glow effects | Heavy impact fonts (Clash Display) |
| **NGO/Social Impact** | Emotional, purposeful, human | Warm earth + accent of hope | Photo hero with storytelling text | Scrollytelling + text reveal | Humanist serif (Lora, Source Serif) |
| **Beauty/Fashion** | Editorial, aspirational, clean | Black/white + single accent | Full image + overlay text | Slow reveals + magnetic cursor | Editorial serif (Cormorant Garamond) |
| **Automotive/Industrial** | Powerful, precise, dark | Dark steel + red or orange accent | Product render or video loop | Scrub-linked reveals + counter stats | Technical sans (Barlow, Rajdhani) |

### Section → Animation Auto-Selection

For every section type encountered in the project, apply the most elegant matching animation:

| Section Type | Default Animation | Transition In | Transition Out | Elegance Rule |
|---|---|---|---|---|
| **Hero** | GSAP timeline (stagger text + fade elements) | Page load: `power4.out`, 0.8s delay | Parallax fade on scroll | The hero must *command attention* in the first 0.5s |
| **Features/Benefits** | Cards fade-up with stagger 0.12s | ScrollTrigger `start: "top 80%"` | Natural scroll out | Cards must never appear "flat" — use subtle shadow + hover scale |
| **Gallery/Portfolio** | Horizontal scroll (pinned) or masonry reveal | Pin section, scrub translate-X | Unpin with fade | Images should have hover distortion or zoom |
| **Stats/Numbers** | Counter animation + progress bars | Trigger on viewport entry | Hold values visible | Numbers must *tick*, never just appear |
| **Testimonials** | Parallax cards with slow scroll differential | Stagger from alternating sides | Gentle opacity fade | Quotes need generous whitespace and italic serif |
| **Pricing** | Scale-in with highlight on recommended plan | Stagger `0.15s` from center outward | Standard scroll | The "recommended" plan must glow or elevate visually |
| **Team/About** | Photo grid with hover overlay reveal | Mask-reveal or clip-path animation | Parallax exit | Hover must reveal name + role with smooth overlay |
| **CTA (Final)** | Full-viewport with glow/pulse on button | Slow scale-up from 0.9 to 1.0 | N/A (end of page) | CTA button must have magnetic hover + subtle pulse |
| **Footer** | Fade-in with stagger on links | `opacity: 0 → 1` with `y: 20 → 0` | N/A | Keep it clean, never animated aggressively |

### 🏆 The Golden Rule of Elegance

Every page built by this skill MUST pass these 5 checks:

1. **The 3-Second Rule:** Within 3 seconds of page load, the visitor must see something move beautifully. Whether it's a text reveal, a gradient shift, or a parallax layer — stillness on load is death.

2. **The Rhythm Rule:** Animations should follow a musical rhythm. Fast sections (hero, CTA) → slow sections (testimonials, about) → fast sections (gallery). Never two "loud" sections in a row.

3. **The Breathing Rule:** Every section needs generous padding. If the content feels "packed" or "tight", add more vertical spacing. Premium = space to breathe.

4. **The Consistency Rule:** Choose a maximum of 2-3 easing curves for the entire page. Mixing 10 different easings looks chaotic, not creative. Recommended combo: `power4.out` (entrances) + `power2.out` (micro) + `none` (scroll-scrub).

5. **The Shadow & Light Rule:** Every elevated element (cards, images, buttons) must have either a subtle shadow, a border, or a glow. Flat elements without depth look cheap. Use `box-shadow` for light modes and `glow/border` for dark modes.

---

## 🛠️ Mandatory Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js (App Router) or Vite + React | SSR/SSG + Fast HMR |
| **Language** | TypeScript (Strict Mode) | Type safety across components |
| **Smooth Scroll** | Lenis (`lenis`) | Buttery-smooth scroll inertia |
| **Animation Engine** | GSAP + ScrollTrigger | Scroll-driven timeline animations |
| **Micro-Interactions** | Framer Motion | State transitions, page entrance, hover |
| **3D Engine** | React Three Fiber + Drei | WebGL scenes, shaders, 3D models |
| **Styling** | Tailwind CSS | Rapid responsive layout |
| **Icons** | Lucide React | Clean, consistent iconography |
| **Utilities** | clsx + tailwind-merge | Conditional class composition |

### Package Installation Command
```bash
npm i gsap framer-motion lenis three @types/three @react-three/fiber @react-three/drei lucide-react clsx tailwind-merge
```

---

## 🎯 WORKFLOW: From Inspiration to Production

This is the heart of the skill. When the user provides an inspiration (URL, screenshot, description, or mood), follow this exact sequence:

### PHASE 1: Inspiration Analysis (Reverse Engineering)

When the user sends a reference (URL, image, or description):

1. **Extract the reference** — If it's a URL, use Tavily to extract the page content and analyze the structure. If it's an image/screenshot, describe every visual element you see.

2. **Produce an Inspiration Audit** — Present this to the user:

```
## 🔍 Inspiration Audit: [Reference Name]

### Visual DNA
- **Color Palette:** [Extract 4-6 dominant colors as HEX]
- **Typography:** [Primary font, secondary font, weights used]
- **Layout Pattern:** [Grid-based / Asymmetric / Full-bleed / Bento / Horizontal scroll]
- **Theme:** [Dark mode / Light mode / Mixed]

### Motion DNA
- **Scroll Behavior:** [Smooth scroll / Scroll-jacking / Parallax / Horizontal]
- **Entry Animations:** [Fade-up / Slide-in / Scale / Split-text / Stagger]
- **Hover Effects:** [Scale / Glow / Distortion / Color-shift / Magnetic cursor]
- **Scroll Effects:** [Pin-and-scrub / Parallax / Horizontal slide / Opacity fade]
- **Easing Curve:** [power4.out / expo.out / elastic / custom]

### Architecture DNA
- **Hero Pattern:** [Full-screen video / 3D scene / Typography hero / Image hero]
- **Section Count:** [Estimated number of sections]
- **CTA Strategy:** [Sticky / Inline / Bottom-anchored]
- **3D Usage:** [None / Background ambient / Interactive foreground / Full takeover]

### Difficulty Score: [1-10]
- 1-3: CSS animations + simple GSAP
- 4-6: GSAP ScrollTrigger + Framer Motion + Lenis
- 7-10: Full R3F + Shaders + Complex scroll-jacking
```

3. **Ask the user to confirm** the audit and choose which elements to keep, modify, or discard.

### PHASE 2: Architecture Planning

After the audit is confirmed:

1. **Generate the Section Blueprint** — A numbered list of every section of the landing page with:
   - Section name
   - Estimated viewport height (1vh, 2vh, etc.)
   - Animation type (entry, scroll, hover)
   - Components needed

2. **Generate the Animation Timeline** — A visual ASCII timeline of what happens at each scroll percentage:
```
0%   ████ Hero: Title splits in, subtitle fades up
20%  ████ Features: Cards stagger in from bottom
40%  ████ Showcase: Horizontal scroll gallery (pinned)
60%  ████ Stats: Counter animation on scroll enter
80%  ████ Testimonials: Parallax cards, slow scroll
100% ████ CTA: Final reveal with glow effect
```

3. **Present to the user** for confirmation before coding.

### PHASE 3: Foundation Code (Build Order)

Always build in this exact order to avoid dependency hell:

#### Step 1: Project Setup & Global Config
- Initialize the project (Next.js or Vite)
- Configure Tailwind with custom theme tokens (colors, fonts, spacing from the audit)
- Setup Lenis smooth scroll provider (wrap entire app)
- Setup GSAP with ScrollTrigger registration

**Critical: Lenis + GSAP Integration Pattern:**
```typescript
// This is the ONLY correct way to sync Lenis with GSAP
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => { lenis.raf(time * 1000) })
gsap.ticker.lagSmoothing(0)
```

#### Step 2: Layout Shell
- Create the page layout with all sections as empty containers
- Set heights, backgrounds, and overflow rules
- The Canvas (if using 3D) goes as `position: fixed; inset: 0; z-index: 0` — it NEVER scrolls with the page

#### Step 3: Hero Section First
- Always start with the Hero because it sets the visual tone
- Implement the page-load animation using Framer Motion or GSAP timeline
- Use `gsap.context()` inside `useLayoutEffect` for cleanup

#### Step 4: Scroll Sections (Top to Bottom)
- Build each section sequentially
- Each section gets its own ScrollTrigger instance (NEVER nest multiple ScrollTriggers in one timeline — it's logically impossible)
- Use `scrub: true` or `scrub: 1` for scroll-linked animations
- Use `toggleActions: "play none none reverse"` for triggered animations

#### Step 5: Micro-Interactions & Polish
- Add hover effects (Framer Motion `whileHover`)
- Add cursor effects if needed
- Add loading states / skeleton screens
- Responsive breakpoints (`ScrollTrigger.matchMedia()`)

#### Step 6: Performance Optimization
- Use `Suspense` for 3D assets
- Preload textures and `.glb` models (DRACO compressed)
- Animate ONLY `transform` and `opacity` — never `top`, `left`, `width`, `height`
- Add `will-change: transform` to animated elements
- Use `gsap.utils.toArray()` for batch animations

### PHASE 4: Professional Refactoring & Modernization (Upgrade Mode)

If the user provides an **existing project/codebase** to improve:

1. **Codebase Audit:** Analyze the current project for:
   - **Animation Quality:** Are animations linear? Is there easing? Is there coordinate jank?
   - **Performance:** Is it using expensive CSS properties? Are there R3F/GSAP memory leaks?
   - **Design Fidelity:** Does it look "AI-generic"? Are the typography and spacing tight?
   - **Stack Alignment:** Is it using Lenis/GSAP correctly or old-school methods?

2. **Modernization Proposal:** Present an "Upgrade Report":
   - **Restoration:** Fix bugs, optimize assets, and clean up the architecture.
   - **Elevation:** Inject the "Three Pillars" (Interpolation, Depth, Micro-feedback).
   - **Styling Overhaul:** Replace generic Tailwind classes with curated design tokens.
   - **Motion Injection:** Identify key sections (Hero, Showcase) that need high-end scroll features.

3. **Step-by-Step Refactor:** Apply changes section-by-section, starting from the Root Layout (adding Lenis/GSAP context) and moving down through the components.

### PHASE 5: Review & Iterate

After building, present the user with:
1. What was built
2. What's different from the reference (and why)
3. Suggestions for improvement
4. Performance checklist

---

## 📐 Animation Patterns Library

Use these proven patterns when building sections:

### Text Reveal (Split Text)
Text enters character-by-character or word-by-word from below with stagger delay.
- **When:** Headlines, hero titles, section headers
- **How:** GSAP SplitText or manual span wrapping + stagger
- **Easing:** `power4.out`
- **Stagger:** `0.02` (chars) or `0.08` (words)

### Fade-Up Stagger (Cards/Grid Items)
Elements rise from below with opacity fade, each slightly delayed.
- **When:** Feature cards, team members, portfolio items
- **How:** `gsap.from(elements, { y: 100, opacity: 0, stagger: 0.15 })`
- **Trigger:** ScrollTrigger `start: "top 85%"`

### Parallax Depth
Background layers move at different speeds than foreground content.
- **When:** Image sections, hero backgrounds, decorative elements
- **How:** `gsap.to(bgImage, { y: "-30%", scrollTrigger: { scrub: true } })`

### Horizontal Scroll (Pinned)
A section is pinned and content scrolls horizontally while the user scrolls vertically.
- **When:** Portfolio galleries, product showcases, timelines
- **How:** Pin the container, translate the inner track on X axis linked to scroll progress

### Counter / Number Animation
Numbers count up from 0 to final value as the section enters viewport.
- **When:** Stats sections, KPIs, social proof
- **How:** `gsap.to(target, { textContent: finalValue, snap: { textContent: 1 } })`

### Image Distortion (Shader)
Images warp, ripple, or shift RGB channels on hover or scroll.
- **When:** Portfolio items, hero images, creative showcases
- **How:** React Three Fiber plane with custom GLSL fragment shader
- **Complexity:** 7-10 difficulty, only use when requested

### Magnetic Cursor
Elements subtly follow or attract toward the cursor position.
- **When:** CTA buttons, navigation items, interactive cards
- **How:** Track mouse position with `mousemove`, apply `gsap.to()` with lerp

---

## 🎨 Visual Benchmarks (Inspiration Catalog)

When analyzing references, match patterns to these benchmark sites:

| Site | Key Pattern | Technical Implementation |
|---|---|---|
| **O Group** | Horizontal scroll + seamless transitions | GSAP ScrollTrigger, `pin: true`, translate X |
| **Arpeggio** | Bento grids + micro-hover interactions | CSS Grid + Framer Motion `whileHover` |
| **Fabrica** | Kinetic typography + grid-breaking | GSAP SplitText + absolute positioning |
| **Plat-form** | Glassmorphism + soft shadows | `backdrop-filter: blur()` + CSS shadows |
| **Orbai** | Glow/Neon + particle motion | R3F particles + emissive materials |
| **Amber** | Text splitting entrance + visual hierarchy | GSAP timeline + staggered reveals |
| **Wonders of Wisdom** | Scrollytelling + organic 3D | R3F + scroll-linked camera movement |
| **Dogelon Mars** | Controlled chaos + floating parallax | Multi-layer parallax with different speeds |
| **Upshop** | Clean transitions + fade-in/slide-up | Framer Motion `initial`/`animate` with InView |
| **Bella Kitchenware** | Product + elegant motion | GSAP timeline + product image sequencing |

When the user says "I want something like [site]", use the table above to immediately identify the correct technical approach.

---

## ⚠️ Critical Rules & Gotchas

1. **NEVER nest multiple ScrollTriggers inside one GSAP timeline.** Each ScrollTrigger controls its own animation independently. Having 10+ ScrollTriggers on a page is normal and performant.

2. **ALWAYS clean up GSAP in React.** Use `gsap.context()` inside `useLayoutEffect` and call `ctx.revert()` on unmount. Memory leaks from orphaned ScrollTriggers will crash the tab.

3. **The Canvas (R3F) is a stage, not a page element.** It stays `position: fixed` in the background. DOM content scrolls over it. The 3D scene reacts to scroll data passed via `useFrame` or scroll events — it never physically moves.

4. **Lenis and R3F's `<ScrollControls>` conflict.** Choose one. If you use Lenis for the page, pass scroll data to R3F manually. If R3F handles everything, use `<ScrollControls>` from Drei instead of Lenis.

5. **DRACO compression for .glb models is mandatory.** Uncompressed 3D models will freeze the browser during development and tank Lighthouse scores in production.

6. **Mobile-first animation strategy.** Use `ScrollTrigger.matchMedia()` to disable heavy animations on `max-width: 768px`. Replace shader effects with CSS fallbacks on mobile.

7. **Font loading matters.** Use `next/font` or `@fontsource` to self-host fonts. Never rely on external CDN links that block rendering.

---

## 📋 How to Send Me an Inspiration

When starting a new landing page project, provide ANY of the following:

1. **A URL** — I will extract and reverse-engineer the page automatically
2. **A screenshot** — I will analyze every visual element and motion pattern
3. **A description** — "I want something dark with floating particles and horizontal scroll"
4. **A mood board** — Multiple references combined into a single vision
5. **A competitor site** — "Make something better than [this site]"

**What I'll do with your inspiration:**
1. Run the Inspiration Audit (Visual DNA + Motion DNA + Architecture DNA)
2. Generate a Section Blueprint
3. Generate an Animation Timeline
4. Ask you to confirm before coding
5. Build section by section, testing each one
6. Deliver production-ready code with responsive fallbacks

---

## 🗂️ File Organization

```
project/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Lenis provider
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Tailwind + custom properties
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SmoothScroll.tsx  # Lenis wrapper
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Showcase.tsx
│   │   │   └── CTA.tsx
│   │   ├── ui/                  # Reusable atomic components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── AnimatedText.tsx
│   │   └── three/               # 3D components (only if needed)
│   │       ├── Scene.tsx
│   │       ├── shaders/
│   │       │   ├── distortion.vert
│   │       │   └── distortion.frag
│   │       └── models/
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   ├── useMousePosition.ts
│   │   └── useGSAP.ts          # GSAP context wrapper
│   └── lib/
│       ├── animations.ts        # Reusable animation configs
│       └── constants.ts         # Design tokens, breakpoints
├── public/
│   ├── fonts/
│   ├── images/
│   └── models/                  # DRACO-compressed .glb files
├── tailwind.config.ts
└── package.json
```

---

## 📚 Additional References

For deeper technical details on specific topics, read the files in the `references/` directory:
- `references/gsap-patterns.md` — GSAP + ScrollTrigger code patterns and gotchas
- `references/lenis-setup.md` — Lenis integration patterns for Next.js and Vite
- `references/shader-gallery.md` — GLSL shader recipes (distortion, RGB shift, noise)

For the original inspiration context and benchmark sites, see `Contexto inicial da Skill.md` in this directory.
