# Comparação: Auditoria Front-end vs Relatório de Testes Final

**Data:** 22 de Julho de 2026  
**Responsável:** Soares Nhangave (Front-end)  
**Comparação:** Auditoria Realizada vs Relatório de Testes (Yannich Thay & Manuel Guirute)

---

## 📊 Resumo Executivo

O relatório de testes finais identificou **11 problemas críticos e de design** que **NÃO foram cobertos** pela auditoria inicial de front-end. A maioria destes problemas está relacionada com:

1. **Design Visual (Branding)** - Paleta de cores desatualizada
2. **Segurança** - Vulnerabilidades XSS e Reverse Tabnabbing
3. **Conteúdo** - Erros de digitação e inconsistências de texto
4. **Funcionalidade** - Crash na navegação e recursos faltantes

---

## 🔴 PROBLEMAS CRÍTICOS ENCONTRADOS (Não Cobertos)

### 1. **CRASH NA NAVEGAÇÃO** ⚠️ CRÍTICO
- **Problema:** Clicar em "Início" no menu resulta num crash do portal
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** CRÍTICA
- **Ação Necessária:** Investigar e corrigir imediatamente
- **Possível Causa:** Erro no evento de clique ou redirecionamento inválido

---

### 2. **LOGO/ÍCONE QUEBRADO** ⚠️ CRÍTICO
- **Problema:** O logótipo no canto superior esquerdo não carrega (imagem quebrada)
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** CRÍTICA
- **Ação Necessária:** Verificar caminho da imagem (src) e upload do ficheiro
- **Localização:** Header/Cabeçalho
- **Impacto:** Branding danificado

---

### 3. **RODAPÉ (FOOTER) EM FALTA** ⚠️ CRÍTICO
- **Problema:** O site não apresenta footer com copyright
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** CRÍTICA (Risco Legal)
- **Ação Necessária:** Adicionar "© 2026 @ Build & Learn"
- **Impacto:** Risco de copyright strikes

---

## 🎨 PROBLEMAS DE DESIGN/BRANDING

### 4. **PALETA DE CORES DESATUALIZADA** 🎨 DESIGN
- **Problema:** Portal ainda usa cores do regulamento antigo
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** ALTA (Branding)
- **Nova Paleta Recomendada:** "Paleta Prestígio"
  - Verde-Petróleo (Primário)
  - Dourado (Secundário)
  - Marfim (Neutro)
- **Arquivos de Referência Fornecidos:**
  - `LinkedIn_01_Proposito.webp` - Design com nova paleta
  - `LinkedIn_02_Missao.webp` - Design com nova paleta
  - `LinkedIn_03_Visao.webp` - Design com nova paleta
  - `LinkedIn_04_Valores.webp` - Design com nova paleta
  - `Build_Learn_Aneis_01_Principal.webp` - Logo com nova paleta
  - `Build_Learn_Aneis_02_Reverso.webp` - Logo reverso
  - `Build_Learn_Aneis_03_Monocromatico_Transparente.webp` - Logo monocromático
- **Ação Necessária:** Atualizar CSS com nova paleta de cores
- **Impacto:** Inconsistência com identidade visual corporativa

---

### 5. **INCONSISTÊNCIA NO DARK MODE** 🎨 DESIGN
- **Problema:** Paleta de cores apresenta falhas de consistência no Dark Mode
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** ALTA
- **Ação Necessária:** Revisar e harmonizar cores no Dark Mode
- **Impacto:** Experiência de utilizador degradada

---

### 6. **ACESSIBILIDADE - HERO SECTION** ♿ ACESSIBILIDADE
- **Problema:** Texto "BEM-VINDO AO PORTAL..." ilegível por falta de contraste
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** ALTA (WCAG)
- **Detalhes:** Afeta Light Mode e Dark Mode
- **Ação Necessária:** Aumentar contraste do texto
- **Impacto:** Não conformidade com WCAG 2.1

---

