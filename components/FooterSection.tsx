'use client';

import { useLayoutEffect, useRef } from 'react';
import { Clock3, Instagram, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function FooterSection() {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.footer-col', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 95%',
        }
      });
      
      gsap.from('.footer-bottom', {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer-bottom',
          start: 'top 95%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={containerRef} className="bg-bravino-black text-bravino-cream relative z-20">
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 py-12 md:px-6 md:py-20 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 xl:grid-cols-4">
          <section className="footer-col space-y-6">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bravino-peach">Brand</h3>
            <div className="inline-flex items-center gap-4">
               <Image
                src="/logo-bravino-round.jpg"
                alt="Logo redonda Bravino"
                width={120}
                height={120}
                quality={100}
                className="h-16 w-16 rounded-full border border-bravino-peach/80 object-contain shadow-sm"
              />
              <div>
                <p className="font-serif text-2xl font-bold tracking-wide text-bravino-cream">BRAVINO</p>
                <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-bravino-peach">Wine Concept</p>
              </div>
            </div>
            <p className="max-w-xs font-sans text-sm font-light leading-relaxed text-bravino-cream/80 pt-2">
              Curadoria, acolhimento e experiências para transformar cada brinde em memória inesquecível.
            </p>
          </section>

          <section className="footer-col flex flex-col gap-5">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bravino-peach">Unidade Ayrton Senna</h3>
            <div className="inline-flex items-center gap-3 text-bravino-cream/90 pt-1">
               <Clock3 className="h-4 w-4 text-bravino-peach" strokeWidth={1.8} />
              <p className="font-sans text-[0.95rem] font-light leading-relaxed">Seg a Sex: 09h às 22h / Sáb: 09h às 17h</p>
            </div>
            <Link
              href="https://wa.me/5543991231069"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit border border-bravino-peach/60 px-5 py-2.5 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-bravino-peach transition-all duration-300 hover:bg-bravino-red hover:border-bravino-red hover:text-bravino-cream hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(114,47,55,0.4)]"
            >
               WhatsApp Matriz
            </Link>
          </section>

          <section className="footer-col flex flex-col gap-5">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bravino-peach">Unidade Santana</h3>
            <div className="inline-flex items-center gap-3 text-bravino-cream/90 pt-1">
              <Clock3 className="h-4 w-4 text-bravino-peach" strokeWidth={1.8} />
              <p className="font-sans text-[0.95rem] font-light leading-relaxed">Seg a Sáb: 11h às 23h</p>
            </div>
             <Link
              href="https://wa.me/5543999731534"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit border border-bravino-peach/60 px-5 py-2.5 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-bravino-peach transition-all duration-300 hover:bg-bravino-red hover:border-bravino-red hover:text-bravino-cream hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(114,47,55,0.4)]"
            >
               WhatsApp Santana
            </Link>
          </section>

          <section className="footer-col space-y-6">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bravino-peach">Socials & Links</h3>
            <div className="flex flex-col gap-4 pt-1">
              <Link
                href="https://instagram.com/bravino"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-3 font-sans text-[0.95rem] font-light text-bravino-cream/90 transition-colors hover:text-bravino-peach"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bravino-cream/10 transition-colors group-hover:bg-bravino-peach/20">
                  <Instagram className="h-4 w-4" />
                </span>
                 @bravinowine
              </Link>
              <Link
                href="https://bravino.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-3 font-sans text-[0.95rem] font-light text-bravino-cream/90 transition-colors hover:text-bravino-peach"
              >
                 <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bravino-cream/10 transition-colors group-hover:bg-bravino-peach/20">
                  <ShoppingBag className="h-4 w-4" />
                </span>
                E-commerce
              </Link>
            </div>
          </section>
        </div>

        <div className="footer-bottom mt-20 border-t border-bravino-peach/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-center md:text-left font-sans text-xs tracking-[0.08em] text-bravino-cream/60">
            © 2026 Bravino Wine Concept. Todos os direitos reservados.
          </p>
          <div className="flex justify-center md:justify-end transition-all duration-300 hover:brightness-125">
            <img 
              src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/logo/op7/logo.svg" 
              alt="OP7 Franchising"
              className="h-28 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
