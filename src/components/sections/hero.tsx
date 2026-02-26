'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title = 'Construa algo incrível',
  subtitle = 'Seu app está pronto. Personalize com Chat — adicione seções, formulários ou conecte um CMS.',
  ctaText = 'Começar',
  ctaHref = '#cta',
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        </div>
      )}
      {!backgroundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-leadership-blue/20 via-transparent to-transparent" />
        </>
      )}
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 lg:py-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-leadership-blue to-leadership-blue-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-leadership-blue/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-blue/50 active:scale-95"
            >
              {ctaText}
              <Zap className="size-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}