### 7. **DESCENTRALIZAÇÃO VISUAL - ABA PROJETOS** 🎨 DESIGN
- **Problema:** Progresso do portal descentralizado visualmente
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** MÉDIA
- **Ação Necessária:** Ajustar alinhamento CSS
- **Impacto:** Inconsistência visual

---

## 📝 PROBLEMAS DE CONTEÚDO/TEXTO

### 8. **ERRO DE DIGITAÇÃO - NOME DO MEMBRO** ✏️ CONTEÚDO
- **Problema:** "Manuel Guirutw" deve ser "Manuel Guirute"
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** BAIXA
- **Localização:** Página Sobre/Equipa
- **Ação Necessária:** Corrigir digitação
- **Impacto:** Profissionalismo

---

### 9. **INCONSISTÊNCIA DE CAPITALIZAÇÃO** ✏️ CONTEÚDO
- **Problema:** Falta de padronização nas legendas dos cartões
- **Exemplos:**
  - "membros activos" vs "Membros Ativos"
  - "fases do Projecto" vs "Fases do Projeto"
  - "objectivos e valores" vs "Objetivos e Valores"
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** MÉDIA
- **Ação Necessária:** Padronizar capitalização em todo o site
- **Impacto:** Profissionalismo e consistência

---

### 10. **ATUALIZAÇÃO DE MARCA - MENU LATERAL** 📝 CONTEÚDO
- **Problema:** Menu drawer mobile ainda mostra "Build and Learn TI" (antigo)
- **Deve ser:** "Build and Learn IT" (novo)
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** MÉDIA (Branding)
- **Localização:** Menu drawer mobile
- **Ação Necessária:** Atualizar texto
- **Impacto:** Inconsistência de marca

---

## 🔒 PROBLEMAS DE SEGURANÇA

### 11. **REVERSE TABNABBING** 🔒 SEGURANÇA
- **Problema:** Links externos sem `rel="noopener noreferrer"`
- **Status na Auditoria:** ✅ IDENTIFICADO (parcialmente)
- **Severidade:** ALTA
- **Componente:** Links externos (GitHub, WhatsApp, etc.)
- **Solução:** Adicionar `rel="noopener noreferrer"` a todas as tags `<a>` com `target="_blank"`
- **Observação:** Isto foi parcialmente corrigido na implementação, mas precisa de verificação completa

---

### 12. **VULNERABILIDADE XSS (CROSS-SITE SCRIPTING)** 🔒 SEGURANÇA
- **Problema:** Uso de `.innerHTML` ao renderizar mensagens de erro/sucesso
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** ALTA
- **Componente:** Formulário (script.js)
- **Solução:** Substituir `.innerHTML` por `.textContent`
- **Ação Necessária:** Revisar script.js e corrigir
- **Impacto:** Risco crítico de segurança

---

### 13. **PREVENÇÃO DE SPAM** 🔒 SEGURANÇA
- **Problema:** Falta de proteção contra abuso de submissões no formulário
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** MÉDIA
- **Solução:** Implementar Honeypot e desativar botão após clique
- **Ação Necessária:** Adicionar campo oculto (honeypot) e `disabled = true` após submissão
- **Impacto:** Proteção contra bots de spam

---

## 📋 PROBLEMAS FUNCIONAIS

### 14. **ABA EVENTOS - AGENDAR EVENTO** ⚙️ FUNCIONALIDADE
- **Problema:** Botões não acionam funcionalidade de "agendar o evento"
- **Status na Auditoria:** ❌ NÃO IDENTIFICADO
- **Severidade:** MÉDIA (Ajuste Futuro)
- **Observação:** Não é bloqueador imediato, mas requer ajuste nas próximas iterações
- **Ação Necessária:** Implementar funcionalidade de agendamento
- **Impacto:** Experiência de utilizador incompleta

---

## ✅ PROBLEMAS IDENTIFICADOS NA AUDITORIA E CONFIRMADOS

