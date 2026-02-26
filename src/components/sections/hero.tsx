'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Countdown } from '@/components/ui/countdown';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  countdownTarget?: Date;
}

export function HeroSection({
  title = 'Construa algo incrível',
  subtitle = 'Seu app está pronto. Personalize com Chat — adicione seções, formulários ou conecte um CMS.',
  ctaText = 'Começar',
  ctaHref = '#cta',
  backgroundImage,
  countdownTarget,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-[length:100%_auto] bg-top bg-no-repeat"
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
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 sm:py-16 lg:py-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 max-w-2xl text-base text-slate-300 sm:mt-6 sm:text-lg lg:text-xl"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 space-y-4 sm:mt-8 sm:space-y-6"
          >
            <Link
              href={ctaHref}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-leadership-blue to-leadership-blue-light px-6 py-3 text-base font-semibold text-white shadow-lg shadow-leadership-blue/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-blue/50 active:scale-95 sm:px-8 sm:py-4 sm:text-lg"
            >
              {ctaText}
              <Zap className="size-5" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
              <svg className="size-4 shrink-0 text-leadership-gold-light sm:size-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
            {countdownTarget && (
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-leadership-orange-light sm:text-sm">Oferta Especial Expira Em:</p>
                <Countdown targetDate={countdownTarget} />
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}