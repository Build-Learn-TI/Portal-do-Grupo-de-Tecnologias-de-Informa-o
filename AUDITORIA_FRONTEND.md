# Auditoria de Front-end - Portal do Grupo de TI

## Resumo Executivo

Realizei uma auditoria completa do repositório `dev` do Portal do Grupo de TI, focando nas **interações JavaScript, links e ajustes finais de código** conforme seu papel de Front-end. Identifiquei **9 problemas críticos e 12 melhorias recomendadas** que precisam de atenção.

---

## 1. PROBLEMAS CRÍTICOS IDENTIFICADOS

### 1.1 Links Quebrados e Placeholders

**Arquivo:** `Inicio.html` (linha 110)
```html
<a href="#">ver repositorio</a>
```
**Problema:** Link placeholder sem URL real do repositório GitHub.
**Impacto:** Usuários não conseguem acessar o repositório da comunidade.
**Solução:** Substituir por `https://github.com/Build-Learn-TI/Portal-do-Grupo-de-Tecnologias-de-Informa-o`

---

**Arquivo:** `Materiais.html` (linhas 73, 85, 97, 109, 121, 133, 145, 157, 169)
```html
<a href="#" class="cartao-link">Ver Recurso &rarr;</a>
```
**Problema:** Todos os 9 cartões de materiais têm links placeholder.
**Impacto:** Nenhum recurso é acessível.
**Solução:** Adicionar URLs reais dos cursos/recursos ou implementar modal de detalhes.

---

**Arquivo:** `Contacto.html` (linhas 94, 101)
```html
<a href="#" target="_blank">
    <article class="cartao-lateral">
        <div class="icone"><i class="fa-brands fa-google-drive"></i></div>
        <p>Google drive</p>
        <p>Materiais e documentos</p>
    </article>
</a>
```
**Problema:** Links do Google Drive e OneDrive são placeholders.
**Impacto:** Usuários não conseguem acessar os materiais compartilhados.
**Solução:** Adicionar URLs reais dos compartilhados.

---

### 1.2 Problemas de HTML Estrutural

**Arquivo:** `sobre.html` (linhas 62-64)
```html
<p>"Criar um portal digital do grupo que funcione como ponto central de apresentação, partilha de
    conhecimento e organização de projectos, incentivando a aprendizagem contínua, a colaboração e o
    crescimento profissional dos membros na área de Tecnologias de</p>
```
**Problema:** Texto truncado no meio da frase ("Tecnologias de").
**Impacto:** Mensagem incompleta e confusa.
**Solução:** Completar o texto com "Informação".

---

**Arquivo:** `sobre.html` (linha 81)
```html
</article>
</article>
```
**Problema:** Tag `</article>` duplicada/órfã após o segundo cartão de valores.
**Impacto:** Estrutura HTML inválida, pode causar problemas de renderização.
**Solução:** Remover a tag duplicada.

---

### 1.3 Formulário sem Validação ou Feedback

**Arquivo:** `Contacto.html` (linhas 58-70)
```html
<form action="/enviar dados" method="POST">
    <label for="nome">Nome Completo:</label>
    <input type="text" id="nome" name="nome" placeholder="Ex: João Silva" required>
    ...
    <button type="submit">Enviar Formulário</button>
</form>
```
**Problemas:**
- Action aponta para `/enviar dados` (endpoint local que não existe)
- Sem validação de email no cliente
- Sem feedback visual após envio
- Sem tratamento de erro

**Impacto:** Formulário não funciona; usuários não sabem se a mensagem foi enviada.
**Solução:** Adicionar JavaScript para validação e feedback, ou usar FormSubmit/Formspree.

---

### 1.4 Filtro de Materiais sem Funcionalidade

**Arquivo:** `Materiais.html` (linhas 55-62)
```html
<div class="filtros-container">
    <button class="btn-filtro active" data-filter="todos">Todos</button>
    <button class="btn-filtro" data-filter="programacao">Programação</button>
    ...
</div>
```

**Problema:** Botões de filtro têm atributo `data-filter` mas **nenhuma lógica JavaScript** implementa a filtragem.
**Impacto:** Botões são apenas visuais; não filtram os cursos.
**Solução:** Implementar JavaScript para mostrar/ocultar cartões baseado na categoria.

---

### 1.5 Menu Mobile sem Fechamento ao Clicar em Link

**Arquivo:** `script.js` (linhas 41-56)
```javascript
// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('.Layout-aside');

if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('menu-aberto');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('menu-aberto') && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            sidebar.classList.remove('menu-aberto');
        }
    });
}
```

**Problema:** Menu não fecha automaticamente quando o utilizador clica num link de navegação.
**Impacto:** Em mobile, o menu fica aberto após navegar para outra página.
**Solução:** Adicionar event listener aos links do menu para fechar ao clicar.

---

### 1.6 Inconsistência em Nomes de Arquivos

