import type {Metadata} from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Bravino Wine Concept',
  description: 'Viva a Experiencia BRAVINO',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning className="bg-bravino-black font-sans text-bravino-cream antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
