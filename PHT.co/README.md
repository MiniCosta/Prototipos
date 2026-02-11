# PHT.co - Site Institucional + Blog

Site institucional em HTML/CSS/JS + Blog em Next.js 14 para PHT - Planejamento, Humanização e Tecnologia.

## 📁 Estrutura do Projeto

```
PHT.co/
├── index.html          # Landing page principal
├── styles.css          # Estilos da landing page
├── assets/             # Imagens e recursos
└── blog/              # Aplicação Next.js do blog
    ├── app/           # App Router do Next.js
    ├── components/    # Componentes React
    ├── content/       # Posts do blog (MDX)
    └── lib/          # Utilitários
```

## 🚀 Deploy no Vercel com CI/CD

### Pré-requisitos
- Conta no [GitHub](https://github.com)
- Conta no [Vercel](https://vercel.com) (pode usar login do GitHub)
- Git instalado no computador

### Passo 1: Criar Repositório no GitHub

```bash
# Navegue até a pasta do projeto
cd "C:\Users\Paulo\Desktop\include-projetos\Protótipos\PHT.co"

# Inicialize o repositório Git
git init

# Adicione todos os arquivos
git add .

# Faça o commit inicial
git commit -m "Initial commit: PHT.co site + blog"

# Crie um repositório no GitHub e conecte:
git remote add origin https://github.com/seu-usuario/pht-site.git
git branch -M main
git push -u origin main
```

### Passo 2: Configurar Vercel

1. **Acesse** https://vercel.com e faça login
2. **Click em "Add New..."** → "Project"
3. **Importe seu repositório** do GitHub
4. **Configure o projeto:**
   - Framework Preset: **Next.js**
   - Root Directory: **blog**
   - Build Command: `npm run build` (já detecta automaticamente)
   - Output Directory: `.next` (padrão)

5. **Variáveis de Ambiente** (Environment Variables):
   ```
   NEXT_PUBLIC_MAIN_SITE_URL=https://seudominio.com
   NEXT_PUBLIC_BLOG_URL=https://blog.seudominio.com
   ```

6. **Click em "Deploy"**

### Passo 3: Configurar Domínio Personalizado

#### Para o Site Principal (HTML):
1. No Vercel, vá em **Settings** → **Domains**
2. Adicione: `seudominio.com`
3. Configure o DNS no seu provedor:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

#### Para o Blog (Next.js):
O blog já estará disponível em `https://seu-projeto.vercel.app`

Para usar subdomínio:
1. Adicione `blog.seudominio.com` nos domínios do Vercel
2. Configure CNAME no DNS:
   ```
   Type: CNAME
   Name: blog
   Value: seu-projeto.vercel.app
   ```

### 🔄 CI/CD Automático

Após configuração, **cada push no GitHub dispara automaticamente**:

1. **Build** - Vercel detecta mudanças e inicia build
2. **Preview** - Cria preview URL para PRs (pull requests)
3. **Deploy** - Se build passar, faz deploy automático
4. **Rollback** - Se falhar, mantém versão anterior

#### Workflow Diário:

```bash
# Faça suas alterações locais
# ...

# Commit e push
git add .
git commit -m "Descrição das mudanças"
git push

# ✅ Vercel detecta automaticamente e faz deploy!
```

#### Para Features/Testes:

```bash
# Crie uma branch
git checkout -b feature/nova-funcionalidade

# Faça alterações e commit
git add .
git commit -m "Adiciona nova funcionalidade"
git push -u origin feature/nova-funcionalidade

# Abra Pull Request no GitHub
# ✅ Vercel cria preview deployment automaticamente!

# Após revisar e aprovar:
# Merge para main → deploy automático em produção
```

## 🛠️ Desenvolvimento Local

### Site HTML
Abra `index.html` com Live Server ou servidor local de sua preferência.

### Blog Next.js

```bash
# Navegue para a pasta do blog
cd blog

# Instale dependências (primeira vez)
npm install

# Inicie servidor de desenvolvimento
npm run dev

# Acesse: http://localhost:3000
```

## 📝 Adicionando Posts no Blog

1. Crie arquivo `.mdx` em `blog/content/posts/`
2. Adicione frontmatter:

```mdx
---
title: "Título do Post"
excerpt: "Breve descrição"
date: "2024-01-15"
categoria: "marketing-juridico"
autor: "Seu Nome"
imagem: "/images/post.jpg"
---

Seu conteúdo em Markdown aqui...
```

3. Commit e push:
```bash
git add .
git commit -m "Novo post: Título do Post"
git push
```

✅ Deploy automático em ~1 minuto!

## 🔍 Monitoramento

- **Vercel Dashboard**: Ver logs, analytics, performance
- **Preview Deployments**: Testar antes de produção
- **Rollback**: Reverter para versão anterior com 1 click

## 📊 Custos

- **Hobby Plan (Gratuito)**:
  - 100GB bandwidth/mês
  - Builds ilimitados
  - Preview deployments
  - CI/CD completo
  - ✅ **Suficiente para maioria dos blogs**

- **Pro Plan ($20/mês)**:
  - 1TB bandwidth
  - Analytics avançado
  - Proteção por senha
  - Múltiplos domínios

## 🆘 Troubleshooting

### Build falhou
```bash
# Teste localmente primeiro:
cd blog
npm run build

# Se funcionar local, verifique variáveis de ambiente no Vercel
```

### Domínio não funciona
- Aguarde propagação DNS (até 48h, geralmente 1-2h)
- Verifique configuração de DNS no provedor
- Use https://dnschecker.org para verificar

### Mudanças não aparecem
- Limpe cache do navegador (Ctrl+Shift+R)
- Verifique se build terminou no Vercel Dashboard
- Rollback se necessário e investigue

## 📚 Recursos

- [Documentação Vercel](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [DEPLOY.md](blog/DEPLOY.md) - Guia detalhado completo

---

**Desenvolvido para PHT** - Planejamento, Humanização e Tecnologia
