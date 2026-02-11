# PHT Blog - Next.js

Blog profissional para PHT (escritório de marketing jurídico) construído com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Features

- ✅ Next.js 14 com App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ MDX para posts do blog
- ✅ SEO otimizado
- ✅ Schema markup para rich snippets
- ✅ Sistema de categorias
- ✅ Posts relacionados
- ✅ Design responsivo
- ✅ Performance otimizada

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📝 Como Adicionar Novos Posts

1. Crie um arquivo `.mdx` na pasta `content/posts/`
2. Use o template de frontmatter:

```mdx
---
title: "Título do Post"
date: "2026-01-27"
author: "Pedro Targino"
excerpt: "Descrição breve de 1-2 linhas"
category: "categoria-slug"
image: "/images/post-image.jpg" (opcional)
tags: ["tag1", "tag2", "tag3"]
---

Conteúdo do post em Markdown...
```

## 📁 Estrutura de Pastas

```
PHT-nextjs/
├── app/
│   ├── blog/
│   │   ├── [slug]/          # Post individual
│   │   ├── categoria/       # Listagem por categoria
│   │   └── page.tsx         # Listagem principal
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── content/
│   └── posts/               # Posts em MDX
├── lib/
│   └── posts.ts             # Funções para gerenciar posts
└── public/                  # Imagens e assets
```

## 🎨 Categorias Disponíveis

- `marketing-juridico` - Estratégias de marketing para advogados
- `captacao-clientes` - Técnicas de aquisição de clientes
- `gestao-escritorio` - Gestão e processos
- `redes-sociais` - Instagram, LinkedIn, etc.

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push para GitHub
2. Conecte o repositório na Vercel
3. Deploy automático!

### Outras plataformas

```bash
npm run build
npm run start
```

## 📊 SEO

O blog já vem com:
- Meta tags otimizadas
- Open Graph tags
- Schema markup (BlogPosting)
- Sitemap automático
- URLs amigáveis

## 🎯 Próximos Passos

- [ ] Adicionar busca no blog
- [ ] Newsletter integration
- [ ] Comentários (Disqus ou similar)
- [ ] Sistema de tags
- [ ] Paginação
- [ ] RSS feed
- [ ] Sitemap.xml

## 📞 Suporte

Dúvidas? Entre em contato:
- WhatsApp: [+55 84 96051854](https://wa.me/558496051854)
- Instagram: [@pht.co](https://instagram.com/pht.co)

---

**PHT** - Marketing Jurídico & Vendas
