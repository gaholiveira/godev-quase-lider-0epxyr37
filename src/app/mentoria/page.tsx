'use client';

import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Users, Target, TrendingUp, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MentoriaPage() {
  const process = [
    { step: '1', title: 'Diagnóstico Inicial', description: 'Avaliação completa do seu perfil de liderança e objetivos.' },
    { step: '2', title: 'Plano Personalizado', description: 'Criação de roadmap customizado para seus desafios específicos.' },
    { step: '3', title: 'Sessões 1-on-1', description: 'Encontros semanais com feedback direto e estratégias práticas.' },
    { step: '4', title: 'Acompanhamento Contínuo', description: 'Suporte entre sessões e ajustes no plano conforme evolução.' },
  ];
  const benefits = [
    'Sessões individuais com especialista',
    'Plano de ação 100% customizado',
    'Suporte prioritário via WhatsApp',
    'Acesso ao mastermind exclusivo',
    'Materiais e ferramentas personalizadas',
    'Garantia de resultados em 90 dias',
  ];
  return (
    <>
      <Navbar />
      <WhatsAppButton phoneNumber="5511999999999" message="Olá! Gostaria de saber mais sobre a mentoria de liderança." />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden bg-slate-950 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-leadership-orange/20 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Users className="mx-auto size-16 text-leadership-orange-light" />
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Mentoria de Liderança</h1>
              <p className="mt-4 text-lg text-slate-300">Acompanhamento personalizado para acelerar seus resultados. Transforme desafios em conquistas com suporte direto.</p>
            </motion.div>
          </div>
        </section>
        <section className="border-t border-slate-800 bg-slate-900/30 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold text-white">Como Funciona</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {process.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-xl border border-leadership-orange/30 bg-slate-950/50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-leadership-orange/20 text-xl font-bold text-leadership-orange-light">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-slate-800 bg-slate-950 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold text-white">O Que Está Incluído</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-3">
                  <CheckCircle className="size-5 shrink-0 text-leadership-orange-light" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-slate-800 bg-gradient-to-b from-slate-900/30 to-slate-950 py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Pronto para Acelerar Seus Resultados?</h2>
            <p className="mt-4 text-lg text-slate-300">Agende uma sessão de diagnóstico gratuita e descubra como a mentoria pode transformar sua liderança.</p>
            <Link href="#" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-leadership-orange to-leadership-orange-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-leadership-orange/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-orange/50 active:scale-95">
              Agendar Sessão Gratuita <ArrowRight className="size-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}