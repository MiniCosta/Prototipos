# 🚀 Guia de Deploy - PHT Blog no Vercel

## Pré-requisitos

1. ✅ Conta no GitHub (gratuita)
2. ✅ Conta no Vercel (gratuita)
3. ✅ Git instalado localmente

## Passo 1: Preparar o Repositório GitHub

### 1.1 Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `pht-blog`
3. Deixe **público** (ou privado, se preferir)
4. **NÃO** inicialize com README (já temos os arquivos)
5. Clique em "Create repository"

### 1.2 Conectar Projeto Local ao GitHub

```bash
# Navegue até a pasta do blog
cd "C:\Users\Paulo\Desktop\include-projetos\Protótipos\PHT.co\blog"

# Inicialize o Git (se ainda não estiver)
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Initial commit: PHT Blog"

# Adicione o remote (substitua SEU_USUARIO pelo seu usuário GitHub)
git remote add origin https://github.com/SEU_USUARIO/pht-blog.git

# Envie para o GitHub
git branch -M main
git push -u origin main
```

## Passo 2: Deploy no Vercel

### 2.1 Conectar Vercel ao GitHub

1. Acesse https://vercel.com
2. Faça login com GitHub (recomendado)
3. Clique em "Add New..." → "Project"
4. Autorize Vercel a acessar seus repositórios
5. Selecione o repositório `pht-blog`

### 2.2 Configurar Projeto no Vercel

**Framework Preset:** Next.js (detectado automaticamente)

**Root Directory:** `./` (deixe vazio ou ".")

**Build Command:** `npm run build` (padrão)

**Output Directory:** `.next` (padrão)

**Install Command:** `npm install` (padrão)

### 2.3 Configurar Variáveis de Ambiente

No painel do Vercel, antes de fazer deploy:

1. Vá em **Environment Variables**
2. Adicione as seguintes variáveis:

```env
NEXT_PUBLIC_MAIN_SITE_URL = https://pht.com.br (ou seu domínio)
NEXT_PUBLIC_BLOG_URL = https://seu-projeto.vercel.app
```

> **Nota:** Após o primeiro deploy, atualize `NEXT_PUBLIC_BLOG_URL` com a URL real do Vercel.

### 2.4 Deploy!

1. Clique em **Deploy**
2. Aguarde ~2 minutos
3. ✅ Seu blog estará online!

URL gerada: `https://pht-blog.vercel.app` (ou similar)

## Passo 3: Configurar Domínio Customizado (Opcional)

### 3.1 Opção 1: Subdomínio (blog.pht.com.br)

1. No painel Vercel, vá em **Settings** → **Domains**
2. Adicione: `blog.seudominio.com`
3. Vercel fornecerá registros DNS:
   - **Tipo:** CNAME
   - **Nome:** blog
   - **Valor:** cname.vercel-dns.com

4. Configure no seu provedor de DNS (GoDaddy, Registro.br, etc.)
5. Aguarde propagação (5min - 48h)

### 3.2 Opção 2: Subpasta (pht.com.br/blog)

**Não recomendado** para Next.js, mas possível com reverse proxy.

Melhor usar subdomínio ou domínio separado.

## Passo 4: CI/CD Automático

🎉 **Já está configurado!** O Vercel automaticamente:

✅ Detecta novos commits no GitHub  
✅ Executa build automaticamente  
✅ Faz deploy se o build passar  
✅ Gera preview para cada Pull Request  
✅ Rollback fácil se necessário  

### Workflow CI/CD

```
1. Você faz mudança no código local
   ↓
2. git add . && git commit -m "mensagem"
   ↓
3. git push
   ↓
4. Vercel detecta o push automaticamente
   ↓
5. Executa npm install && npm run build
   ↓
6. Se sucesso: Deploy automático em ~2min
   Se erro: Notificação + build anterior mantido
```

## Passo 5: Conectar Blog com Site HTML

### 5.1 Atualizar Link no Site HTML

No arquivo `PHT.co/index.html`:

```html
<!-- Desenvolvimento -->
<a href="http://localhost:3000/blog">BLOG</a>

<!-- Produção (após deploy) -->
<a href="https://blog.seudominio.com">BLOG</a>
```

### 5.2 Atualizar Links do Blog para o Site

Os links "← Voltar ao site" já usam `NEXT_PUBLIC_MAIN_SITE_URL` da variável de ambiente.

## Comandos Git Úteis

### Fazer Deploy de Mudanças

```bash
# Adicione arquivos modificados
git add .

# Commit com mensagem descritiva
git commit -m "feat: adiciona novo post sobre SEO"

# Envie para GitHub (dispara deploy automático)
git push
```

### Branches para Features

```bash
# Crie branch para nova feature
git checkout -b feat/novo-post

# Faça mudanças, commit
git add .
git commit -m "adiciona post sobre Instagram"

# Envie branch
git push origin feat/novo-post

# No GitHub, crie Pull Request
# Vercel gerará preview automático!

# Após aprovação, merge para main
# Deploy automático em produção
```

## Monitoramento e Logs

### Ver Logs de Deploy

1. Painel Vercel → Seu Projeto
2. Clique em qualquer deploy
3. Veja logs em tempo real
4. Identifique erros facilmente

### Analytics (Vercel Analytics)

1. Ative Vercel Analytics (gratuito)
2. Veja:
   - Visitantes únicos
   - Page views
   - Performance (Core Web Vitals)
   - Dispositivos e países

## Troubleshooting

### Erro: "Module not found"

```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "fix: atualiza dependências"
git push
```

### Erro: "Build failed"

1. Teste localmente primeiro:
```bash
npm run build
```

2. Se funcionar localmente, verifique:
   - Variáveis de ambiente no Vercel
   - Versão do Node.js (Vercel usa Node 18+)

### Preview não carrega imagens

- Imagens devem estar em `/public`
- Use caminhos relativos: `/images/foto.jpg`
- Não use caminhos absolutos do Windows

## Custos

### Vercel (Hobby/Free Plan)

✅ **100% Gratuito para:**
- Projetos pessoais/comerciais
- Bandwidth ilimitado
- 100GB de uso mensal
- Deploy ilimitados
- Preview automático
- SSL gratuito
- Analytics básico

💰 **Pro Plan ($20/mês) se precisar:**
- Mais de 1 projeto comercial
- Equipes colaborativas
- Analytics avançado
- Suporte prioritário

**Para o PHT Blog: Plan gratuito é suficiente!**

## Próximos Passos Recomendados

1. ✅ **Deploy no Vercel** (este guia)
2. 📧 **Configurar Analytics** (Google Analytics 4)
3. 🔍 **Google Search Console** (indexar blog)
4. 📱 **Testar em mobile** (Vercel fornece URL)
5. 🚀 **Publicar primeiro post**
6. 📈 **Monitorar performance**

## Links Úteis

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Docs Vercel + Next.js:** https://vercel.com/docs/frameworks/nextjs
- **Status Vercel:** https://vercel-status.com

---

**Dúvidas?** Consulte a documentação oficial ou a equipe PHT.

✨ **Seu blog estará online em ~10 minutos seguindo este guia!**
