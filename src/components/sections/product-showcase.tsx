'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ProductItem } from '@/types';

interface ProductShowcaseProps {
  title?: string;
  subtitle?: string;
  products?: ProductItem[];
}

export function ProductShowcase({
  title = 'Programas Completos de Liderança',
  subtitle = 'Escolha o formato ideal para sua jornada de transformação.',
  products = [
    {
      name: 'Cursos',
      description: 'Aprenda no seu ritmo com conteúdo estruturado e prático.',
      features: [
        'Módulos de treinamento completos',
        'Acesso vitalício ao conteúdo',
        'Certificado de conclusão',
        'Materiais complementares',
        'Comunidade exclusiva',
      ],
    },
    {
      name: 'Mentoria',
      description: 'Acompanhamento personalizado para acelerar seus resultados.',
      features: [
        'Sessões 1-on-1 com especialistas',
        'Plano de ação customizado',
        'Suporte prioritário',
        'Feedback contínuo',
        'Acesso ao mastermind',
      ],
    },
    {
      name: 'Palestras',
      description: 'Inspire sua equipe com conteúdo de alta performance.',
      features: [
        'Palestras presenciais ou online',
        'Conteúdo customizado',
        'Materiais de apoio',
        'Sessão de Q&A',
        'Follow-up pós-evento',
      ],
    },
  ],
}: ProductShowcaseProps) {
  const routes: Record<string, string> = {
    Cursos: '/cursos',
    Mentoria: '/mentoria',
    Palestras: '/palestras',
  };
  return (
    <section id="product" className="border-t border-slate-800 bg-slate-900/30 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-slate-400">{subtitle}</p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-xl border border-leadership-blue/30 bg-slate-950/50 p-8 shadow-lg shadow-leadership-blue/5 backdrop-blur-sm transition-all duration-200 hover:border-leadership-blue/60 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-leadership-orange/20"
            >
              <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
              <p className="mt-3 text-slate-400">{product.description}</p>
              {product.features && product.features.length > 0 && (
                <ul className="mt-8 flex-1 space-y-3">
                  {product.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="size-5 shrink-0 text-leadership-blue-light" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Link
                href={routes[product.name] || '#'}
                className="mt-8 w-full rounded-lg bg-gradient-to-r from-leadership-blue to-leadership-blue-light px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-leadership-blue/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-blue/50 active:scale-95"
              >
                Saiba Mais
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}