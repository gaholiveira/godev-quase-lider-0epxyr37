'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: '/cursos', label: 'Cursos' },
    { href: '/mentoria', label: 'Mentoria' },
    { href: '/palestras', label: 'Palestras' },
    { href: '/#mentor', label: 'Sobre o Mentor' },
  ];
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            Quase <span className="text-leadership-blue-light">Líder</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-leadership-blue-light"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#product"
              className="rounded-lg bg-gradient-to-r from-leadership-blue to-leadership-blue-light px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-leadership-blue/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-blue/50 active:scale-95"
            >
              Começar Agora
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#product"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-lg bg-gradient-to-r from-leadership-blue to-leadership-blue-light px-4 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-leadership-blue/30"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}