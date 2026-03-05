import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bravino Wine Concept',
  description: 'Viva a Experiencia BRAVINO',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
