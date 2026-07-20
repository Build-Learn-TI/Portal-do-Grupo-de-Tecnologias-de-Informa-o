/**
 * Script Principal - Portal do Grupo de TI
 * Funcionalidades: Tema, Menu Mobile, Filtro de Materiais, Formulário de Contacto
 * Autor: Soares Nhangave (Front-end)
 * Data: Julho 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    // ========================================================================
    // 1. GERENCIAMENTO DE TEMA (Light/Dark Mode)
    // ========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Definir tema ao carregar
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Handler do botão de alternar tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');

            if (!theme) {
                theme = prefersDarkScheme.matches ? 'dark' : 'light';
            }

            const newTheme = theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Melhorar acessibilidade
            const ariaLabel = newTheme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro';
            themeToggleBtn.setAttribute('aria-label', ariaLabel);
        });

        // Adicionar aria-label inicial
        const initialLabel = prefersDarkScheme.matches ? 'Alternar para tema claro' : 'Alternar para tema escuro';
        themeToggleBtn.setAttribute('aria-label', initialLabel);
    }

    // Ouvir mudanças do sistema se nenhuma preferência foi salva
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        }
    });

    // ========================================================================
    // 2. MENU MOBILE - Toggle e Fechamento
    // ========================================================================
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.Layout-aside');
    const navLinks = sidebar ? sidebar.querySelectorAll('a') : [];

    if (menuBtn && sidebar) {
        // Abrir/Fechar menu ao clicar no botão hambúrguer
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('menu-aberto');
            // Melhorar acessibilidade
            const isOpen = sidebar.classList.contains('menu-aberto');
            menuBtn.setAttribute('aria-expanded', isOpen);
        });

        // Fechar menu quando clicar fora
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('menu-aberto') && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
                sidebar.classList.remove('menu-aberto');
                menuBtn.setAttribute('aria-expanded', false);
            }
        });

        // Fechar menu ao clicar num link de navegação
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('menu-aberto');
                menuBtn.setAttribute('aria-expanded', false);
            });
        });

        // Suporte a teclado (ESC para fechar)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('menu-aberto')) {
                sidebar.classList.remove('menu-aberto');
                menuBtn.setAttribute('aria-expanded', false);
                menuBtn.focus();
            }
        });

        // Adicionar aria-label inicial
        menuBtn.setAttribute('aria-label', 'Abrir menu de navegação');
        menuBtn.setAttribute('aria-expanded', false);
    }

    // ========================================================================
    // 3. INDICADOR DE PÁGINA ATIVA
    // ========================================================================
    const currentPage = window.location.pathname.split('/').pop() || 'Inicio.html';
    const navItems = document.querySelectorAll('.Layout-aside__nav a');
    
    navItems.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'Inicio.html')) {
            link.classList.add('active');
        }
    });

    // ========================================================================
    // 4. FILTRO DE MATERIAIS
    // ========================================================================
    const filterButtons = document.querySelectorAll('.btn-filtro');
    const courseCards = document.querySelectorAll('.cartao-curso');

    if (filterButtons.length > 0 && courseCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filterValue = button.getAttribute('data-filter');

                // Atualizar estado visual dos botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filtrar cartões
                courseCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'todos' || cardCategory === filterValue) {
                        card.style.display = 'block';
                        // Adicionar animação suave
                        card.style.animation = 'fadeInSlide 0.3s ease-out forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ========================================================================
    // 5. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTACTO
    // ========================================================================
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        const nameInput = contactForm.querySelector('#nome');
        const emailInput = contactForm.querySelector('#email');
        const messageInput = contactForm.querySelector('#Messagem');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        // Validação em tempo real do email
        if (emailInput) {
            emailInput.addEventListener('blur', () => {
                validateEmail(emailInput);
            });

            emailInput.addEventListener('input', () => {
                validateEmail(emailInput);
            });
        }

        // Handler de envio do formulário
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validar campos
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Nome é obrigatório');
                return;
            }

            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                showError(emailInput, 'Email inválido');
                return;
            }

            if (!messageInput.value.trim()) {
                showError(messageInput, 'Mensagem é obrigatória');
                return;
            }

            // Se tudo estiver válido, mostrar sucesso
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            // Simular envio (em produção, usar FormSubmit ou similar)
            setTimeout(() => {
                showSuccess('Mensagem enviada com sucesso! Obrigado pelo contacto.');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Formulário';
                clearErrors();
            }, 1500);
        });
    }

    // ========================================================================
    // 6. FUNÇÕES AUXILIARES
    // ========================================================================

    /**
     * Validar formato de email
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validar campo de email
     */
    function validateEmail(emailInput) {
        const email = emailInput.value.trim();
        
        if (!email) {
            clearFieldError(emailInput);
            return;
        }

        if (isValidEmail(email)) {
            clearFieldError(emailInput);
            emailInput.style.borderColor = '#34A853';
        } else {
            showError(emailInput, 'Email inválido');
        }
    }

    /**
     * Mostrar erro num campo
     */
    function showError(input, message) {
        input.style.borderColor = '#EA4335';
        
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('small');
            errorElement.classList.add('error-message');
            errorElement.style.color = '#EA4335';
            errorElement.style.display = 'block';
            errorElement.style.marginTop = '-1rem';
            errorElement.style.marginBottom = '1rem';
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.textContent = message;
    }

    /**
     * Limpar erro de um campo
     */
    function clearFieldError(input) {
        input.style.borderColor = '';
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
    }

    /**
     * Limpar todos os erros
     */
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
        
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '';
        });
    }

    /**
     * Mostrar mensagem de sucesso
     */
    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.style.cssText = `
            background-color: #34A853;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
            animation: fadeInSlide 0.3s ease-out forwards;
        `;
        successDiv.textContent = message;

        const form = document.querySelector('form');
        if (form) {
            form.parentNode.insertBefore(successDiv, form);
            
            // Remover mensagem após 5 segundos
            setTimeout(() => {
                successDiv.style.animation = 'fadeOutSlide 0.3s ease-out forwards';
                setTimeout(() => successDiv.remove(), 300);
            }, 5000);
        }
    }

    // ========================================================================
    // 7. SCROLL SUAVE PARA ÂNCORAS
    // ========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================================================
    // 8. MELHORIAS DE PERFORMANCE
    // ========================================================================
    // Usar requestAnimationFrame para animações suaves
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInSlide 0.6s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.Layout-main > *').forEach(el => {
            observer.observe(el);
        });
    }
});

// ============================================================================
// ANIMAÇÃO CSS ADICIONAL (para fadeOutSlide)
// ============================================================================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOutSlide {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-15px);
        }
    }
`;
document.head.appendChild(style);
