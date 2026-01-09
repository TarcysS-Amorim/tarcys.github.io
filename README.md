# Portfolio - Tarcys Amorim

Portfolio pessoal desenvolvido com React, TypeScript, Vite e Tailwind CSS. Design brutalista com foco em performance e acessibilidade.

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Hook Form + Zod** - Validação de formulários
- **EmailJS** - Envio de emails
- **React Query** - Gerenciamento de estado
- **shadcn/ui** - Componentes UI

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## ⚙️ Configuração

### EmailJS (Formulário de Contato)

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Crie um serviço de email
3. Crie um template de email
4. Copie `.env.example` para `.env` e preencha:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

### Google Analytics (Opcional)

Para habilitar analytics, adicione no `.env`:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/       # Componentes React
│   ├── ui/          # Componentes shadcn/ui
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── ErrorBoundary.tsx
│   ├── Expertise.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Projects.tsx
├── hooks/           # Custom hooks
│   ├── use-analytics.ts
│   └── use-mobile.tsx
├── lib/             # Utilitários
│   ├── analytics.ts
│   ├── email-service.ts
│   ├── utils.ts
│   └── validation.ts
├── pages/           # Páginas
│   ├── Index.tsx
│   └── NotFound.tsx
└── App.tsx          # Componente principal
```

## ✨ Funcionalidades

- ✅ Design responsivo e acessível
- ✅ Animações suaves com Framer Motion
- ✅ Formulário de contato com validação
- ✅ Error Boundary para tratamento de erros
- ✅ Lazy loading de componentes
- ✅ Analytics integrado (opcional)
- ✅ TypeScript strict mode
- ✅ SEO otimizado

## 🎨 Design

O design segue o estilo **brutalista** com:
- Alto contraste
- Bordas grossas
- Tipografia monospace
- Cores vibrantes (lime green como primária)
- Efeitos visuais (scanlines, grid, marquee)

## 🔧 Scripts

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run build:dev` - Build em modo desenvolvimento
- `npm run preview` - Preview do build
- `npm run lint` - Executa ESLint

## 📝 Licença

Este projeto é privado e pessoal.

## 👤 Autor

**Tarcys Amorim**
- GitHub: [@TarcysAmorim](https://github.com/TarcysAmorim)
- LinkedIn: [tarcys](https://linkedin.com/in/tarcys)
- Email: contato@tarcys.dev

---

Built with passion & coffee ☕
