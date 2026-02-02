# Guia de Deploy no GitHub Pages

## Configurações Realizadas

### 1. **Vite Config** (`vite.config.ts`)
- ✅ Adicionada configuração `base` para funcionar com sub-diretório
- ✅ Configuração automática: `base: '/{repoName}/'` em produção
- ✅ Adicionadas otimizações de build (minificação, sourcemap)

### 2. **Package.json**
- ✅ Script `deploy` para build e deploy manual

### 3. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- ✅ Deploy automático ao fazer push para main/master
- ✅ Cache de dependências para builds mais rápidos
- ✅ Variável de ambiente GEMINI_API_KEY configurada

## Próximas Etapas

### 1. Ajustar nome do repositório (se necessário)
No arquivo `vite.config.ts`, linha ~6, altere `repoName` para o nome correto do seu repositório GitHub:
```typescript
const repoName = 'seu-repo-name'; // Exemplo: margarida-bordadeira
```

### 2. Configurar secrets no GitHub
1. Vá para **Settings > Secrets and variables > Actions**
2. Crie um novo secret chamado `GEMINI_API_KEY`
3. Cole sua chave da API Google Gemini

### 3. Ativar GitHub Pages
1. Vá para **Settings > Pages**
2. Em "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** (criado automaticamente pelo workflow)
   - Folder: **/ (root)**
3. Clique em Save

### 4. Configurar domínio customizado (opcional)
Se você já possui `margaridabordadeira.com.br`:
1. Certifique-se que o CNAME está configurado no seu registrador
2. O arquivo CNAME será gerado automaticamente pelo workflow

## Testando Localmente

```bash
# Build para produção (simula GitHub Pages)
npm run build
npm run preview

# Ou build e deploy manual (requer gh-pages instalado)
npm install -g gh-pages
npm run deploy
```

## Ambiente de Desenvolvimento

O ambiente de desenvolvimento (`npm run dev`) continua usando `base: '/'` para funcionar normalmente.

## Troubleshooting

### Build falha com erro de API_KEY
- Certifique-se que a variável `GEMINI_API_KEY` está configurada nos secrets do GitHub
- O workflow não executa se a chave não estiver disponível

### Site não carrega assets (CSS, imagens)
- Verifique se o `base` no `vite.config.ts` está correto
- Certifique-se que os caminhos relativos estão usando imports do Vite (não caminhos hardcoded)

### Deploy não aparece no gh-pages
- Verifique a aba "Actions" no GitHub para erros
- Confirme que branch `gh-pages` foi criado
- Espere alguns minutos após o push (pode levar 1-2 min para deployar)
