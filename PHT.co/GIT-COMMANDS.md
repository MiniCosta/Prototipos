# 🎯 Comandos Git/Deploy - Referência Rápida

## 📦 Setup Inicial (Uma vez apenas)

```bash
# Navegue para o projeto
cd "C:\Users\Paulo\Desktop\include-projetos\Protótipos\PHT.co"

# Inicialize Git
git init

# Configure identidade (se primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Primeiro commit
git add .
git commit -m "Initial commit: PHT site + blog"

# Conecte com GitHub (substitua SEU-USUARIO e REPO)
git remote add origin https://github.com/SEU-USUARIO/pht-site.git
git branch -M main
git push -u origin main
```

## 🔄 Workflow Diário

### Fazer mudanças e deployar

```bash
# 1. Faça suas alterações nos arquivos...

# 2. Veja o que mudou
git status

# 3. Adicione mudanças
git add .
# Ou arquivo específico:
git add blog/content/posts/novo-post.mdx

# 4. Commit com mensagem descritiva
git commit -m "Adiciona post sobre marketing jurídico"

# 5. Envie para GitHub (deploy automático!)
git push

# ✅ Vercel detecta e faz deploy em ~1min
```

### Adicionar novo post

```bash
# 1. Crie arquivo .mdx
# blog/content/posts/meu-novo-post.mdx

# 2. Deploy
git add blog/content/posts/meu-novo-post.mdx
git commit -m "Novo post: Título do post"
git push

# ✅ Post no ar em 1 minuto!
```

## 🌿 Trabalhando com Branches

### Testar feature antes de produção

```bash
# 1. Crie branch para feature
git checkout -b feature/nova-funcionalidade

# 2. Faça mudanças e commit
git add .
git commit -m "Implementa nova funcionalidade"

# 3. Push da branch
git push -u origin feature/nova-funcionalidade

# ✅ Vercel cria preview deployment automaticamente!
# Acesse link no Vercel Dashboard → Deployments

# 4. Se aprovado, merge para main
git checkout main
git merge feature/nova-funcionalidade
git push

# ✅ Deploy automático em produção!
```

### Ver branches

```bash
git branch              # Branches locais
git branch -r           # Branches remotas
git branch -a           # Todas
```

### Trocar de branch

```bash
git checkout main              # Volta para main
git checkout feature/teste     # Vai para branch feature/teste
git checkout -b nova-branch    # Cria e muda para nova branch
```

### Deletar branch

```bash
git branch -d feature/antiga       # Deleta local
git push origin --delete feature/antiga  # Deleta remota
```

## 📊 Comandos de Consulta

### Ver status

```bash
git status              # Arquivos modificados
git log                 # Histórico de commits
git log --oneline       # Histórico resumido
git diff                # Ver mudanças não commitadas
```

### Ver histórico de arquivo

```bash
git log -- blog/content/posts/post.mdx
git blame blog/app/blog/page.tsx
```

## ⚠️ Correções Comuns

### Desfazer mudanças não commitadas

```bash
# Desfazer mudanças em arquivo específico
git checkout -- arquivo.txt

# Desfazer todas as mudanças não commitadas
git reset --hard HEAD
```

### Voltar commit (cuidado!)

```bash
# Desfaz último commit mas mantém mudanças
git reset HEAD~1

# Desfaz último commit E descarta mudanças
git reset --hard HEAD~1

# Reverter commit específico (mais seguro)
git revert abc123
```

### Forçar push (use com cautela!)

```bash
# Se precisar sobrescrever histórico remoto
git push --force
# ou mais seguro:
git push --force-with-lease
```

## 🔄 Sincronização

### Atualizar repositório local

```bash
git pull                # Puxa mudanças do remoto
git fetch               # Baixa info sem fazer merge
git pull origin main    # Puxa branch main específica
```

### Ver remotes

```bash
git remote -v           # Ver URLs dos remotes
git remote show origin  # Info detalhada do remote
```

## 🏷️ Tags (Releases)

### Criar tag

```bash
git tag v1.0.0
git push origin v1.0.0

# Tag com mensagem
git tag -a v1.0.0 -m "Primeira versão"
git push origin v1.0.0
```

### Listar tags

```bash
git tag
git tag -l "v1.*"
```

## 🆘 Emergências

### Commitei coisa errada!

```bash
# Se NÃO deu push ainda:
git reset HEAD~1        # Desfaz commit, mantém mudanças
# Corrija e commit novamente

# Se JÁ deu push:
git revert HEAD         # Cria novo commit revertendo
git push
```

### Commitei no branch errado!

```bash
# Salve commit
git log                 # Copie hash do commit (ex: abc123)

# Volte e limpe
git reset HEAD~1 --hard

# Vá para branch correto
git checkout branch-correto
git cherry-pick abc123
git push
```

### Conflito no merge!

```bash
# Veja arquivos em conflito
git status

# Abra arquivos, resolva conflitos (<<<< ==== >>>>)

# Marque como resolvido
git add arquivo-resolvido.js

# Complete o merge
git commit
git push
```

## 🎯 Workflow Completo - Exemplo Prático

```bash
# 🌅 Manhã: Começar novo post
git checkout main
git pull
git checkout -b post/captacao-clientes
# Escreva o post...
git add blog/content/posts/captacao-clientes.mdx
git commit -m "Draft: post sobre captação de clientes"
git push -u origin post/captacao-clientes
# ✅ Preview deploy criado automaticamente

# 🌆 Tarde: Revisar e publicar
# Faça ajustes...
git add blog/content/posts/captacao-clientes.mdx
git commit -m "Finaliza post sobre captação de clientes"
git push
# Revisar preview no Vercel

# ✅ Aprovar: Merge para produção
git checkout main
git merge post/captacao-clientes
git push
# ✅ Deploy automático em produção!

# 🧹 Limpeza
git branch -d post/captacao-clientes
git push origin --delete post/captacao-clientes
```

## 📱 Vercel CLI (Opcional)

### Instalar

```bash
npm i -g vercel
vercel login
```

### Comandos úteis

```bash
vercel                  # Deploy do diretório atual
vercel --prod           # Deploy direto para produção
vercel logs             # Ver logs
vercel env ls           # Listar env variables
vercel domains          # Gerenciar domínios
```

## 🔗 Links Úteis

- **Git Cheat Sheet**: https://education.github.com/git-cheat-sheet-education.pdf
- **Vercel CLI Docs**: https://vercel.com/docs/cli
- **GitHub Docs**: https://docs.github.com

---

💡 **Dica**: Salve este arquivo e consulte sempre que precisar!
