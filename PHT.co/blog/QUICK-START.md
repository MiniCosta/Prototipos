# 🚀 Guia Rápido: Deploy em 5 Minutos

## Checklist de Deploy

### ✅ Pré-Deploy (Local)

```bash
# 1. Teste o blog localmente
cd blog
npm install
npm run build  # Certifique-se que não há erros!
npm run dev    # Teste em http://localhost:3000
```

### ✅ GitHub Setup

```bash
# 2. Navegue para raiz do projeto
cd "C:\Users\Paulo\Desktop\include-projetos\Protótipos\PHT.co"

# 3. Inicialize Git (se não fez ainda)
git init
git add .
git commit -m "Initial commit: PHT site + blog"

# 4. Crie repo no GitHub e conecte
# Vá em github.com/new, crie "pht-site" (ou nome que preferir)
git remote add origin https://github.com/SEU-USUARIO/pht-site.git
git branch -M main
git push -u origin main
```

### ✅ Vercel Deploy

**1. Acesse:** https://vercel.com (faça login com GitHub)

**2. Click em "Add New..." → "Project"**

**3. Import seu repositório "pht-site"**

**4. Configure:**
```
Framework Preset: Next.js
Root Directory: blog ⚠️ IMPORTANTE!
Build Command: npm run build (já preenchido)
Output Directory: .next (já preenchido)
Install Command: npm install (já preenchido)
```

**5. Environment Variables:**
```
NEXT_PUBLIC_MAIN_SITE_URL → https://seudominio.com
NEXT_PUBLIC_BLOG_URL → https://seu-projeto.vercel.app
```

**6. Click "Deploy"** ✅

### ✅ Pós-Deploy

1. **URL gerada:** `https://seu-projeto.vercel.app`
2. **Teste:** Acesse a URL, verifique se blog carregou
3. **Atualize HTML:** No `index.html`, atualize link do blog para URL da Vercel

```html
<!-- Em PHT.co/index.html -->
<a href="https://seu-projeto.vercel.app/blog">BLOG</a>
```

4. **Commit e push:** 
```bash
git add index.html
git commit -m "Update blog link to production URL"
git push
```

✅ **Pronto! Site no ar com CI/CD ativo!**

---

## 🔄 Workflow Diário

### Adicionar novo post:

```bash
# 1. Crie arquivo .mdx em blog/content/posts/
# 2. Escreva o conteúdo

# 3. Commit e push
git add .
git commit -m "Novo post: [título]"
git push

# ✅ Deploy automático em ~1min!
```

### Fazer mudança no código:

```bash
# 1. Faça alterações locais
# 2. Teste localmente (npm run dev)

# 3. Commit e push
git add .
git commit -m "Descrição da mudança"
git push

# ✅ Deploy automático!
```

### Testar feature antes de produção:

```bash
# 1. Crie branch
git checkout -b feature/nome

# 2. Faça alterações e push
git push -u origin feature/nome

# 3. Abra Pull Request no GitHub
# ✅ Vercel cria preview deployment!

# 4. Teste preview, se OK:
# Merge PR → deploy automático em produção
```

---

## 🎯 URLs Importantes

- **Dashboard Vercel:** https://vercel.com/dashboard
- **Repositório GitHub:** https://github.com/seu-usuario/pht-site
- **Blog Produção:** https://seu-projeto.vercel.app
- **Preview Deployments:** Vercel gera automaticamente em PRs

---

## 🆘 Problemas Comuns

### ❌ Build failed: "Cannot find module"
```bash
# Solução: Verifique package.json
cd blog
npm install
npm run build  # Teste local primeiro
```

### ❌ "Root Directory" errado
**Problema:** Vercel tentando buildar raiz do projeto  
**Solução:** Settings → General → Root Directory: `blog`

### ❌ Variáveis de ambiente não funcionam
**Problema:** Links quebrados entre site e blog  
**Solução:** Vercel Dashboard → Settings → Environment Variables  
Adicione: `NEXT_PUBLIC_MAIN_SITE_URL` e `NEXT_PUBLIC_BLOG_URL`  
Redeploy: Deployments → ⋯ → Redeploy

### ❌ Mudanças não aparecem
**Solução 1:** Ctrl+Shift+R (hard refresh)  
**Solução 2:** Vercel Dashboard → Deployments → Veja se build terminou  
**Solução 3:** Limpe cache: Settings → Clear Cache & Redeploy

---

## 💡 Dicas Pro

✨ **Use branches para testar:**
```bash
git checkout -b test/nova-feature
# Faça mudanças
git push -u origin test/nova-feature
# Preview deploy automático!
```

✨ **Rollback instantâneo:**
Vercel Dashboard → Deployments → Click em versão anterior → Promote to Production

✨ **Monitor performance:**
Dashboard → Analytics → Veja Core Web Vitals, tempo de carregamento

✨ **Proteção:** 
Pro Plan permite senha em preview deployments

---

Para guia completo com todos os detalhes, veja [DEPLOY.md](DEPLOY.md)
