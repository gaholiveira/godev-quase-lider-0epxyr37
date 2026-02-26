import { Navbar } from '@/components/layout/navbar';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { HeroSection } from '@/components/sections/hero';
import { SocialProofBar } from '@/components/sections/social-proof-bar';
import { ManifestoSection } from '@/components/sections/manifesto';
import { AboutMentor } from '@/components/sections/about-mentor';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FAQSection } from '@/components/sections/faq';
import { Zap } from 'lucide-react';

export default function Page() {
  const countdownTarget = new Date('2025-02-28T23:59:59');
  return (
    <>
      <Navbar />
      <WhatsAppButton phoneNumber="5511999999999" message="Olá! Gostaria de saber mais sobre os programas de liderança." />
      <main className="min-h-screen pt-16">
        <HeroSection
          title="Transforme Sua Liderança em Resultados Extraordinários"
          subtitle="Junte-se a milhares de líderes que já alcançaram alta performance com nossos cursos, mentorias e palestras exclusivas."
          ctaText="Comece Agora"
          ctaHref="#product"
          backgroundImage="https://imglur.com/get/zhMgPn.png?v=268518186"
          countdownTarget={countdownTarget}
        />
        <SocialProofBar
          items={[
            { metric: '10.000+', label: 'Líderes Treinados' },
            { metric: '500+', label: 'Empresas Atendidas' },
            { metric: '98%', label: 'Satisfação' },
            { metric: '24/7', label: 'Suporte Disponível' },
          ]}
        />
        <ManifestoSection
          title="Nossa Missão"
          content="Acreditamos que todo profissional tem potencial para se tornar um líder excepcional. Nossa missão é democratizar o acesso a estratégias de liderança de alta performance, antes restritas a executivos de grandes corporações. Não vendemos apenas cursos — construímos uma comunidade de líderes que se recusam a aceitar a mediocridade."
        />
        <AboutMentor />
        <ProductShowcase
          title="Programas Completos de Liderança"
          subtitle="Escolha o formato ideal para sua jornada de transformação."
          products={[
            {
              name: 'Cursos',
              description: 'Aprenda no seu ritmo com conteúdo estruturado e prático.',
              features: [
                'Módulos de treinamento completos',
                'Acesso vitalício ao conteúdo',
                'Certificado de conclusão',
                'Materiais complementares',
                'Comunidade exclusiva',
              ],
            },
            {
              name: 'Mentoria',
              description: 'Acompanhamento personalizado para acelerar seus resultados.',
              features: [
                'Sessões 1-on-1 com especialistas',
                'Plano de ação customizado',
                'Suporte prioritário',
                'Feedback contínuo',
                'Acesso ao mastermind',
              ],
            },
            {
              name: 'Palestras',
              description: 'Inspire sua equipe com conteúdo de alta performance.',
              features: [
                'Palestras presenciais ou online',
                'Conteúdo customizado',
                'Materiais de apoio',
                'Sessão de Q&A',
                'Follow-up pós-evento',
              ],
            },
          ]}
        />
        <TestimonialsSection
          title="Histórias de Sucesso"
          subtitle="Veja o que nossos clientes dizem sobre sua transformação."
          testimonials={[
            {
              name: 'Carlos Silva',
              role: 'Diretor de Operações',
              content: 'Este programa transformou completamente minha liderança. Fui promovido a VP em 8 meses. O ROI é incrível.',
            },
            {
              name: 'Ana Paula Costa',
              role: 'CEO de Startup',
              content: 'Já fiz vários cursos de liderança. Este é o único que realmente entrega resultados práticos. Vale cada centavo.',
            },
            {
              name: 'Roberto Mendes',
              role: 'Gerente de Vendas',
              content: 'A comunidade sozinha já vale o investimento. Estar cercado de outros líderes de alta performance me levou a níveis que nunca imaginei.',
            },
          ]}
        />
        <FAQSection />
        <section className="border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Pronto para Transformar Sua Liderança?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Junte-se aos líderes de sucesso que já deram o salto. Seu eu do futuro agradecerá.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
              <svg className="size-5 text-leadership-gold-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Garantia incondicional de 30 dias ou seu dinheiro de volta</span>
            </div>
            <a
              href="#product"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-leadership-orange to-leadership-orange-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-leadership-orange/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-leadership-orange/50 active:scale-95"
            >
              Garanta Sua Vaga Agora
              <Zap className="size-5" />
            </a>
          </div>
        </section>
        <footer className="border-t border-slate-800 bg-slate-950 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-semibold text-leadership-blue-light">Programas</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  <li><a href="#product" className="transition-colors hover:text-leadership-blue-light">Cursos</a></li>
                  <li><a href="#product" className="transition-colors hover:text-leadership-blue-light">Mentoria</a></li>
                  <li><a href="#product" className="transition-colors hover:text-leadership-blue-light">Palestras</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-leadership-blue-light">Empresa</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  <li><a href="#mentor" className="transition-colors hover:text-leadership-blue-light">Sobre</a></li>
                  <li><a href="#contact" className="transition-colors hover:text-leadership-blue-light">Contato</a></li>
                  <li><a href="#privacy" className="transition-colors hover:text-leadership-blue-light">Privacidade</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-leadership-blue-light">Suporte</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  <li><a href="#help" className="transition-colors hover:text-leadership-blue-light">Central de Ajuda</a></li>
                  <li><a href="#faq" className="transition-colors hover:text-leadership-blue-light">FAQ</a></li>
                  <li><a href="#terms" className="transition-colors hover:text-leadership-blue-light">Termos</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Quase Líder. Construído com GoDev Studio.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}