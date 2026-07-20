# Guia de Testes - Alterações Front-end

## Resumo das Alterações Implementadas

Esta versão inclui melhorias significativas nas interações JavaScript, correção de links quebrados e ajustes finais de código conforme o papel de Front-end atribuído.

---

## 1. TESTES DO FILTRO DE MATERIAIS

### Objetivo
Validar que o filtro de categorias funciona corretamente na página `Materiais.html`.

### Passos de Teste

1. **Abrir página de Materiais**
   - Navegar para `Materiais.html`
   - Verificar que todos os 9 cartões de cursos estão visíveis inicialmente

2. **Testar botão "Todos"**
   - Clicar no botão "Todos"
   - Verificar que todos os 9 cartões aparecem
   - Verificar que o botão tem classe `.active` (fundo azul)

3. **Testar filtro "Programação"**
   - Clicar no botão "Programação"
   - Verificar que apenas 4 cartões aparecem:
     - Introdução ao HTML & CSS
     - JavaScript Básico
     - React do Zero
     - Python para Todos
   - Verificar que o botão tem classe `.active`

4. **Testar filtro "Design"**
   - Clicar no botão "Design"
   - Verificar que apenas 2 cartões aparecem:
     - Figma para Iniciantes
     - UI/UX Design Principles

5. **Testar filtro "GitHub"**
   - Clicar no botão "GitHub"
   - Verificar que apenas 1 cartão aparece:
     - Git & GitHub Essentials

6. **Testar filtro "Redes"**
   - Clicar no botão "Redes"
   - Verificar que apenas 1 cartão aparece:
     - Fundamentos de Redes

7. **Testar filtro "Bases de Dados"**
   - Clicar no botão "Bases de Dados"
   - Verificar que apenas 1 cartão aparece:
     - SQL e Bases de Dados

### Resultado Esperado
✅ Todos os filtros funcionam corretamente, mostrando apenas os cartões da categoria selecionada.

---

## 2. TESTES DO FORMULÁRIO DE CONTACTO

### Objetivo
Validar que o formulário de contacto valida dados e fornece feedback ao utilizador.

### Passos de Teste

1. **Testar envio com campos vazios**
   - Deixar todos os campos vazios
   - Clicar em "Enviar Formulário"
   - Verificar que aparece mensagem de erro "Nome é obrigatório"

2. **Testar validação de email**
   - Preencher Nome: "João Silva"
   - Preencher Email: "email-invalido"
   - Clicar em "Enviar Formulário"
   - Verificar que aparece mensagem de erro "Email inválido"

3. **Testar validação de email em tempo real**
   - Preencher Email: "teste@"
   - Clicar fora do campo
   - Verificar que a borda do campo fica vermelha
   - Completar com "teste@exemplo.com"
   - Verificar que a borda fica verde

4. **Testar envio com dados válidos**
   - Preencher Nome: "João Silva"
   - Preencher Email: "joao@exemplo.com"
   - Preencher Mensagem: "Olá, gostaria de participar"
   - Clicar em "Enviar Formulário"
   - Verificar que:
     - Botão muda para "Enviando..."
     - Após 1.5 segundos, aparece mensagem verde "Mensagem enviada com sucesso!"
     - Formulário é limpo
     - Botão volta a "Enviar Formulário"

### Resultado Esperado
✅ Formulário valida dados, fornece feedback visual e simula envio com sucesso.

---

## 3. TESTES DE LINKS

### Objetivo
Validar que todos os links funcionam corretamente.

### Passos de Teste

1. **Link do GitHub (Inicio.html)**
   - Clicar no link "ver repositorio" na seção GitHub
   - Verificar que abre em nova aba
   - Verificar que a URL é: `https://github.com/Build-Learn-TI/Portal-do-Grupo-de-Tecnologias-de-Informa-o`

2. **Links de Recursos (Materiais.html)**
   - Clicar em "Ver Recurso" de cada cartão
   - Verificar que cada um abre em nova aba com URL válida:
     - HTML & CSS → W3Schools HTML
     - JavaScript → W3Schools JS
     - Git & GitHub → GitHub Skills
     - Figma → Figma Resource Library
     - React → React.dev
     - SQL → W3Schools SQL
     - Python → Python.org
     - Redes → Cisco Certifications
     - UI/UX → NN/g Article

3. **Links de Contacto (Contacto.html)**
   - Clicar no ícone de Email
   - Verificar que abre cliente de email com `grupo.ti@exemplo.mz`
   - Clicar no ícone de WhatsApp
   - Verificar que abre WhatsApp com número `+2588000000`
   - Clicar no ícone de GitHub
   - Verificar que abre em nova aba
   - Clicar no ícone de Google Drive
   - Verificar que abre em nova aba
   - Clicar no ícone de OneDrive
   - Verificar que abre em nova aba

### Resultado Esperado
✅ Todos os links funcionam e abrem os destinos corretos.

---

## 4. TESTES DO MENU MOBILE

### Objetivo
Validar que o menu mobile funciona corretamente em dispositivos pequenos.

