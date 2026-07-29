/* ============================================
   PORTAL DO GRUPO DE TECNOLOGIAS DE INFORMAÇÃO
   Script.js - Versão 2.0 com Correções de Segurança
   ============================================ */

// ============================================
// CONFIGURAÇÃO INICIAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  inicializarTema();
  inicializarNavegacao();
  inicializarFiltros();
  inicializarFormulario();
  atualizarIndicadorPagina();
  configurarScrollSuave();
});

// ============================================
// TEMA CLARO/ESCURO
// ============================================

function inicializarTema() {
  const temaSalvo = localStorage.getItem('tema') || 'claro';
  aplicarTema(temaSalvo);

  const botaoTema = document.getElementById('botao-tema');
  if (botaoTema) {
    botaoTema.addEventListener('click', alternarTema);
  }
}

function aplicarTema(tema) {
  if (tema === 'escuro') {
    document.body.classList.add('dark-mode');
    localStorage.setItem('tema', 'escuro');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('tema', 'claro');
  }
}

function alternarTema() {
  const temaAtual = localStorage.getItem('tema') || 'claro';
  const novoTema = temaAtual === 'claro' ? 'escuro' : 'claro';
  aplicarTema(novoTema);
}

// ============================================
// NAVEGAÇÃO E MENU MOBILE
// ============================================

function inicializarNavegacao() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('ativo');
      menuToggle.setAttribute('aria-expanded', nav.classList.contains('ativo'));
    });

    // Fechar menu ao clicar em um link
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('ativo');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fechar menu ao pressionar ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('ativo')) {
        nav.classList.remove('ativo');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('ativo');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Suporte a navegação por teclado
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link, index) => {
    link.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight' && index < navLinks.length - 1) {
        navLinks[index + 1].focus();
      } else if (e.key === 'ArrowLeft' && index > 0) {
        navLinks[index - 1].focus();
      }
    });
  });
}

function atualizarIndicadorPagina() {
  const links = document.querySelectorAll('nav a');
  const paginaAtual = window.location.pathname;

  links.forEach(link => {
    link.classList.remove('ativo');
    if (link.getAttribute('href') === paginaAtual || 
        (paginaAtual === '/' && link.getAttribute('href') === 'Inicio.html')) {
      link.classList.add('ativo');
    }
  });
}

// ============================================
// FILTRO DE MATERIAIS
// ============================================

function inicializarFiltros() {
  const botoesFiltro = document.querySelectorAll('.filtro-btn');
  const cartoes = document.querySelectorAll('.card[data-categoria]');

  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', function() {
      // Remover classe ativo de todos os botões
      botoesFiltro.forEach(b => b.classList.remove('ativo'));
      
      // Adicionar classe ativo ao botão clicado
      this.classList.add('ativo');

      const categoria = this.getAttribute('data-filtro');

      // Animar filtro
      cartoes.forEach(card => {
        if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
          card.style.animation = 'fadeIn 0.3s ease-in';
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Animação de fade-in
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(style);

// ============================================
// VALIDAÇÃO DE FORMULÁRIO COM SEGURANÇA
// ============================================

function inicializarFormulario() {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;

  const inputEmail = document.querySelector('input[type="email"]');
  const inputNome = document.querySelector('input[name="nome"]');
  const textarea = document.querySelector('textarea');
  const botaoEnviar = formulario.querySelector('button[type="submit"]');

  // Validação em tempo real
  if (inputEmail) {
    inputEmail.addEventListener('blur', validarEmail);
    inputEmail.addEventListener('input', validarEmail);
  }

  if (inputNome) {
    inputNome.addEventListener('blur', validarNome);
  }

  // Envio do formulário
  if (botaoEnviar) {
    formulario.addEventListener('submit', function(e) {
      e.preventDefault();

      // Verificar honeypot
      const honeypot = document.querySelector('input[name="website"]');
      if (honeypot && honeypot.value !== '') {
        console.warn('Honeypot ativado - possível spam');
        return;
      }

      // Validar todos os campos
      let formularioValido = true;

      if (inputNome && !validarNome()) formularioValido = false;
      if (inputEmail && !validarEmail()) formularioValido = false;
      if (textarea && textarea.value.trim() === '') formularioValido = false;

      if (formularioValido) {
        enviarFormulario(this);
      }
    });
  }
}

function validarEmail() {
  const inputEmail = document.querySelector('input[type="email"]');
  const mensagemErro = inputEmail.nextElementSibling;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(inputEmail.value)) {
    inputEmail.classList.add('invalido');
    inputEmail.classList.remove('valido');
    if (mensagemErro && mensagemErro.classList.contains('mensagem-erro')) {
      mensagemErro.textContent = 'Por favor, insira um email válido';
      mensagemErro.classList.add('visivel');
    }
    return false;
  } else {
    inputEmail.classList.remove('invalido');
    inputEmail.classList.add('valido');
    if (mensagemErro && mensagemErro.classList.contains('mensagem-erro')) {
      mensagemErro.classList.remove('visivel');
    }
    return true;
  }
}

function validarNome() {
  const inputNome = document.querySelector('input[name="nome"]');
  if (!inputNome) return true;

  if (inputNome.value.trim().length < 3) {
    inputNome.classList.add('invalido');
    inputNome.classList.remove('valido');
    return false;
  } else {
    inputNome.classList.remove('invalido');
    inputNome.classList.add('valido');
    return true;
  }
}

function enviarFormulario(formulario) {
  const botaoEnviar = formulario.querySelector('button[type="submit"]');
  const mensagemSucesso = formulario.querySelector('.mensagem-sucesso');

  // Desativar botão para evitar múltiplos envios
  botaoEnviar.disabled = true;
  botaoEnviar.textContent = 'Enviando...';

  // Simular envio (em produção, seria um POST real)
  setTimeout(() => {
    if (mensagemSucesso) {
      // Usar textContent em vez de innerHTML para evitar XSS
      mensagemSucesso.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contacto.';
      mensagemSucesso.classList.add('visivel');
    }

    // Limpar formulário
    formulario.reset();

    // Remover validação visual
    formulario.querySelectorAll('input, textarea').forEach(campo => {
      campo.classList.remove('valido', 'invalido');
    });

    // Reativar botão após 3 segundos
    setTimeout(() => {
      botaoEnviar.disabled = false;
      botaoEnviar.textContent = 'Enviar';
      if (mensagemSucesso) {
        mensagemSucesso.classList.remove('visivel');
      }
    }, 3000);
  }, 1000);
}

// ============================================
// SCROLL SUAVE
// ============================================

function configurarScrollSuave() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const alvo = document.querySelector(href);
      if (alvo) {
        e.preventDefault();
        alvo.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ============================================
// SEGURANÇA: PROTEÇÃO CONTRA REVERSE TABNABBING
// ============================================

// Adicionar rel="noopener noreferrer" a todos os links externos
document.addEventListener('DOMContentLoaded', function() {
  const linksExternos = document.querySelectorAll('a[target="_blank"]');
  linksExternos.forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
  });
});

// ============================================
// UTILITÁRIOS
// ============================================

// Função para sanitizar texto (evitar XSS)
function sanitizarTexto(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

// Função para log seguro
function logSeguro(mensagem) {
  console.log('[Build & Learn]', mensagem);
}

// ============================================
// OBSERVADOR DE INTERSEÇÃO (Performance)
// ============================================

const observador = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

// Observar cartões para animação
document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  observador.observe(card);
});

// ============================================
// EXPORTAR FUNÇÕES (para testes)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    validarEmail,
    validarNome,
    sanitizarTexto,
    inicializarTema,
    alternarTema
  };
}
