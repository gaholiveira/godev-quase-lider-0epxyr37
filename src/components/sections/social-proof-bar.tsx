'use client';

import { motion } from 'framer-motion';
import type { SocialProofItem } from '@/types';

interface SocialProofBarProps {
  items?: SocialProofItem[];
}

export function SocialProofBar({
  items = [
    { metric: '10,000+', label: 'Active Users' },
    { metric: '$50M+', label: 'Revenue Generated' },
    { metric: '98%', label: 'Satisfaction Rate' },
    { metric: '24/7', label: 'Support Available' },
  ],
}: SocialProofBarProps) {
  return (
    <section className="border-y border-slate-800 bg-slate-900/30 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-leadership-blue-light to-leadership-orange-light bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">{item.metric}</div>
              <div className="mt-2 text-sm text-slate-400">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}