**Arquivos:** `Contacto.html`, `Eventos.html`, `Materiais.html`, `Projectos.html`, `Inicio.html`, `sobre.html`

**Problema:** Mistura de convenções de nomenclatura:
- Alguns com primeira letra maiúscula: `Contacto.html`, `Eventos.html`, `Materiais.html`, `Projectos.html`, `Inicio.html`
- Um em minúsculas: `sobre.html`

**Impacto:** Inconsistência; pode causar confusão em sistemas case-sensitive.
**Solução:** Padronizar para minúsculas: `contacto.html`, `eventos.html`, etc.

---

## 2. MELHORIAS RECOMENDADAS

### 2.1 Adicionar Indicador de Página Ativa

**Problema:** O indicador `.active` está hardcoded em cada página, mas não há validação.
**Solução:** Implementar JavaScript para detectar a página atual e marcar o link como ativo automaticamente.

---

### 2.2 Melhorar Acessibilidade do Tema

**Problema:** Botão de tema não tem `aria-label` ou feedback visual claro.
**Solução:** Adicionar `aria-label="Alternar para tema escuro/claro"` e ícone que muda.

---

### 2.3 Adicionar Scroll Suave para Âncoras

**Problema:** Links internos (`#`) não têm scroll suave.
**Solução:** Adicionar CSS `scroll-behavior: smooth;` ou JavaScript para scroll suave.

---

### 2.4 Validação de Email no Formulário

**Problema:** Campo de email tem `type="email"` mas sem validação visual.
**Solução:** Adicionar feedback visual em tempo real (verde/vermelho).

---

### 2.5 Melhorar Feedback de Botões

**Problema:** Botões não têm feedback visual ao clicar (sem `active` state).
**Solução:** Adicionar estado `:active` e feedback visual.

---

### 2.6 Adicionar Suporte a Teclado

**Problema:** Menu mobile não pode ser navegado com Tab/Enter.
**Solução:** Adicionar `tabindex` e handlers de teclado.

---

### 2.7 Otimizar Performance de Animações

**Problema:** Animação `fadeInSlide` em todos os elementos pode ser pesada.
**Solução:** Usar `will-change` ou `transform` para melhor performance.

---

### 2.8 Adicionar Confirmação de Envio do Formulário

**Problema:** Sem feedback após submissão.
**Solução:** Mostrar mensagem de sucesso ou erro.

---

### 2.9 Melhorar Responsividade dos Cartões

**Problema:** Cartões podem não se adaptar bem em telas muito pequenas.
**Solução:** Ajustar media queries para telas < 480px.

---

### 2.10 Adicionar Loading State para Links Externos

**Problema:** Links externos abrem sem feedback.
**Solução:** Adicionar ícone ou animação de carregamento.

---

### 2.11 Melhorar Contraste de Cores

**Problema:** Algumas cores podem não ter contraste suficiente (WCAG AA).
**Solução:** Testar com ferramentas de contraste (WebAIM).

---

### 2.12 Adicionar Breadcrumb de Navegação

**Problema:** Usuários não sabem onde estão no site.
**Solução:** Adicionar breadcrumb em cada página.

---

## 3. PRIORIDADE DE CORREÇÃO

### 🔴 CRÍTICO (Corrigir Imediatamente)
1. Links quebrados (GitHub, Google Drive, OneDrive)
2. Filtro de materiais sem funcionalidade
3. Formulário sem funcionalidade
4. HTML inválido (tag duplicada)
5. Texto truncado

### 🟡 IMPORTANTE (Corrigir Antes da Publicação)
6. Menu mobile não fecha ao navegar
7. Inconsistência de nomes de arquivos
8. Indicador de página ativa
9. Validação de email

### 🟢 MELHORIAS (Fazer Depois)
10. Acessibilidade do tema
11. Scroll suave
12. Feedback de botões
13. Suporte a teclado
14. Performance de animações

---

## 4. PRÓXIMOS PASSOS

1. **Criar branch de trabalho:** `feature/frontend-fixes`
2. **Implementar correções críticas** (seção 3)
3. **Testar em mobile e desktop**
4. **Fazer commit e abrir PR para `dev`**
5. **Aguardar revisão da equipa**

---

## 5. CHECKLIST DE IMPLEMENTAÇÃO

- [ ] Corrigir todos os links quebrados
- [ ] Implementar filtro de materiais
- [ ] Adicionar funcionalidade ao formulário
- [ ] Corrigir HTML inválido
- [ ] Completar texto truncado
- [ ] Fechar menu mobile ao navegar
- [ ] Padronizar nomes de arquivos
- [ ] Implementar indicador de página ativa
- [ ] Adicionar validação de email
- [ ] Testar em múltiplos dispositivos
- [ ] Documentar mudanças no README

---

**Data da Auditoria:** 20 de Julho de 2026  
**Responsável:** Soares Nhangave (Front-end)  
**Status:** Pronto para Implementação
