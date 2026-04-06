'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Wine, Navigation } from 'lucide-react';

const eventsData = [
  {
    id: 'deck',
    kicker: 'Aos Sábados',
    title: 'Vinho no Deck',
    description: 'Um convite semanal para degustar, descobrir e viver a energia única da BRAVINO. Aos sábados, a casa recebe degustações gratuitas e uma seleção especial em um ambiente descontraído.',
    image: '/bravino-deck.png'
  },
  {
    id: 'winebar',
    kicker: 'Unidade Santana',
    title: 'O Wine Bar',
    description: 'O ponto de encontro perfeito, com vinhos servidos na temperatura ideal, taças especiais e comidinhas selecionadas. Experimente o frescor de novos rótulos descontraidamente.',
    image: '/bravino-winebar.png'
  },
  {
    id: 'degustacao',
    kicker: 'Exclusivo',
    title: 'Degustações Especiais',
    description: 'Eventos exclusivos com presença de enólogos e produtores, além de provas de grandes rótulos. Mergulhe nas histórias e características mais profundas do universo dos vinhos.',
    image: '/bravino-degustacao.png'
  }
];

export default function EventosSection() {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Setup Initial States
      gsap.set('.panel:not(.panel-0)', { autoAlpha: 0, y: 40 });
      gsap.set('.panel-0', { autoAlpha: 1, y: 0 });

      gsap.set('.event-img:not(.img-0)', { autoAlpha: 0, scale: 1.1 });
      gsap.set('.img-0', { autoAlpha: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.event-pin-wrap',
          start: 'top top',
          end: '+=400%', // Increased for slower feel
          scrub: 1,
          pin: true,
        }
      });

      // Panel 0 HOLD
      tl.to({}, { duration: 1 })
      
      // Transição para o Painel 1 (Wine Bar)
        .to('.panel-0', { autoAlpha: 0, y: -40, duration: 1 })
        .to('.panel-1', { autoAlpha: 1, y: 0, duration: 1 }, '<')
        .to('.img-0', { autoAlpha: 0, scale: 1.05, duration: 1 }, '<')
        .to('.img-1', { autoAlpha: 1, scale: 1, duration: 1 }, '<')
      
      // Panel 1 HOLD (READ TIME)
        .to({}, { duration: 1.5 })

      // Transição para o Painel 2 (Degustações)
        .to('.panel-1', { autoAlpha: 0, y: -40, duration: 1 })
        .to('.panel-2', { autoAlpha: 1, y: 0, duration: 1 }, '<')
        .to('.img-1', { autoAlpha: 0, scale: 1.05, duration: 1 }, '<')
        .to('.img-2', { autoAlpha: 1, scale: 1, duration: 1 }, '<')

      // Final HOLD
        .to({}, { duration: 1 });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-bravino-black text-bravino-cream relative">
      <div className="event-pin-wrap relative h-screen w-full overflow-hidden">
        
        {/* Camada das Imagens de Fundo (Absolute and Covering Right Side or Full Screen) */}
        <div className="absolute inset-0 w-full h-full lg:left-1/2 lg:w-1/2">
          {eventsData.map((evt, i) => (
            <div key={`img-${evt.id}`} className={`event-img img-${i} absolute inset-0 h-full w-full overflow-hidden`}>
               <div className="absolute inset-0 bg-gradient-to-t from-bravino-black/90 via-bravino-black/40 to-bravino-black/20 z-10 lg:bg-gradient-to-r lg:from-bravino-black lg:via-bravino-black/50 lg:to-transparent" />
               <Image
                 src={evt.image}
                 alt={evt.title}
                 fill
                 className="object-cover object-center"
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 priority={i === 0}
               />
            </div>
          ))}
        </div>

        {/* Informações Pinned da Esquerda */}
        <div className="pointer-events-none relative z-20 flex h-full w-full items-center">
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
             <div className="flex flex-col lg:w-5/12">
                <div className="mb-14">
                  <h2 className="font-serif text-5xl font-bold text-bravino-cream drop-shadow-md md:text-6xl">
                    Eventos e <span className="text-bravino-peach font-light italic">Experiências</span>
                  </h2>
                  <span className="mt-8 block h-[1px] w-24 bg-bravino-peach/60" aria-hidden="true" />
                </div>

                {/* Container Fixo para os textos empilhados */}
                <div className="relative h-[250px] w-full">
                  {eventsData.map((evt, i) => (
                    <article key={`txt-${evt.id}`} className={`panel panel-${i} absolute inset-0 flex flex-col justify-center`}>
                       <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bravino-peach/90">
                         {evt.kicker}
                       </p>
                       <h3 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                         {evt.title}
                       </h3>
                       <p className="mt-6 max-w-[40ch] font-sans text-lg font-light leading-relaxed text-white/80 md:text-xl">
                         {evt.description}
                       </p>
                    </article>
                  ))}
                </div>

                <div className="pointer-events-auto mt-6">
                  <button
                    type="button"
                    className="group inline-flex items-center gap-4 bg-bravino-red px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-white hover:text-bravino-red hover:shadow-[0_0_20px_rgba(114,47,55,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bravino-peach focus-visible:ring-offset-2 focus-visible:ring-offset-bravino-cream"
                  >
                    <span className="flex items-center gap-3">
                      Quero Participar <Wine className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    </span>
                  </button>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
