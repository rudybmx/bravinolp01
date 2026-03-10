'use client';

import { useLayoutEffect, useRef } from 'react';
import { ArrowDownToLine } from 'lucide-react';
import { gsap } from 'gsap';

const wineTypes = [
  { name: 'Brancos', note: 'Frescor vibrante', tone: 'from-bravino-cream to-bravino-peach/45' },
  { name: 'Rosés', note: 'Aromas delicados', tone: 'from-bravino-cream to-bravino-peach/40' },
  { name: 'Tintos', note: 'Estrutura e intensidade', tone: 'from-bravino-cream to-bravino-peach/55' },
  { name: 'Espumantes', note: 'Elegância festiva', tone: 'from-bravino-cream to-bravino-peach/35' },
];

export default function VinhosSection() {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Left Column Animation (Text & CTA)
      gsap.from('.vinhos-text > *', {
        x: -40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.vinhos-wrapper',
          start: 'top 80%',
        }
      });

      // Cards Animation
      gsap.fromTo('.vinho-card', 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.vinhos-wrapper',
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-bravino-cream text-bravino-black relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="pointer-events-none absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-bravino-peach/20 blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-28 lg:px-12 lg:py-36">
        <div className="vinhos-wrapper grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20 xl:gap-24 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="vinhos-text flex flex-col items-start lg:col-span-5">
            <div className="border-l-[3px] border-bravino-red pl-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-bravino-black/60">
                Bravino Wine Selection
              </p>
              <h2 className="mt-5 font-serif text-[3.5rem] font-bold leading-[1.05] text-bravino-black md:text-6xl drop-shadow-sm">
                Variedade <br /> de <span className="text-bravino-red">Vinhos</span>
              </h2>
              <p className="mt-8 max-w-lg font-sans text-[1.1rem] leading-[1.9] text-bravino-black/85">
                Nossa carta conta com mais de 200 rótulos selecionados das principais regiões do mundo, como Argentina,
                Chile, Portugal, Itália, França e Brasil. Do frescor vibrante dos Brancos e Rosés à imponência dos Tintos
                encorpados e a elegância dos Espumantes e Champagnes.
              </p>
            </div>

            <a
              href="#"
              className="mt-14 inline-flex items-center gap-4 bg-transparent border border-bravino-red/80 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-bravino-red transition-all duration-300 hover:bg-bravino-red hover:text-bravino-cream hover:shadow-[0_0_20px_rgba(114,47,55,0.4)]"
            >
              <span>Ver Carta Completa em PDF</span>
              <ArrowDownToLine className="h-5 w-5" />
            </a>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {wineTypes.map((wine, idx) => (
              <article
                key={wine.name}
                className="vinho-card group relative overflow-hidden rounded-[2rem] border border-bravino-peach/50 bg-white/60 p-10 shadow-[0_15px_35px_rgba(13,13,13,0.04)] backdrop-blur-md transition-[box-shadow,transform] duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(114,47,55,0.12)]"
              >
                <div className={`absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${wine.tone} blur-2xl opacity-60 transition-[transform,opacity] duration-700 group-hover:scale-[1.8] group-hover:opacity-100`} />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border-[1.5px] border-bravino-peach/30 bg-bravino-cream/20" />

                <p className="relative z-10 font-sans text-5xl font-extralight leading-none text-bravino-red/20 transition-colors duration-300 group-hover:text-bravino-red/40">
                  0{idx + 1}
                </p>
                <h3 className="relative z-10 mt-6 font-serif text-3xl font-bold tracking-tight text-bravino-black transition-colors duration-300 group-hover:text-bravino-red">
                  {wine.name}
                </h3>
                <p className="relative z-10 mt-4 font-sans text-[1.05rem] text-bravino-black/80">{wine.note}</p>

                <div className="relative z-10 mt-12 h-[2px] w-12 bg-bravino-peach/80 transition-all duration-500 group-hover:w-full group-hover:bg-bravino-red" />
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
