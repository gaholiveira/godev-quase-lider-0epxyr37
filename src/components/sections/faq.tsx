'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FAQItem } from '@/types';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

export function FAQSection({
  title = 'Perguntas Frequentes',
  subtitle = 'Tire suas dúvidas sobre nossos programas de liderança',
  items = [
    {
      question: 'Quanto tempo dura o programa de cursos?',
      answer: 'Os cursos têm duração média de 12 a 16 semanas, mas você tem acesso vitalício ao conteúdo e pode estudar no seu próprio ritmo. Não há prazo para conclusão.',
    },
    {
      question: 'A mentoria é individual ou em grupo?',
      answer: 'A mentoria é 100% individual (1-on-1). Cada sessão é personalizada para seus desafios específicos, com plano de ação customizado e suporte prioritário.',
    },
    {
      question: 'Posso parcelar o investimento?',
      answer: 'Sim! Oferecemos parcelamento em até 12x sem juros no cartão de crédito. Também aceitamos PIX com desconto à vista.',
    },
    {
      question: 'Há garantia de satisfação?',
      answer: 'Sim! Oferecemos garantia incondicional de 30 dias. Se você não estiver satisfeito por qualquer motivo, devolvemos 100% do seu investimento, sem perguntas.',
    },
    {
      question: 'Preciso ter experiência prévia em liderança?',
      answer: 'Não! Nossos programas atendem desde profissionais que estão começando até líderes experientes que querem elevar seu nível. O conteúdo é adaptável ao seu estágio.',
    },
    {
      question: 'As palestras são presenciais ou online?',
      answer: 'Oferecemos ambos os formatos. Palestras presenciais para eventos corporativos e webinars ao vivo para equipes remotas. O conteúdo é customizado para cada formato.',
    },
    {
      question: 'Recebo certificado ao concluir o curso?',
      answer: 'Sim! Ao concluir todos os módulos e atividades, você recebe um certificado digital reconhecido, que pode adicionar ao seu LinkedIn e currículo.',
    },
    {
      question: 'Qual o diferencial deste programa?',
      answer: 'Nosso foco é em resultados práticos, não teoria. Você aprende estratégias aplicáveis imediatamente, com suporte contínuo e acesso a uma comunidade exclusiva de líderes de alta performance.',
    },
  ],
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="border-t border-slate-800 bg-slate-950 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
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
        <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex min-h-[44px] w-full items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-slate-800/50 sm:gap-4 sm:p-6"
              >
                <span className="text-sm font-semibold text-white sm:text-base lg:text-lg">{item.question}</span>
                <ChevronDown
                  className={`size-4 shrink-0 text-leadership-blue-light transition-transform duration-200 sm:size-5 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-800 px-4 py-3 text-sm text-slate-300 sm:px-6 sm:py-4 sm:text-base">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}