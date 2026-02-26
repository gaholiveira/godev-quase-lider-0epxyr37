'use client';

import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { BookOpen, Clock, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CursosPage() {
  const modules = [
    { title: 'Fundamentos da Liderança', duration: '4 semanas', lessons: 12 },
    { title: 'Comunicação de Alta Performance', duration: '3 semanas', lessons: 10 },
    { title: 'Gestão de Equipes', duration: '4 semanas', lessons: 14 },
    { title: 'Tomada de Decisão Estratégica', duration: '3 semanas', lessons: 9 },
  ];
  const benefits = [
    'Acesso vitalício a todo conteúdo',
    'Certificado reconhecido',
    'Comunidade exclusiva de líderes',
    'Materiais complementares (PDFs, templates)',
    'Atualizações gratuitas',
    'Suporte via comunidade',
  ];
  return (
    <>
      <Navbar />
      <WhatsAppButton phoneNumber="5511999999999" message="Olá! Gostaria de saber mais sobre os cursos de liderança." />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden bg-slate-950 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-leadership-blue/20 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <BookOpen className="mx-auto size-16 text-leadership-blue-light" />
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Cursos de Liderança</h1>
              <p className="mt-4 text-lg text-slate-300">Aprenda no seu ritmo com conteúdo estruturado e prático. Transforme sua carreira com metodologias comprovadas.</p>
            </motion.div>
          </div>
        </section>
        <section className="border-t border-slate-800 bg-slate-900/30 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold text-white">Módulos do Curso</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {modules.map((module, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-xl border border-leadership-blue/30 bg-slate-950/50 p-6">
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                  <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1"><Clock className="size-4" />{module.duration}</div>
                    <div className="flex items-center gap-1"><BookOpen className="size-4" />{module.lessons} aulas</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-slate-800 bg-slate-950 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold text-white">O Que Você Recebe</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-3">
                  <CheckCircle className="size-5 shrink-0 text-leadership-blue-light" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-slate-800 bg-gradient-to-b from-slate-900/30 to-slate-950 py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Pronto para Começar?</h2>
            <p className="mt-4 text-lg text-slate-300">Acesse a plataforma de cursos e inicie sua jornada de transformação hoje.</p>
            <Link href="#" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-leadership-blue to-leadership-blue-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-leadership-blue/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-blue/50 active:scale-95">
              Acessar Cursos <ArrowRight className="size-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}