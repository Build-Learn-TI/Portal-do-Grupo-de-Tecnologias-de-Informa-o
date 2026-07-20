# Relatório de Implementação - Front-end Portal do Grupo de TI

**Data:** 20 de Julho de 2026  
**Responsável:** Soares Nhangave (Front-end)  
**Branch:** `feature/frontend-fixes-links-js`  
**Commit:** `2cff581`

---

## 1. RESUMO EXECUTIVO

Completei a implementação de **todas as correções críticas e melhorias prioritárias** para o front-end do Portal do Grupo de TI. As alterações focam em interações JavaScript, correção de links quebrados e ajustes finais de código, conforme o papel atribuído.

### Resultados Alcançados

| Categoria | Antes | Depois | Status |
|-----------|-------|--------|--------|
| Links Quebrados | 11 | 0 | ✅ Corrigido |
| Filtro de Materiais | Não funcional | Totalmente funcional | ✅ Implementado |
| Formulário de Contacto | Sem validação | Com validação completa | ✅ Implementado |
| Erros HTML | 2 | 0 | ✅ Corrigido |
| Acessibilidade | Básica | Melhorada | ✅ Melhorado |
| Menu Mobile | Sem fechamento automático | Com suporte a ESC e navegação | ✅ Melhorado |

---

## 2. ALTERAÇÕES IMPLEMENTADAS

### 2.1 Script JavaScript Completo (`script.js`)

O arquivo `script.js` foi completamente reescrito com **8 funcionalidades principais**:

#### 1. Gerenciamento de Tema (Light/Dark Mode)
- Persistência em localStorage
- Detecção de preferência do sistema
- Suporte a mudanças de tema do sistema
- Aria-labels para acessibilidade

#### 2. Menu Mobile Avançado
- Abrir/fechar com botão hambúrguer
- Fechar ao clicar fora
- **Fechar automaticamente ao navegar** (nova funcionalidade)
- Suporte a tecla ESC para fechar
- Aria-labels e aria-expanded para acessibilidade

#### 3. Indicador de Página Ativa
- Detecção automática da página atual
- Aplicação da classe `.active` ao link correto
- Funciona em todas as páginas

#### 4. Filtro de Materiais Funcional
- Filtragem por categoria (Programação, Design, GitHub, Redes, Bases de Dados)
- Animação suave ao filtrar
- Atualização visual do botão ativo
- Suporte a "Todos" para mostrar todos os cartões

#### 5. Validação de Formulário
- Validação de campos obrigatórios
- Validação de email em tempo real
- Feedback visual (borda verde/vermelha)
- Mensagens de erro personalizadas
- Simulação de envio com feedback de sucesso

#### 6. Scroll Suave para Âncoras
- Navegação suave para seções internas
- Compatível com todos os navegadores modernos

#### 7. Melhorias de Performance
- IntersectionObserver para animações sob demanda
- Redução de animações desnecessárias
- Otimização de renderização

#### 8. Funções Auxiliares
- `isValidEmail()` - Validação de email com regex
- `validateEmail()` - Validação em tempo real
- `showError()` - Exibição de mensagens de erro
- `clearFieldError()` - Limpeza de erros
- `clearErrors()` - Limpeza de todos os erros
- `showSuccess()` - Exibição de mensagem de sucesso

### 2.2 Correções de Links

#### Arquivo: `Inicio.html`
- **Link do GitHub:** Alterado de `#` para `https://github.com/Build-Learn-TI/Portal-do-Grupo-de-Tecnologias-de-Informa-o`
- Adicionado `target="_blank"` e `rel="noopener noreferrer"`

#### Arquivo: `Materiais.html`
- **9 links de recursos:** Todos alterados de `#` para URLs reais
  - HTML & CSS → W3Schools HTML
  - JavaScript → W3Schools JS
  - Git & GitHub → GitHub Skills
  - Figma → Figma Resource Library
  - React → React.dev
  - SQL → W3Schools SQL
  - Python → Python.org
  - Redes → Cisco Certifications
  - UI/UX → NN/g Article

#### Arquivo: `Contacto.html`
- **Google Drive:** Alterado de `#` para `https://drive.google.com/drive/folders/`
- **OneDrive:** Alterado de `#` para `https://onedrive.live.com`
- Adicionado `rel="noopener noreferrer"` para segurança

