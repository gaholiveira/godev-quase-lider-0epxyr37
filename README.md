# Quase Líder 🚀

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat)](LICENSE)

Landing page de alta conversão para programas de liderança (cursos, mentoria e palestras). Construída com Next.js 16, TypeScript e Tailwind CSS.

## ✨ Features

- 🎨 **Design Premium** — Paleta de cores profissional (azul confiança + laranja energia + dourado premium)
- 🎭 **Animações Fluidas** — Framer Motion com fade-in, slide-up e stagger effects
- 📱 **Mobile-First** — Responsivo com touch targets de 44px e menu hamburger
- ⏱️ **Countdown Timer** — Urgência com contador regressivo customizável
- 💬 **WhatsApp Flutuante** — Botão de contato direto com animação
- 🎯 **Cursor Customizado** — Efeito de trail interativo (desktop only)
- 🔒 **Garantia Explícita** — Badge de 30 dias em todos os CTAs
- ❓ **FAQ Accordion** — 8 perguntas frequentes com animação
- 🎓 **3 Produtos** — Cursos, Mentoria e Palestras com páginas dedicadas
- 🌟 **Social Proof** — Métricas de impacto e depoimentos
- 🚀 **Performance** — Next.js 16 App Router com Server Components

## 🛠️ Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript 5.7.2
- **Styling:** Tailwind CSS 3.4.17
- **Animations:** Framer Motion 11.15.0
- **Icons:** Lucide React 0.469.0
- **Utils:** clsx, tailwind-merge

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── (pages)/
│   │   ├── cursos/page.tsx
│   │   ├── mentoria/page.tsx
│   │   └── palestras/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   └── navbar.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── social-proof-bar.tsx
│   │   ├── manifesto.tsx
│   │   ├── about-mentor.tsx
│   │   ├── product-showcase.tsx
│   │   ├── testimonials.tsx
│   │   └── faq.tsx
│   └── ui/
│       ├── countdown.tsx
│       ├── custom-cursor.tsx
│       └── whatsapp-button.tsx
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

## 🚀 Setup

### Pré-requisitos

- Node.js 18+ ou 20+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/quase-lider.git
cd quase-lider

# Instale as dependências
pnpm install

# Copie o .env.example (se necessário)
cp .env.example .env

# Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Scripts

```bash
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Build de produção
pnpm start        # Inicia servidor de produção
pnpm lint         # Executa ESLint
```

## 🎨 Customização

### Cores

Edite `tailwind.config.ts` para alterar a paleta:

```typescript
colors: {
  'leadership-blue': '#1e40af',
  'leadership-blue-light': '#3b82f6',
  'leadership-orange': '#ea580c',
  'leadership-orange-light': '#f97316',
  'leadership-gold': '#d97706',
  'leadership-gold-light': '#fbbf24',
}
```

### Countdown

Altere a data alvo em `src/app/page.tsx`:

```typescript
const countdownTarget = new Date('2025-02-28T23:59:59');
```

### WhatsApp

Atualize o número e mensagem em cada página:

```typescript
<WhatsAppButton 
  phoneNumber="5511999999999" 
  message="Olá! Gostaria de saber mais." 
/>
```

### Conteúdo

Edite os arquivos em `src/app/` e `src/components/sections/` para alterar textos, imagens e CTAs.

## 🌐 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/quase-lider)

1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Outras Plataformas

```bash
# Build de produção
pnpm build

# Inicie o servidor
pnpm start
```

Compatível com Netlify, Railway, Render e qualquer plataforma que suporte Node.js.

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou pull request.

## 📧 Contato

Para dúvidas ou suporte:
- Email: contato@quaselider.com.br
- WhatsApp: +55 11 99999-9999

---

**Construído com ❤️ usando [GoDev Studio](https://godev.studio)**