# Como Acessar os Arquivos Modificados

## 📁 Localização dos Arquivos

Todos os arquivos estão em: `/home/ubuntu/portal-ti/`

## 🔍 Arquivos Modificados

### 1. **script.js** (Novo - 14 KB)
- Filtro de materiais funcional
- Validação de formulário
- Menu mobile melhorado
- Tema light/dark
- Indicador de página ativa
- Scroll suave

**Localização:** `/home/ubuntu/portal-ti/script.js`

### 2. **Inicio.html** (Corrigido)
- Link do GitHub corrigido
- Agora aponta para: `https://github.com/Build-Learn-TI/Portal-do-Grupo-de-Tecnologias-de-Informa-o`

**Localização:** `/home/ubuntu/portal-ti/Inicio.html`

### 3. **Materiais.html** (Corrigido)
- 9 links de recursos corrigidos
- Links para W3Schools, React.dev, GitHub Skills, etc.

**Localização:** `/home/ubuntu/portal-ti/Materiais.html`

### 4. **Contacto.html** (Corrigido)
- Links do Google Drive e OneDrive corrigidos
- Formulário sem endpoint inválido

**Localização:** `/home/ubuntu/portal-ti/Contacto.html`

### 5. **sobre.html** (Corrigido)
- Texto truncado completado
- Tag HTML duplicada removida

**Localização:** `/home/ubuntu/portal-ti/sobre.html`

## 🚀 Como Testar Localmente

### Opção 1: Usar Live Server (Recomendado)
```bash
# 1. Abra VS Code
code /home/ubuntu/portal-ti

# 2. Instale a extensão "Live Server" (se não tiver)
# 3. Clique direito em Inicio.html
# 4. Selecione "Open with Live Server"
```

### Opção 2: Usar Python
```bash
cd /home/ubuntu/portal-ti
python3 -m http.server 8000
# Abra http://localhost:8000 no navegador
```

### Opção 3: Usar Node.js
```bash
cd /home/ubuntu/portal-ti
npx http-server
# Abra http://localhost:8080 no navegador
```

## 📋 Funcionalidades para Testar

### 1. Filtro de Materiais
- Vá para `Materiais.html`
- Clique nos botões de filtro (Todos, Programação, Design, etc.)
- Observe que os cartões são filtrados

### 2. Validação de Formulário
- Vá para `Contacto.html`
- Tente enviar o formulário vazio
- Tente com email inválido
- Preencha corretamente e envie

### 3. Menu Mobile
- Redimensione a janela para < 900px
- Clique no hambúrguer (☰)
- Teste fechar ao clicar fora
- Teste fechar ao navegar
- Teste pressionar ESC

### 4. Links
- Clique em todos os links para verificar se funcionam
- Todos devem abrir em nova aba

## 📊 Resumo das Mudanças

```
Contacto.html  |   6 +++---
Inicio.html    |   2 +-
Materiais.html |  18 +++++++++---------
script.js      | 313 +++++++++++++++++++++++++++++++++++++++++++++++
sobre.html     |   3 +--
─────────────────────────────────────────────────────────────
5 files changed, 322 insertions(+), 20 deletions(-)
```

## 🔗 Documentação Adicional

- **AUDITORIA_FRONTEND.md** - Diagnóstico completo
- **GUIA_TESTES_FRONTEND.md** - Guia de testes detalhado
- **RELATORIO_IMPLEMENTACAO.md** - Documentação técnica

## ⚠️ Nota Importante

Os arquivos estão na branch `feature/frontend-fixes-links-js` e prontos para serem enviados para o GitHub como Pull Request para a branch `dev`.

## 💡 Próximos Passos

1. Testar todas as funcionalidades localmente
2. Fazer push da branch para GitHub
3. Abrir Pull Request para `dev`
4. Aguardar revisão da equipa

---

**Status:** ✅ Pronto para Uso  
**Data:** 20 de Julho de 2026  
**Responsável:** Soares Nhangave (Front-end)
