# 🚀 GUIA DE INSTALAÇÃO - PHT BLOG

## Passo 1: Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
cd C:\Users\Paulo\Desktop\include-projetos\Protótipos\PHT-nextjs
npm install
```

⏱️ Isso levará alguns minutos...

## Passo 2: Rodar o Projeto

Após a instalação, execute:

```bash
npm run dev
```

## Passo 3: Acessar o Blog

Abra o navegador em: **http://localhost:3000**

Você verá:
- **/** - Homepage
- **/blog** - Listagem de posts
- **/blog/[slug]** - Posts individuais
- **/blog/categoria/[categoria]** - Posts por categoria

## 📝 Posts Já Criados

✅ Como Captar Mais Clientes para seu Escritório (captacao-clientes)
✅ 5 Erros Fatais de Marketing Jurídico (marketing-juridico)
✅ Instagram para Advogados: Guia Completo (redes-sociais)
✅ Como Estruturar o Funil de Vendas (gestao-escritorio)

## ➕ Como Adicionar Novos Posts

1. Crie arquivo em `content/posts/nome-do-post.mdx`
2. Use este template:

```mdx
---
title: "Título do Seu Post"
date: "2026-01-27"
author: "Pedro Targino"
excerpt: "Resumo breve do post"
category: "categoria-slug"
tags: ["tag1", "tag2"]
---

# Título Principal

Seu conteúdo aqui...

## Subtítulo

Mais conteúdo...
```

3. Salve e recarregue o navegador!

## 🎨 Personalização

### Cores (arquivo: tailwind.config.ts)
- `pht-dark`: #001F3F
- `pht-black`: #000814
- `pht-gold`: #D4AF37
- `pht-blue`: #003D7A

### Categorias Disponíveis
- marketing-juridico
- captacao-clientes
- gestao-escritorio
- redes-sociais

## 🚀 Deploy no Vercel (Gratuito)

1. Crie conta em vercel.com
2. Conecte seu GitHub
3. Importe o projeto
4. Deploy automático!

## 📊 Benefícios SEO Implementados

✅ Meta tags otimizadas
✅ Open Graph (compartilhamento social)
✅ Schema markup (rich snippets Google)
✅ URLs amigáveis (slugs)
✅ Responsive design
✅ Performance otimizada
✅ Sitemap (futuro)

## 🎯 Métricas para Acompanhar

Após publicar, monitore:
- Google Analytics (instale depois)
- Google Search Console
- Tempo de carregamento
- Taxa de rejeição
- Artigos mais lidos

## ❓ Problemas Comuns

### "Module not found"
```bash
npm install
```

### Porta 3000 ocupada
```bash
npm run dev -- -p 3001
```

### Erro de TypeScript
```bash
npm run build
```

## 📞 Suporte

Qualquer dúvida:
- WhatsApp: +55 84 96051854
- Instagram: @pht.co

---

**PRONTO! Seu blog está funcionando! 🎉**
