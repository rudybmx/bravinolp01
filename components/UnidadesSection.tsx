'use client';

import { useLayoutEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function UnidadesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const parallaxAyrtonRef = useRef<HTMLDivElement>(null);
  const parallaxSantanaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Ayrton Parallax - Dynamic movement
      gsap.fromTo(parallaxAyrtonRef.current, 
        { yPercent: -4 },
        {
          yPercent: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: '.unidade-ayrton-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      // Santana Parallax - Very subtle to avoid crop
      gsap.fromTo(parallaxSantanaRef.current, 
        { yPercent: -3 },
        {
          yPercent: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: '.unidade-santana-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      // Staggers for Ayrton
      gsap.from('.ayrton-text > *', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ayrton-text',
          start: 'top 85%',
        }
      });

      // Staggers for Santana
      gsap.from('.santana-text > *', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.santana-text',
          start: 'top 85%',
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-bravino-cream text-bravino-black">
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-24 px-4 py-16 md:gap-32 md:px-6 md:py-28 lg:px-12 lg:py-40">
        
        {/* Ayrton Senna */}
        <div className="unidade-ayrton-wrapper grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 relative min-h-[430px] overflow-hidden rounded-3xl border border-bravino-peach/70 bg-bravino-cream shadow-[0_30px_70px_rgba(13,13,13,0.18)] lg:min-h-[600px]">
            <div ref={parallaxAyrtonRef} className="absolute inset-[-5%] scale-[1.05] origin-center">
              <Image
                src="/ayrton-senna.png"
                alt="Unidade Bravino Ayrton Senna"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-bravino-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 pointer-events-none">
              <p className="max-w-md font-serif text-[1.4rem] leading-snug text-bravino-cream lg:text-3xl drop-shadow-md">
                Ambiente sofisticado para experiências clássicas em Londrina.
              </p>
            </div>
          </div>

          <article className="ayrton-text lg:col-span-6 lg:pl-16">
            <h3 className="font-serif text-[3.5rem] font-bold leading-[1.1] text-bravino-red md:text-6xl lg:text-[4rem] drop-shadow-sm">Unidade Ayrton Senna</h3>
            <p className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-bravino-red/80">O Coração da Tradição</p>

            <p className="mt-8 max-w-xl font-sans text-[1.1rem] leading-[1.9] text-bravino-black/88">
              Localizada em um ponto nobre de Londrina, a unidade Ayrton Senna oferece um ambiente sofisticado para
              garimpar produtores e produtos exclusivos.
            </p>

            <div className="mt-10 max-w-xl rounded-2xl border border-bravino-peach/40 bg-white/40 p-8 shadow-sm backdrop-blur-sm">
              <span className="inline-block border-b-2 border-bravino-red pb-2 font-serif text-3xl font-bold text-bravino-black drop-shadow-sm">Vinho no Deck</span>
              <p className="mt-6 border-l-4 border-bravino-red pl-6 font-sans text-lg leading-relaxed text-bravino-black/80">
                Casa do tradicional Vinho no Deck, onde os sábados ganham mais vida com degustações gratuitas e
                conversas entre amigos.
              </p>
            </div>

            <p className="mt-12 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-bravino-black/70">
              Av. Ayrton Senna da Silva, 509.
            </p>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-4 bg-bravino-red px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-bravino-cream transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(114,47,55,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bravino-peach focus-visible:ring-offset-2 focus-visible:ring-offset-bravino-cream"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bravino-cream/40 bg-bravino-cream/15">
                <MapPin className="h-5 w-5" />
              </span>
              Como chegar na Matriz
            </button>
          </article>
        </div>

        {/* Santana */}
        <div className="unidade-santana-wrapper grid grid-cols-1 gap-14 rounded-3xl bg-bravino-peach/15 p-8 lg:grid-cols-12 lg:items-center lg:p-16 border border-bravino-peach/30 shadow-inner">
          <article className="santana-text lg:col-span-6 lg:pr-12">
            <h3 className="font-serif text-[3.5rem] font-bold leading-[1.1] text-bravino-red md:text-6xl lg:text-[4rem] drop-shadow-sm">Unidade Santana</h3>
            <p className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-bravino-red/80">Praticidade e Estilo</p>

            <p className="mt-8 max-w-xl font-sans text-[1.1rem] leading-[1.9] text-bravino-black/88">
              Situada na charmosa Alameda Santana, esta unidade traz um conceito contemporâneo e amplo para novas
              experiências gastronômicas.
            </p>

            <div className="mt-8 inline-flex items-center rounded-full border border-bravino-red/20 bg-white/70 px-6 py-3 backdrop-blur-md shadow-sm">
              <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-bravino-red">Wine Bar / Rolha Free</span>
            </div>

            <p className="mt-8 max-w-xl font-sans text-[1.1rem] leading-[1.9] text-bravino-black/88">
              Aproveite nosso Wine Bar e a facilidade de consumir seu vinho na temperatura ideal na área comum da
              Alameda, com Rolha Free para garrafas adquiridas na loja.
            </p>

            <p className="mt-12 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-bravino-black/72">
              R. Rubéns Carlos de Jesus, 300 - Quiosque 01.
            </p>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-4 bg-bravino-red px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-bravino-cream transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(114,47,55,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bravino-peach focus-visible:ring-offset-2 focus-visible:ring-offset-bravino-cream"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bravino-cream/40 bg-bravino-cream/15">
                <MapPin className="h-5 w-5" />
              </span>
              Como chegar na Alameda
            </button>
          </article>

          <div className="lg:col-span-6 relative min-h-[430px] overflow-hidden rounded-3xl border border-bravino-peach/70 bg-bravino-black shadow-[0_30px_70px_rgba(13,13,13,0.18)] lg:min-h-[500px]">
             <div ref={parallaxSantanaRef} className="absolute inset-[-4%] scale-[1.02] origin-center">
              <Image
                src="/santana.jpg"
                alt="Unidade Bravino Santana"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-bravino-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 pointer-events-none">
              <p className="max-w-md font-sans text-[1.2rem] font-light leading-snug text-bravino-cream lg:text-2xl drop-shadow-md">
                Conceito contemporâneo e aberto para novas experiências gastronômicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
