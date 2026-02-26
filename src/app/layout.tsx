import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CustomCursor } from '@/components/ui/custom-cursor';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Quase Líder | Cursos, Mentoria e Palestras de Liderança',
  description: 'Transforme sua carreira com cursos, mentoria e palestras sobre liderança de alta performance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen overflow-x-hidden bg-slate-950 font-sans antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}