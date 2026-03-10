'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

function SignatureGlass() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path d="M7 3H17V7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7V3Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 12V20" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 21H15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function ConviteFinalSection() {
  const containerRef = useRef<HTMLElement>(null);
  const bgTextRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Background text parallax
      gsap.to(bgTextRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Main content reveal
      gsap.from('.convite-content > *', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.convite-content',
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-bravino-cream text-bravino-black">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-[2vw] opacity-40 mix-blend-multiply" aria-hidden="true">
        <span ref={bgTextRef} className="font-serif text-[22vw] font-black leading-none tracking-[-0.03em] text-bravino-peach/20">
          LONDRINA
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-32 text-center lg:px-12 lg:py-40">
        <div className="convite-content mx-auto flex max-w-4xl flex-col items-center">
          <span className="mx-auto mb-14 block h-px w-full max-w-4xl bg-bravino-peach" aria-hidden="true" />

          <h2 className="font-serif text-6xl font-bold leading-[1.05] text-bravino-black md:text-7xl lg:text-[5.5rem] drop-shadow-md">
            Londrina merece brindes <br /><em className="font-serif italic text-bravino-red font-light">inesquecíveis</em>.
          </h2>

          <p className="mx-auto mt-12 max-w-3xl font-sans text-lg font-light leading-[1.9] text-bravino-black/90 md:text-2xl">
            Venha nos visitar e descubra por que a BRAVINO é a grande parceira dos apaixonados por vinho. Sinta o
            aroma, deguste a história e encontre o rótulo ideal para o seu momento.
          </p>

          <div className="mt-16 flex items-center justify-center gap-6 text-bravino-red">
            <span className="h-px w-16 bg-bravino-peach shadow-sm" aria-hidden="true" />
            <SignatureGlass />
            <span className="h-px w-16 bg-bravino-peach shadow-sm" aria-hidden="true" />
          </div>

          <span className="mx-auto mt-16 block h-[2px] w-full max-w-4xl bg-gradient-to-r from-transparent via-bravino-peach to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
