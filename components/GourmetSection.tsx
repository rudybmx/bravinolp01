'use client';

import { useLayoutEffect, useRef } from 'react';
import { Beer, Candy, CookingPot, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import Image from 'next/image';

const gourmetItems = [
  {
    title: 'Chocolates & Doces',
    description: 'Seleção premium de panetones e chocolates importados que tornam qualquer ocasião inesquecível.',
    icon: Candy,
  },
  {
    title: 'Antepastos & Azeites',
    description: 'Massas italianas e molhos especiais para criar momentos memoráveis à mesa.',
    icon: CookingPot,
  },
  {
    title: 'Destilados & Cervejas',
    description: 'Whiskies, licores e cervejas artesanais selecionadas para os paladares mais exigentes.',
    icon: Beer,
  },
];

export default function GourmetSection() {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Left Image Animation
      gsap.from('.gourmet-image-wrapper', {
        x: -40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
      gsap.from('.gourmet-image', {
        scale: 1.15,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      // Right Content Stagger
      gsap.from('.gourmet-stagger', {
        x: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gourmet-content',
          start: 'top 75%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#FCFAFA] text-bravino-black border-y border-bravino-peach/30 shadow-[inset_0_15px_30px_rgba(26,10,14,0.02)]">
      
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 py-16 md:px-6 md:py-28 lg:px-12 lg:py-36">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center xl:gap-24">
          
          {/* Esquerda: Imagem */}
          <div className="gourmet-image-wrapper relative aspect-[4/5] w-full overflow-hidden rounded-t-[100px] border-4 border-bravino-cream shadow-[0_30px_60px_rgba(114,47,55,0.08)] md:aspect-square lg:aspect-[3/4]">
             <div className="absolute inset-0 bg-gradient-to-t from-bravino-black/50 via-bravino-black/10 to-transparent z-10" />
			       <Image
               src="/bravino-gourmet.png"
               alt="Tábua de Frios e Vinho Gourmet Bravino"
               fill
               className="gourmet-image object-cover"
               sizes="(max-width: 1024px) 100vw, 50vw"
             />
             <div className="absolute bottom-8 left-8 right-8 z-20">
               <span className="inline-block border-b border-bravino-peach/60 pb-2 font-serif text-2xl font-bold text-bravino-cream drop-shadow-md">
                 O Empório Bravino
               </span>
               <p className="mt-3 font-sans text-sm font-light leading-relaxed text-bravino-cream/90">
                 Explore ingredientes selecionados que transformam o seu vinho em um evento gastronômico completo.
               </p>
             </div>
          </div>

          {/* Direita: Conteúdo */}
          <div className="gourmet-content flex flex-col justify-center lg:py-10">
             <p className="gourmet-stagger font-sans text-xs font-semibold uppercase tracking-[0.24em] text-bravino-red/80">
               Delicatessen
             </p>
             
             <h2 className="gourmet-stagger mt-6 font-serif text-[3.5rem] font-bold leading-[1.05] text-bravino-red md:text-[4.5rem] drop-shadow-sm">
                Seleção Gourmet<br /><span className="text-bravino-black font-medium opacity-90">e Bebidas.</span>
             </h2>
             
             <p className="gourmet-stagger mt-8 max-w-lg font-sans text-[1.1rem] leading-[1.8] text-bravino-black/80">
               Nossa curadoria vai muito além da taça. A unidade Ayrton Senna abriga um empório completo, 
               desenhado para elevar sua experiência degustativa a outro patamar.
             </p>

             <div className="mt-12 space-y-8">
               {gourmetItems.map((item, index) => (
                 <div key={index} className="gourmet-stagger flex items-start gap-5">
                    <span className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-bravino-peach/20 text-bravino-red shadow-sm border border-bravino-peach/40">
                       <item.icon className="h-6 w-6" strokeWidth={1.4} />
                    </span>
                    <div>
                      <h3 className="font-serif text-[1.4rem] font-bold text-bravino-black">{item.title}</h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-bravino-black/75 max-w-[34ch]">
                         {item.description}
                      </p>
                    </div>
                 </div>
               ))}
             </div>

             <div className="gourmet-stagger mt-16 pt-6 border-t border-bravino-peach/30">
               <button
                  type="button"
                  className="group inline-flex items-center gap-4 bg-bravino-red px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-bravino-cream transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-black hover:text-bravino-peach hover:shadow-[0_0_20px_rgba(114,47,55,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bravino-peach focus-visible:ring-offset-2 focus-visible:ring-offset-bravino-cream"
                >
                  <span className="flex items-center gap-2">Detalhes da Unidade <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></span>
                </button>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