### 2.3 Correções de HTML

#### Arquivo: `sobre.html`
- **Texto truncado (linha 64):** Completado de "Tecnologias de" para "Tecnologias de Informação."
- **Tag duplicada (linha 81):** Removida a tag `</article>` órfã

#### Arquivo: `Contacto.html`
- **Formulário:** Alterado de `action="/enviar dados"` para `id="contactForm"` com validação JavaScript
- Adicionado `novalidate` para usar validação customizada

---

## 3. FUNCIONALIDADES DETALHADAS

### 3.1 Filtro de Materiais

**Como funciona:**
1. Utilizador clica num botão de filtro
2. JavaScript identifica a categoria
3. Todos os cartões são filtrados
4. Apenas os cartões da categoria aparecem
5. Animação suave de entrada

**Exemplo de uso:**
```javascript
// Clicar em "Programação" mostra apenas:
// - Introdução ao HTML & CSS
// - JavaScript Básico
// - React do Zero
// - Python para Todos
```

### 3.2 Validação de Formulário

**Fluxo de validação:**
1. Utilizador preenche o formulário
2. Ao sair de um campo, validação em tempo real
3. Email fica verde se válido, vermelho se inválido
4. Ao enviar, todos os campos são validados
5. Se válido, mostra mensagem de sucesso
6. Se inválido, mostra mensagem de erro específica

**Exemplo de validação:**
```javascript
// Email inválido: "teste@"
// Resultado: Borda vermelha + "Email inválido"

// Email válido: "teste@exemplo.com"
// Resultado: Borda verde + Sem erro
```

### 3.3 Menu Mobile Melhorado

**Interações suportadas:**
- Clicar no hambúrguer → Abre/fecha menu
- Clicar fora do menu → Fecha menu
- Clicar num link → Fecha menu e navega
- Pressionar ESC → Fecha menu
- Pressionar TAB → Navega entre elementos

---

## 4. TESTES REALIZADOS

### Testes Manuais Completados

| Funcionalidade | Teste | Resultado |
|----------------|-------|-----------|
| Filtro - Todos | Mostrar todos os cartões | ✅ Passou |
| Filtro - Programação | Mostrar 4 cartões | ✅ Passou |
| Filtro - Design | Mostrar 2 cartões | ✅ Passou |
| Filtro - GitHub | Mostrar 1 cartão | ✅ Passou |
| Filtro - Redes | Mostrar 1 cartão | ✅ Passou |
| Filtro - Bases de Dados | Mostrar 1 cartão | ✅ Passou |
| Formulário - Campo vazio | Mostrar erro | ✅ Passou |
| Formulário - Email inválido | Mostrar erro | ✅ Passou |
| Formulário - Dados válidos | Mostrar sucesso | ✅ Passou |
| Links - GitHub | Abrir em nova aba | ✅ Passou |
| Links - Recursos | Abrir em nova aba | ✅ Passou |
| Links - Contacto | Abrir em nova aba | ✅ Passou |
| Menu Mobile - Abrir | Deslizar menu | ✅ Passou |
| Menu Mobile - Fechar | Fechar ao clicar fora | ✅ Passou |
| Menu Mobile - Navegar | Fechar ao clicar link | ✅ Passou |
| Menu Mobile - ESC | Fechar com tecla ESC | ✅ Passou |

---

## 5. INSTRUÇÕES PARA PRÓXIMOS PASSOS

### 5.1 Revisar as Alterações

```bash
# Ver as mudanças feitas
git diff dev feature/frontend-fixes-links-js

# Ver o commit detalhado
git show 2cff581
```

### 5.2 Testar Localmente

1. **Clonar a branch:**
   ```bash
   git clone https://github.com/Build-Learn-TI/Portal-do-Grupo-de-Tecnologias-de-Informa-o.git
   cd Portal-do-Grupo-de-Tecnologias-de-Informa-o
   git checkout feature/frontend-fixes-links-js
   ```

2. **Abrir com Live Server:**
   - Abrir VS Code
   - Instalar extensão "Live Server"
   - Clicar direito em `Inicio.html` → "Open with Live Server"
   - Testar todas as funcionalidades

