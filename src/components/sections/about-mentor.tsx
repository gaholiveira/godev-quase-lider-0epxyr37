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
      <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Conheça Seu Mentor</h2>
          <p className="mt-3 text-base text-slate-400 sm:mt-4 sm:text-lg">Quem vai guiar sua jornada de transformação</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 space-y-4 sm:mt-16 sm:space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">{mentor.name}</h3>
            <p className="mt-2 text-base text-leadership-blue-light sm:text-lg">{mentor.title}</p>
          </div>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{mentor.bio}</p>
          <div className="grid grid-cols-2 gap-4 pt-4 sm:gap-6 sm:pt-6 lg:grid-cols-4">
            {mentor.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center backdrop-blur-sm sm:p-6"
              >
                <div className="text-leadership-blue-light">{achievement.icon}</div>
                <div className="mt-2 text-xl font-bold text-white sm:mt-3 sm:text-2xl">{achievement.metric}</div>
                <div className="mt-1 text-xs text-slate-400 sm:text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
          <a
            href="#product"
            className="mt-6 inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-leadership-orange to-leadership-orange-light px-6 py-3 text-base font-semibold text-white shadow-lg shadow-leadership-orange/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-orange/50 active:scale-95 sm:mt-8 sm:w-auto sm:px-8 sm:py-4"
          >
            Agende uma Conversa
          </a>
        </motion.div>
      </div>
    </section>
  );
}