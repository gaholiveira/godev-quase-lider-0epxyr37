'use client';

import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Mic, Lightbulb, Users, Video, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PalestrasPage() {
  const topics = [
    { icon: <Lightbulb className="size-8" />, title: 'Liderança Transformadora', description: 'Como inspirar equipes e gerar resultados extraordinários.' },
    { icon: <Users className="size-8" />, title: 'Gestão de Alta Performance', description: 'Estratégias para construir times de elite e cultura vencedora.' },
    { icon: <Target className="size-8" />, title: 'Tomada de Decisão Estratégica', description: 'Frameworks para decisões rápidas e assertivas sob pressão.' },
    { icon: <TrendingUp className="size-8" />, title: 'Mindset de Crescimento', description: 'Desenvolva mentalidade resiliente e orientada a resultados.' },
  ];
  const formats = [
    'Palestras presenciais (1h a 3h)',
    'Webinars ao vivo (45min a 1h30)',
    'Workshops interativos (meio dia ou dia inteiro)',
    'Keynotes para eventos corporativos',
    'Sessões de Q&A pós-palestra',
    'Materiais de apoio customizados',
  ];
  return (
    <>
      <Navbar />
      <WhatsAppButton phoneNumber="5511999999999" message="Olá! Gostaria de solicitar uma proposta de palestra." />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden bg-slate-950 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-leadership-gold/20 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Mic className="mx-auto size-16 text-leadership-gold-light" />
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Palestras de Liderança</h1>
              <p className="mt-4 text-lg text-slate-300">Inspire sua equipe com conteúdo de alta performance. Palestras customizadas para eventos corporativos e treinamentos.</p>
            </motion.div>
          </div>
        </section>
        <section className="border-t border-slate-800 bg-slate-900/30 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold text-white">Temas Disponíveis</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {topics.map((topic, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-xl border border-leadership-gold/30 bg-slate-950/50 p-6">
                  <div className="text-leadership-gold-light">{topic.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{topic.title}</h3>
                  <p className="mt-2 text-slate-400">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-slate-800 bg-slate-950 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold text-white">Formatos Disponíveis</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {formats.map((format, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-3">
                  <CheckCircle className="size-5 shrink-0 text-leadership-gold-light" />
                  <span className="text-slate-300">{format}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-slate-800 bg-gradient-to-b from-slate-900/30 to-slate-950 py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Pronto para Inspirar Sua Equipe?</h2>
            <p className="mt-4 text-lg text-slate-300">Solicite uma proposta personalizada e descubra como uma palestra pode transformar sua organização.</p>
            <Link href="#" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-leadership-gold to-leadership-gold-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-leadership-gold/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-gold/50 active:scale-95">
              Solicitar Proposta <ArrowRight className="size-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function Target({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" strokeWidth="2" />
    </svg>
  );
}

function TrendingUp({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="17 6 23 6 23 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}