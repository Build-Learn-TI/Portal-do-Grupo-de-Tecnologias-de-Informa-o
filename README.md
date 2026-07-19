# Build & Learn TI

Portal oficial da comunidade **Build & Learn TI**, criado para apresentar o grupo, centralizar materiais de aprendizagem, divulgar eventos e oportunidades e acompanhar projectos colaborativos na área das Tecnologias de Informação.

## Estado do projecto

O portal encontra-se em desenvolvimento na branch `dev`. A branch `main` mantém apenas a versão estável e aprovada.

Funcionalidades já presentes:

- Seis páginas HTML ligadas entre si;
- Layout responsivo com menu lateral e cabeçalho móvel;
- Modo claro e escuro;
- Página de materiais com categorias;
- Página de eventos e formações;
- Página de projectos e progresso;
- Formulário e canais de contacto;
- Logótipo centralizado na pasta `logo`.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Git e GitHub
- GitHub Pages, na fase de publicação

## Estrutura actual do projecto

```text
Portal-do-Grupo-de-Tecnologias-de-Informa-o/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug.md
│   │   └── tarefa.md
│   └── pull_request_template.md
├── assets/
│   ├── icons/
│   │   └── .gitkeep
│   └── images/
│       └── .gitkeep
├── logo/
│   └── logo.svg
├── Contacto.html
├── Eventos.html
├── Inicio.html
├── Materiais.html
├── Projectos.html
├── sobre.html
├── estilo-portal.css
├── script.js
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
└── README.md
```

## Páginas do portal

- `Inicio.html`: página inicial do portal;
- `sobre.html`: apresentação, valores, objectivos e equipa;
- `Materiais.html`: cursos e recursos de aprendizagem;
- `Eventos.html`: eventos, formações e oportunidades;
- `Projectos.html`: progresso e projectos da comunidade;
- `Contacto.html`: formulário e canais de contacto.

Todas as páginas utilizam:

```text
estilo-portal.css
script.js
logo/logo.svg
```

## Executar localmente

1. Clone o repositório;
2. Entre na pasta do projecto;
3. Abra `Inicio.html` no navegador.

Também pode ser utilizada uma extensão de servidor local, como Live Server, para testar navegação, caminhos e JavaScript.

## Equipa e responsabilidades

- **Coordenação Geral:** Cesarino Nhabangue
- **GitHub e Documentação:** Denzel Mbanze e Miguel Bento
- **Conteúdo e Pesquisa:** Khayllane Nyambir e Nicole Matimbe
- **Design/UI:** Kim Cleópatra e Mirafilda Gamboa
- **Front-end:** Lónel Vasco, Manuel Matsinhe e Soares Nhangave
- **Testes e Revisão:** Manuel G e Yannich Thay

## Fluxo de trabalho

- `main`: versão estável e publicada;
- `dev`: integração das funcionalidades aprovadas;
- `feature/nome-da-tarefa`: desenvolvimento de funcionalidades;
- `test/nome-do-teste`: testes e revisão;
- `chore/nome-da-tarefa`: configuração, documentação e publicação.

Cada membro deve trabalhar apenas na branch indicada na respectiva issue. Depois, deve abrir um Pull Request para `dev`. A branch `main` só recebe alterações testadas e aprovadas.

## Issues do projecto

1. Rever e completar a estrutura HTML da página inicial;
2. Rever e melhorar o CSS responsivo;
3. Rever apresentação, valores e objectivos;
4. Rever a secção de recursos de aprendizagem;
5. Rever eventos e oportunidades;
6. Completar as interacções com JavaScript;
7. Testar responsividade, acessibilidade e funcionamento;
8. Preparar e publicar no GitHub Pages.

## Convenção de commits

```text
feat: adicionar nova funcionalidade
fix: corrigir erro
style: ajustar apresentação visual
docs: actualizar documentação
test: adicionar ou executar testes
chore: configurar ferramentas ou publicação
```

## Publicação

Antes da publicação no GitHub Pages, será criado um `index.html` que encaminhe para `Inicio.html`, ou a página inicial será preparada como entrada oficial. O endereço público será adicionado aqui depois da publicação.

## Como contribuir

Consulte o ficheiro [`CONTRIBUTING.md`](CONTRIBUTING.md) antes de iniciar uma tarefa ou abrir um Pull Request.