| Problema | Auditoria | Testes | Status |
|----------|-----------|--------|--------|
| Links quebrados | ✅ Sim | ✅ Confirmado | Corrigido |
| Validação de formulário | ✅ Sim | ✅ Confirmado | Corrigido |
| Menu mobile | ✅ Sim | ✅ Confirmado | Corrigido |
| Erros HTML | ✅ Sim | ✅ Confirmado | Corrigido |
| Reverse Tabnabbing | ✅ Sim (Parcial) | ✅ Confirmado | Parcialmente Corrigido |

---

## 🎯 RESUMO: O QUE FALTA

### Não Coberto pela Auditoria (Novo):

| # | Categoria | Problema | Severidade |
|---|-----------|----------|-----------|
| 1 | Funcionalidade | Crash na navegação (Início) | 🔴 CRÍTICA |
| 2 | Branding | Logo/Ícone quebrado | 🔴 CRÍTICA |
| 3 | Conteúdo | Rodapé (footer) em falta | 🔴 CRÍTICA |
| 4 | Design | Paleta de cores desatualizada | 🟠 ALTA |
| 5 | Design | Inconsistência Dark Mode | 🟠 ALTA |
| 6 | Acessibilidade | Contraste Hero Section | 🟠 ALTA |
| 7 | Design | Descentralização Projetos | 🟡 MÉDIA |
| 8 | Conteúdo | Erro de digitação (Manuel) | 🟡 MÉDIA |
| 9 | Conteúdo | Capitalização inconsistente | 🟡 MÉDIA |
| 10 | Branding | Menu drawer "TI" vs "IT" | 🟡 MÉDIA |
| 11 | Segurança | XSS no formulário | 🟠 ALTA |
| 12 | Segurança | Falta Honeypot (spam) | 🟡 MÉDIA |
| 13 | Funcionalidade | Eventos - Agendar | 🟡 MÉDIA |

---

## 🚀 PRÓXIMOS PASSOS RECOMENDADOS

### FASE 1: CRÍTICA (Fazer Imediatamente)
1. ✅ Corrigir crash na navegação (Início)
2. ✅ Adicionar logo/ícone do header
3. ✅ Adicionar footer com copyright
4. ✅ Atualizar paleta de cores (Verde-Petróleo, Dourado, Marfim)
5. ✅ Corrigir contraste Hero Section

### FASE 2: ALTA (Fazer Esta Semana)
1. ✅ Harmonizar Dark Mode
2. ✅ Corrigir XSS no formulário (substituir .innerHTML)
3. ✅ Implementar Honeypot para spam
4. ✅ Corrigir capitalização de textos
5. ✅ Atualizar "TI" para "IT" no menu

### FASE 3: MÉDIA (Próximas Iterações)
1. ✅ Corrigir descentralização Projetos
2. ✅ Corrigir erro de digitação (Manuel)
3. ✅ Implementar funcionalidade Agendar Eventos

---

## 📎 Referências de Design

Os seguintes ficheiros de design foram fornecidos como referência:

- **LinkedIn_01_Proposito.webp** - Novo design com paleta
- **LinkedIn_02_Missao.webp** - Novo design com paleta
- **LinkedIn_03_Visao.webp** - Novo design com paleta
- **LinkedIn_04_Valores.webp** - Novo design com paleta
- **Build_Learn_Aneis_01_Principal.webp** - Logo principal
- **Build_Learn_Aneis_02_Reverso.webp** - Logo reverso
- **Build_Learn_Aneis_03_Monocromatico_Transparente.webp** - Logo monocromático
- **Build_Learn_Manual_de_Identidade_Visual.pdf** - Guia completo de identidade visual
- **Build_Learn_Identidade_do_Grupo.pdf** - Documento de identidade

---

## 📌 Conclusão

A auditoria inicial focou-se corretamente nos **problemas de funcionalidade e links**, mas **não cobriu aspectos críticos de design, branding e segurança** que foram identificados pelo relatório de testes.

**Recomendação:** Integrar o novo design visual (paleta Prestígio) e corrigir as vulnerabilidades de segurança como prioridade máxima antes da próxima iteração.

---

**Responsável:** Soares Nhangave (Front-end)  
**Data:** 22 de Julho de 2026  
**Status:** Requer Ação Imediata
