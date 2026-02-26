import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="bg-gradient-to-r from-leadership-blue-light to-leadership-orange-light bg-clip-text text-6xl font-bold text-transparent">404</h1>
        <p className="mt-4 text-xl text-slate-300">Página não encontrada</p>
        <p className="mt-2 text-sm text-slate-500">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-leadership-blue to-leadership-blue-light px-6 py-3 text-sm font-medium text-white shadow-lg shadow-leadership-blue/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-blue/50 active:scale-95"
        >
          <Home className="size-4" />
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}