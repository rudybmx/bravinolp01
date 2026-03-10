'use client';

import { useLayoutEffect, useRef } from 'react';
import { CalendarDays, Gift, SearchCheck } from 'lucide-react';
import { gsap } from 'gsap';

const features = [
  { icon: SearchCheck, label: 'Curadoria' },
  { icon: Gift, label: 'Presentes' },
  { icon: CalendarDays, label: 'Eventos' },
];

export default function AcolhimentoSection() {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Left article
      gsap.from('.acolhimento-text > *', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.acolhimento-article',
          start: 'top 80%',
        }
      });

      // Right article
      gsap.from('.acolhimento-aside-item', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.acolhimento-aside',
          start: 'top 85%',
        }
      });
      
      // Feature items
      gsap.from('.feature-item', {
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.feature-container',
          start: 'top 90%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-bravino-cream text-bravino-black relative">
      <div className="relative z-10 grid min-h-screen grid-cols-1 items-start lg:grid-cols-2">
        <article className="acolhimento-article px-6 py-28 lg:px-16 lg:py-32 xl:px-24">
          <div className="acolhimento-text">
            <span className="mb-8 block h-[2px] w-28 bg-bravino-peach/80" aria-hidden="true" />
            
            <h2 className="font-serif text-5xl font-bold leading-[0.95] text-bravino-red md:text-6xl lg:text-7xl">A BRAVINO</h2>
            
            <p className="mt-10 max-w-xl font-sans text-base leading-[1.9] text-bravino-black/90 md:max-w-lg md:text-xl">
              A BRAVINO é um local de confraternização e acolhimento onde todas as expectativas são superadas. Nossa curadoria especializada busca rótulos diferentes e únicos, transformando simples instantes em memórias inesquecíveis. Somos o parceiro ideal para qualquer ocasião, seja para presentear, consumir em casa ou celebrar em nossos eventos.
            </p>
          </div>

          <div className="feature-container mt-16 flex flex-wrap items-center gap-8">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="feature-item inline-flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-bravino-peach/60 bg-white shadow-[0_4px_15px_rgba(201,169,110,0.15)] transition-all duration-300 hover:scale-105 hover:bg-bravino-cream hover:shadow-[0_4px_25px_rgba(114,47,55,0.2)]">
                  <Icon className="h-6 w-6 text-bravino-red" strokeWidth={1.5} />
                </span>
                <span className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-bravino-black/80">{label}</span>
              </div>
            ))}
          </div>
        </article>

        <aside className="acolhimento-aside relative h-full overflow-hidden px-6 py-20 lg:px-16 lg:py-24 xl:px-20 lg:border-l lg:border-bravino-peach/20">
          <div className="pointer-events-none absolute -right-28 top-10 h-[30rem] w-[30rem] rounded-full bg-bravino-peach/15 blur-[80px]" aria-hidden="true" />
          <div className="pointer-events-none absolute right-24 top-64 h-56 w-56 rounded-full bg-bravino-peach/15 blur-[60px]" aria-hidden="true" />

          <div className="relative mx-auto flex h-full w-full max-w-2xl flex-col pt-[5rem] lg:pt-[7.6rem]">
            <p className="acolhimento-aside-item font-serif text-4xl italic leading-[1.3] text-bravino-red lg:text-[2.75rem] drop-shadow-sm">
              Confraternização, acolhimento e experiências memoráveis.
            </p>

            <span className="acolhimento-aside-item my-12 block h-px w-24 bg-bravino-peach" aria-hidden="true" />

            <div className="space-y-8">
              <p className="acolhimento-aside-item border-t border-bravino-peach/40 pt-8 font-serif text-2xl leading-[1.6] text-bravino-black/90 lg:text-[1.75rem]">
                A arte de brindar aos momentos únicos.
              </p>
              <p className="acolhimento-aside-item border-t border-bravino-peach/40 pt-8 font-serif text-2xl leading-[1.6] text-bravino-black/90 lg:text-[1.75rem]">
                Curadoria com alma: rótulos que narram histórias.
              </p>
              <p className="acolhimento-aside-item border-t border-bravino-peach/40 pt-8 font-serif text-2xl leading-[1.6] text-bravino-black/90 lg:text-[1.75rem]">
                Onde a tradição encontra o contemporâneo.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