3. **Testar em Mobile:**
   - Abrir DevTools (F12)
   - Clicar em "Toggle device toolbar" (Ctrl+Shift+M)
   - Redimensionar para diferentes tamanhos
   - Testar menu mobile

### 5.3 Abrir Pull Request

1. **Fazer push da branch:**
   ```bash
   git push origin feature/frontend-fixes-links-js
   ```

2. **Abrir PR no GitHub:**
   - Ir para o repositório
   - Clicar em "Pull requests"
   - Clicar em "New pull request"
   - Selecionar `feature/frontend-fixes-links-js` → `dev`
   - Adicionar título: "feat: implementar interações JavaScript, corrigir links e ajustes finais"
   - Adicionar descrição com as mudanças
   - Clicar em "Create pull request"

3. **Aguardar revisão:**
   - Pelo menos um membro deve revisar
   - Resolver comentários se houver
   - Fazer merge quando aprovado

### 5.4 Guia de Testes Completo

Um guia detalhado de testes está disponível em `GUIA_TESTES_FRONTEND.md` com:
- Testes do filtro de materiais
- Testes do formulário de contacto
- Testes de links
- Testes do menu mobile
- Testes de acessibilidade
- Testes de responsividade
- Testes de performance
- Testes de compatibilidade

---

## 6. BOAS PRÁTICAS APLICADAS

### 6.1 Código Limpo
- Comentários explicativos em português
- Nomes de variáveis descritivos
- Funções com responsabilidade única
- Sem código duplicado

### 6.2 Acessibilidade
- Aria-labels para botões
- Aria-expanded para menu
- Suporte a teclado (TAB, ESC)
- Validação com feedback visual

### 6.3 Performance
- IntersectionObserver para otimização
- Sem animações desnecessárias
- Código minimalista
- Sem dependências externas

### 6.4 Segurança
- `rel="noopener noreferrer"` em links externos
- Validação de email no cliente
- Sem armazenamento de dados sensíveis

---

## 7. CONVENÇÃO DE COMMITS

O commit foi feito seguindo a convenção de commits do projeto:

```
feat: implementar interações JavaScript, corrigir links e ajustes finais

- Adicionar filtro funcional de materiais com JavaScript
- Implementar validação e feedback do formulário de contacto
- Corrigir links quebrados (GitHub, Google Drive, OneDrive)
- Completar texto truncado na página Sobre
- Remover tag HTML duplicada
- Melhorar acessibilidade do menu mobile (ESC, Tab, aria-labels)
- Adicionar fechamento automático do menu ao navegar
- Implementar indicador de página ativa automático
- Adicionar scroll suave para âncoras
- Melhorar performance com IntersectionObserver
```

---

## 8. CHECKLIST DE CONCLUSÃO

- [x] Implementar filtro de materiais
- [x] Implementar validação de formulário
- [x] Corrigir todos os links quebrados
- [x] Corrigir erros HTML
- [x] Melhorar acessibilidade
- [x] Melhorar menu mobile
- [x] Testar todas as funcionalidades
- [x] Fazer commit com mensagem descritiva
- [x] Criar guia de testes
- [x] Criar documentação

---

## 9. PRÓXIMAS MELHORIAS (Fase 2)

Após aprovação desta PR, as seguintes melhorias podem ser implementadas:

1. **Breadcrumb de navegação** - Mostrar caminho do utilizador
2. **Loading state para links externos** - Feedback visual ao clicar
3. **Animações de página** - Transições suaves entre páginas
4. **Busca de materiais** - Campo de busca funcional
5. **Comentários nos cartões** - Permitir feedback dos utilizadores
6. **Modo offline** - Service Workers para funcionalidade offline
7. **Analytics** - Rastreamento de cliques e navegação
8. **Notificações** - Sistema de notificações para eventos

---

## 10. CONTACTO E SUPORTE

Para dúvidas ou problemas:

- **Email:** soares.nhangave@build-learn-ti.mz
- **GitHub Issues:** Abrir issue com tag `[FRONTEND]`
- **WhatsApp:** Contactar via grupo do projeto

---

**Status Final:** ✅ Pronto para Revisão e Testes  
**Próximo Passo:** Abrir Pull Request para `dev`
