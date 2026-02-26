'use client';

import { motion } from 'framer-motion';
import type { TestimonialItem } from '@/types';

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialItem[];
}

export function TestimonialsSection({
  title = 'Histórias de Sucesso',
  subtitle = 'Veja o que nossos clientes dizem sobre sua transformação.',
  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fundadora de E-commerce',
      content: 'Este sistema transformou completamente meu negócio. Fui de R$ 10k/mês para R$ 100k/mês em apenas 6 meses.',
    },
  ],
}: TestimonialsSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-3 text-base text-slate-400 sm:mt-4 sm:text-lg">{subtitle}</p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-leadership-blue/30 bg-slate-950/50 p-5 shadow-lg shadow-leadership-blue/5 backdrop-blur-sm transition-all duration-200 hover:border-leadership-blue/60 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-leadership-gold/20 sm:p-6"
            >
              <p className="text-sm text-slate-200 sm:text-base">"{testimonial.content}"</p>
              <div className="mt-4 flex items-center gap-3 sm:mt-6">
                {testimonial.avatar && (
                  <div className="size-10 overflow-hidden rounded-full bg-slate-800">
                    <img src={testimonial.avatar} alt={testimonial.name} className="size-full object-cover" />
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium text-white sm:text-base">{testimonial.name}</div>
                  <div className="text-xs text-slate-500 sm:text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}