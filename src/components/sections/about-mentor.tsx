'use client';

import { Award, Users, TrendingUp, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import type { MentorInfo } from '@/types';

interface AboutMentorProps {
  mentor?: MentorInfo;
}

export function AboutMentor({
  mentor = {
    name: 'João Silva',
    title: 'Especialista em Liderança de Alta Performance',
    bio: 'Com mais de 15 anos de experiência em desenvolvimento de líderes, já transformei a carreira de milhares de profissionais. Minha missão é ajudar você a desbloquear seu potencial máximo e alcançar resultados extraordinários.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop',
    achievements: [
      { icon: <Award className="size-6" />, metric: '15+', label: 'Anos de Experiência' },
      { icon: <Users className="size-6" />, metric: '10.000+', label: 'Líderes Treinados' },
      { icon: <TrendingUp className="size-6" />, metric: '500+', label: 'Empresas Atendidas' },
      { icon: <Target className="size-6" />, metric: '98%', label: 'Taxa de Sucesso' },
    ],
  },
}: AboutMentorProps) {
  return (
    <section id="mentor" className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mentor.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/50" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Conheça Seu Mentor</h2>
          <p className="mt-4 text-lg text-slate-400">Quem vai guiar sua jornada de transformação</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 space-y-6"
        >
          <div>
            <h3 className="text-3xl font-bold text-white">{mentor.name}</h3>
            <p className="mt-2 text-lg text-leadership-blue-light">{mentor.title}</p>
          </div>
          <p className="text-lg leading-relaxed text-slate-300">{mentor.bio}</p>
          <div className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4">
            {mentor.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center backdrop-blur-sm"
              >
                <div className="text-leadership-blue-light">{achievement.icon}</div>
                <div className="mt-3 text-2xl font-bold text-white">{achievement.metric}</div>
                <div className="mt-1 text-sm text-slate-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
          <a
            href="#product"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-leadership-orange to-leadership-orange-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-leadership-orange/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-orange/50 active:scale-95 sm:w-auto"
          >
            Agende uma Conversa
          </a>
        </motion.div>
      </div>
    </section>
  );
}