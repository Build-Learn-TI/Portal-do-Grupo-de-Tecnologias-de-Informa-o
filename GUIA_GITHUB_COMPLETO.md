# Guia Completo: Como Usar os Arquivos do GitHub

## 🎯 Cenário: Você Quer Usar os Arquivos do GitHub

---

## 📋 Passo 1: Clonar o Repositório

Abra o terminal (PowerShell, CMD, Git Bash, Terminal, etc.) e execute:

```bash
git clone https://github.com/Build-Learn-TI/Portal-do-Grupo-de-Tecnologias-de-Informa-o.git
```

**O que acontece:**
- O repositório completo é baixado para o seu computador
- Uma pasta chamada `Portal-do-Grupo-de-Tecnologias-de-Informa-o` é criada

---

## 📂 Passo 2: Entrar na Pasta

```bash
cd Portal-do-Grupo-de-Tecnologias-de-Informa-o
```

---

## 🌿 Passo 3: Mudar para a Branch com as Alterações

```bash
git checkout feature/frontend-fixes-links-js
```

**O que isto faz:**
- Muda para a branch onde estão as minhas alterações
- Você agora tem acesso a:
  - `script.js` (NOVO - com todas as funcionalidades)
  - `Inicio.html` (CORRIGIDO)
  - `Materiais.html` (CORRIGIDO)
  - `Contacto.html` (CORRIGIDO)
  - `sobre.html` (CORRIGIDO)

---

## 💻 Passo 4: Abrir no VS Code

### Opção A: Linha de Comando
```bash
code .
```

### Opção B: Manualmente
1. Abra VS Code
2. File → Open Folder
3. Selecione a pasta `Portal-do-Grupo-de-Tecnologias-de-Informa-o`

---

## 🌐 Passo 5: Testar no Navegador

### Opção A: Usar Python (Recomendado)
```bash
python3 -m http.server 8000
```

Depois abra: **http://localhost:8000**

### Opção B: Usar Node.js
```bash
npx http-server
```

Depois abra: **http://localhost:8080**

### Opção C: Usar Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique direito em `Inicio.html`
3. Selecione "Open with Live Server"

---

## ✅ Passo 6: Testar as Funcionalidades

### Filtro de Materiais
- Vá para `Materiais.html`
- Clique nos botões de filtro
- Observe que os cartões são filtrados

### Validação de Formulário
- Vá para `Contacto.html`
- Tente enviar o formulário vazio
- Tente com email inválido
- Preencha corretamente e envie

### Menu Mobile
- Redimensione a janela para < 900px
- Clique no hambúrguer (☰)
- Teste fechar ao clicar fora
- Teste fechar ao navegar

### Links
- Clique em todos os links
- Todos devem abrir em nova aba

---

## 🔄 Passo 7: Se Quisesse Contribuir (Fazer Pull Request)

### 7.1 Fazer Alterações
- Edite os arquivos conforme necessário
- Salve as alterações

### 7.2 Verificar o Status
```bash
git status
```

### 7.3 Adicionar as Alterações
```bash
git add .
```

### 7.4 Fazer Commit
```bash
git commit -m "feat: descrição da alteração"
```

### 7.5 Fazer Push
```bash
git push origin feature/frontend-fixes-links-js
```

### 7.6 Abrir Pull Request no GitHub
1. Vá para https://github.com/Build-Learn-TI/Portal-do-Grupo-de-Tecnologias-de-Informa-o
2. Clique em "Pull requests"
3. Clique em "New pull request"
4. Selecione `feature/frontend-fixes-links-js` → `dev`
5. Adicione título e descrição
6. Clique em "Create pull request"

---

## 📊 Resumo Visual do Fluxo

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub (Repositório)                    │
│  https://github.com/Build-Learn-TI/Portal-do-Grupo-de-TI   │
└─────────────────────────────────────────────────────────────┘
                              ↓
                    git clone (Passo 1)
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              Seu Computador (Pasta Local)                   │
│     Portal-do-Grupo-de-Tecnologias-de-Informa-o/           │
└─────────────────────────────────────────────────────────────┘
                              ↓
                  git checkout (Passo 3)
                              ↓
┌─────────────────────────────────────────────────────────────┐
│         Branch: feature/frontend-fixes-links-js             │
│  ✅ script.js (NOVO)                                        │
│  ✅ Inicio.html (CORRIGIDO)                                 │
│  ✅ Materiais.html (CORRIGIDO)                              │
│  ✅ Contacto.html (CORRIGIDO)                               │
│  ✅ sobre.html (CORRIGIDO)                                  │
└─────────────────────────────────────────────────────────────┘
                              ↓
                    code . (Passo 4)
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      VS Code                                │
│              (Editor de Código)                             │
└─────────────────────────────────────────────────────────────┘
                              ↓
            python3 -m http.server 8000 (Passo 5)
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  http://localhost:8000                      │
│              (Navegador - Testes)                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎓 Comandos Rápidos (Cheat Sheet)

| Comando | O Que Faz |
|---------|-----------|
| `git clone URL` | Baixa o repositório |
| `cd pasta` | Entra na pasta |
| `git checkout branch` | Muda para a branch |
| `code .` | Abre VS Code |
| `python3 -m http.server 8000` | Inicia servidor local |
| `git status` | Vê alterações |
| `git add .` | Adiciona alterações |
| `git commit -m "msg"` | Faz commit |
| `git push origin branch` | Envia para GitHub |

---

## ⚠️ Notas Importantes

### 1. A Branch Ainda Não Está no GitHub
No momento, a branch `feature/frontend-fixes-links-js` **ainda não foi enviada para o GitHub**. Está apenas no servidor Manus.

Para que funcione, você precisaria:
- Ter acesso ao repositório
- Fazer push da branch
- Abrir um Pull Request

### 2. Você Precisa de Git Instalado
Se não tiver Git, baixe em: https://git-scm.com/

### 3. Você Precisa de Python ou Node.js
Para testar localmente, instale um destes:
- Python: https://www.python.org/
- Node.js: https://nodejs.org/

---

## 🆘 Troubleshooting

### Erro: "git command not found"
- Git não está instalado
- Solução: Instale Git de https://git-scm.com/

### Erro: "python3 command not found"
- Python não está instalado
- Solução: Instale Python de https://www.python.org/

### Erro: "Branch not found"
- A branch ainda não foi enviada para GitHub
- Solução: Use a branch `dev` em vez disso

### Erro: "Port 8000 already in use"
- Outra aplicação está usando a porta 8000
- Solução: Use outra porta: `python3 -m http.server 8001`

---

## 📞 Próximos Passos

1. **Clonar o repositório** (Passo 1)
2. **Mudar para a branch** (Passo 3)
3. **Abrir no VS Code** (Passo 4)
4. **Testar no navegador** (Passo 5)
5. **Testar as funcionalidades** (Passo 6)

---

**Data:** 20 de Julho de 2026  
**Responsável:** Soares Nhangave (Front-end)  
**Status:** Pronto para Usar
