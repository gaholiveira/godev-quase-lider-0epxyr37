'use client';

import { motion } from 'framer-motion';

interface ManifestoSectionProps {
  title?: string;
  content?: string;
}

export function ManifestoSection({
  title = 'Nossa Missão',
  content = 'Acreditamos que todo empreendedor merece acesso a ferramentas e estratégias de classe mundial. Nossa missão é democratizar o sucesso fornecendo soluções premium que antes estavam disponíveis apenas para empresas Fortune 500.',
}: ManifestoSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 rounded-xl border border-leadership-blue/50 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 shadow-lg shadow-leadership-blue/10 backdrop-blur-sm sm:mt-8 sm:p-8 lg:p-12"
        >
          <p className="text-base leading-relaxed text-slate-200 sm:text-lg">{content}</p>
        </motion.div>
      </div>
    </section>
  );
}