### Passos de Teste (Redimensionar janela para < 900px)

1. **Abrir menu**
   - Clicar no botão hambúrguer (☰)
   - Verificar que o menu desliza da esquerda
   - Verificar que o botão tem `aria-expanded="true"`

2. **Fechar menu ao clicar fora**
   - Com o menu aberto, clicar fora do menu
   - Verificar que o menu fecha

3. **Fechar menu ao navegar**
   - Abrir menu
   - Clicar num link de navegação (ex: "Sobre")
   - Verificar que o menu fecha automaticamente
   - Verificar que a página muda

4. **Fechar menu com ESC**
   - Abrir menu
   - Pressionar tecla ESC
   - Verificar que o menu fecha
   - Verificar que o foco volta ao botão hambúrguer

5. **Indicador de página ativa**
   - Navegar para diferentes páginas
   - Verificar que o link da página atual tem classe `.active` (fundo azul)

### Resultado Esperado
✅ Menu mobile funciona corretamente com todas as interações esperadas.

---

## 5. TESTES DE ACESSIBILIDADE

### Objetivo
Validar que o site é acessível para utilizadores com deficiências.

### Passos de Teste

1. **Navegação por teclado**
   - Pressionar TAB repetidamente
   - Verificar que todos os botões e links são focáveis
   - Verificar que a ordem de foco é lógica

2. **Tema escuro/claro**
   - Clicar no botão de tema
   - Verificar que o tema muda
   - Verificar que o `aria-label` do botão é apropriado
   - Recarregar página
   - Verificar que o tema é mantido (localStorage)

3. **Leitores de ecrã**
   - Usar leitor de ecrã (ex: NVDA, JAWS)
   - Verificar que todos os botões têm labels apropriados
   - Verificar que as imagens têm alt text
   - Verificar que os formulários têm labels

### Resultado Esperado
✅ Site é acessível e funciona com tecnologias de assistência.

---

## 6. TESTES DE RESPONSIVIDADE

### Objetivo
Validar que o site funciona bem em diferentes tamanhos de ecrã.

### Passos de Teste

1. **Desktop (> 900px)**
   - Verificar que o menu lateral está visível
   - Verificar que o layout é em duas colunas
   - Verificar que o botão hambúrguer está oculto

2. **Tablet (600px - 900px)**
   - Redimensionar janela
   - Verificar que o menu lateral desaparece
   - Verificar que o botão hambúrguer aparece
   - Verificar que o conteúdo se adapta

3. **Mobile (< 600px)**
   - Redimensionar janela
   - Verificar que o layout é em uma coluna
   - Verificar que os cartões se adaptam
   - Verificar que o texto é legível

### Resultado Esperado
✅ Site é responsivo e funciona bem em todos os tamanhos de ecrã.

---

## 7. TESTES DE PERFORMANCE

### Objetivo
Validar que o site carrega rápido e as animações são suaves.

### Passos de Teste

1. **Tempo de carregamento**
   - Abrir DevTools (F12)
   - Ir para aba "Network"
   - Recarregar página
   - Verificar que o tempo de carregamento é < 3 segundos

2. **Animações suaves**
   - Abrir página
   - Verificar que as animações são suaves (não há travamentos)
   - Verificar que o scroll é suave

3. **Sem erros de console**
   - Abrir DevTools (F12)
   - Ir para aba "Console"
   - Verificar que não há erros (apenas warnings são aceitáveis)

### Resultado Esperado
✅ Site carrega rápido, animações são suaves e sem erros.

---

## 8. TESTES DE COMPATIBILIDADE

### Objetivo
Validar que o site funciona em diferentes navegadores.

### Passos de Teste

1. **Chrome/Chromium**
   - Testar todas as funcionalidades
   - Verificar que tudo funciona

2. **Firefox**
   - Testar todas as funcionalidades
   - Verificar que tudo funciona

3. **Safari (se disponível)**
   - Testar todas as funcionalidades
   - Verificar que tudo funciona

4. **Edge**
   - Testar todas as funcionalidades
   - Verificar que tudo funciona

### Resultado Esperado
✅ Site funciona em todos os navegadores principais.

---

## 9. CHECKLIST FINAL

- [ ] Filtro de materiais funciona
- [ ] Formulário valida e envia
- [ ] Todos os links funcionam
- [ ] Menu mobile funciona
- [ ] Acessibilidade OK
- [ ] Responsividade OK
- [ ] Performance OK
- [ ] Compatibilidade OK
- [ ] Sem erros de console
- [ ] Código está limpo e comentado

---

## 10. COMO REPORTAR BUGS

Se encontrar algum problema durante os testes:

1. Anote o passo exato que causou o problema
2. Descreva o comportamento esperado vs. o comportamento atual
3. Tire uma screenshot ou grave um vídeo
4. Abra uma issue no GitHub com o título: `[BUG] Descrição do problema`
5. Inclua os detalhes no corpo da issue

---

**Data de Criação:** 20 de Julho de 2026  
**Responsável:** Soares Nhangave (Front-end)  
**Status:** Pronto para Testes
