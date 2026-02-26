# Quase Líder — Plataforma de Liderança

Plataforma completa para cursos, mentoria e palestras de liderança de alta performance. Landing page otimizada para conversão com design premium e animações fluidas.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

### Landing Page
- ✅ Hero section com background image e CTA
- ✅ Navbar responsiva com menu mobile
- ✅ Social proof metrics bar
- ✅ Manifesto/missão
- ✅ Seção "Sobre o Mentor" com background image
- ✅ Product showcase (3 cards: Cursos, Mentoria, Palestras)
- ✅ Testimonials section
- ✅ Botão flutuante do WhatsApp
- ✅ Footer com links organizados

### Páginas Dedicadas
- ✅ `/cursos` — Módulos, benefícios e CTA para acessar plataforma
- ✅ `/mentoria` — Processo, benefícios e CTA para agendar sessão
- ✅ `/palestras` — Temas, formatos e CTA para solicitar proposta

### Design & UX
- ✅ Paleta de alta conversão (azul confiança, laranja energia, dourado premium)
- ✅ Animações Framer Motion (fade-in, slide-up, stagger)
- ✅ Responsive design (mobile-first)
- ✅ Hover effects e transições suaves
- ✅ Background images com overlay gradiente

### Tech Stack
- ✅ Next.js 16 (App Router)
- ✅ React 19
- ✅ TypeScript (strict mode)
- ✅ Tailwind CSS (paleta customizada)
- ✅ Framer Motion (animações)
- ✅ Lucide React (ícones)
- ✅ Vercel-ready

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout com Inter font
│   ├── page.tsx            # Landing page principal
│   ├── not-found.tsx       # 404 page
│   ├── globals.css         # Tailwind + variáveis CSS customizadas
│   ├── cursos/
│   │   └── page.tsx        # Página de cursos
│   ├── mentoria/
│   │   └── page.tsx        # Página de mentoria
│   └── palestras/
│       └── page.tsx        # Página de palestras
├── components/
│   ├── layout/
│   │   └── navbar.tsx      # Navbar responsiva com menu mobile
│   ├── sections/
│   │   ├── hero.tsx        # Hero com background image
│   │   ├── social-proof-bar.tsx  # Métricas
│   │   ├── manifesto.tsx   # Missão
│   │   ├── about-mentor.tsx      # Sobre o mentor (background image)
│   │   ├── product-showcase.tsx  # Cards de produtos
│   │   └── testimonials.tsx      # Depoimentos
│   └── ui/
│       └── whatsapp-button.tsx   # Botão flutuante do WhatsApp
├── types/
│   └── index.ts            # TypeScript types compartilhados
└── lib/
    └── utils.ts            # cn() helper para Tailwind
```

## Paleta de Cores

Cores otimizadas para conversão em vendas de cursos e mentorias:

- **Azul (Confiança):** `#1e40af` (dark), `#3b82f6` (light)
- **Laranja (Energia):** `#ea580c` (dark), `#f97316` (light)
- **Dourado (Premium):** `#d97706` (dark), `#fbbf24` (light)
- **Background:** `slate-950` (escuro para contraste)

Use as classes Tailwind: `bg-leadership-blue`, `text-leadership-orange-light`, etc.

## Customization

### Atualizar conteúdo do mentor
Edite `src/components/sections/about-mentor.tsx` — altere `name`, `title`, `bio`, `imageUrl` e `achievements`.

### Trocar imagens de background
Edite `src/app/page.tsx` — atualize `backgroundImage` em `HeroSection` e `AboutMentor`.

### Configurar WhatsApp
Edite `src/components/ui/whatsapp-button.tsx` — altere `phoneNumber` (formato: `5511999999999`) e `message`.

### Adicionar formulário de contato
Use o Chat para gerar form com Server Actions e validação Zod.

### Conectar CMS
Integre Sanity, Contentful ou Prismic para conteúdo dinâmico.

### Adicionar analytics
Instale Vercel Analytics (`@vercel/analytics`) ou Google Analytics.

### Integrar pagamentos
Adicione Stripe para checkout de cursos/mentorias.

## Deploy (Vercel)

1. Push para GitHub/GitLab/Bitbucket
2. Importe o projeto na [Vercel](https://vercel.com)
3. Deploy (zero config necessária)

## Environment Variables

O projeto não requer variáveis de ambiente para o MVP. Se adicionar features futuras (forms, analytics, CMS), você pode precisar:

| Variable | Required | Where to get |
|----------|----------|---------------|
| NEXT_PUBLIC_SITE_URL | Optional | Sua URL de produção (ex: https://quaselider.com) |
| NEXT_PUBLIC_WHATSAPP_NUMBER | Optional | Número do WhatsApp (ex: 5511999999999) |

## Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

## Support

Built with [GoDev Studio](https://godev.studio). Para dúvidas, use o Chat para estender seu app.

---

**Próximos passos sugeridos:**
- Adicionar formulário de contato com Server Actions
- Integrar Stripe para pagamentos de cursos
- Conectar CMS (Sanity/Contentful) para conteúdo dinâmico
- Adicionar Vercel Analytics para métricas de conversão
- Implementar SEO (generateMetadata, sitemap.ts)