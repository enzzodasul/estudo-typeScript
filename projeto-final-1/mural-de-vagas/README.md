# 💼 Mural de Vagas Dev

Uma aplicação web para visualizar, pesquisar e filtrar oportunidades de emprego na área de tecnologia, desenvolvida com **TypeScript, HTML5 e CSS3**.

O projeto simula um mural de oportunidades profissionais, permitindo encontrar vagas por área de atuação, modalidade de trabalho e empresa, além de salvar oportunidades favoritas.

---

## 🚀 Sobre o Projeto

O **Mural de Vagas Dev** foi desenvolvido como projeto final do módulo de TypeScript, com o objetivo de aplicar na prática conceitos de tipagem estática, interfaces, tipos personalizados, módulos, funções e manipulação do DOM.

A aplicação apresenta uma interface moderna com tema escuro e identidade visual em tons de roxo, organizando as oportunidades em cards interativos.

## ✨ Funcionalidades

- 🔎 **Busca de vagas:** pesquisa por título da vaga ou nome da empresa.
- 🖥️ **Filtro por área:** Frontend, Backend, Data Science e FullStack.
- 🏢 **Filtro por modalidade:** Remota, Presencial e Híbrida.
- ⭐ **Sistema de favoritos:** permite adicionar e remover vagas favoritas.
- 💾 **Persistência de favoritos:** utiliza LocalStorage para manter os favoritos salvos no navegador.
- 📊 **Contadores por área:** apresenta a quantidade de oportunidades em cada categoria.
- 💰 **Formatação de salários:** exibe valores no padrão monetário brasileiro (BRL).
- 📅 **Datas de publicação:** apresenta informações sobre quando as vagas foram publicadas.
- 📱 **Layout responsivo:** adaptação para diferentes tamanhos de tela.
- 🔄 **Carregamento de dados:** utiliza Fetch API para buscar as oportunidades em um arquivo JSON.

## 🛠️ Tecnologias Utilizadas

| Tecnologia            | Aplicação                              |
| --------------------- | -------------------------------------- |
| TypeScript            | Tipagem estática e lógica da aplicação |
| HTML5                 | Estrutura da página                    |
| CSS3                  | Estilização e responsividade           |
| Vite                  | Servidor de desenvolvimento            |
| JavaScript ES Modules | Organização e importação de módulos    |
| Fetch API             | Carregamento dos dados JSON            |
| LocalStorage          | Persistência dos favoritos             |

## 📂 Estrutura do Projeto

```text
mural-de-vagas/
│
├── public/
│   └── vagas.json
│
├── src/
│   ├── api.ts
│   ├── favoritos.ts
│   ├── filtros.ts
│   ├── main.ts
│   ├── render.ts
│   ├── style.css
│   └── tipos.ts
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 📋 Organização dos Arquivos

| Arquivo        | Responsabilidade                                    |
| -------------- | --------------------------------------------------- |
| `api.ts`       | Busca os dados das vagas no JSON.                   |
| `favoritos.ts` | Gerencia os favoritos utilizando LocalStorage.      |
| `filtros.ts`   | Aplica os critérios de pesquisa e filtragem.        |
| `main.ts`      | Controla a inicialização e integração da aplicação. |
| `render.ts`    | Responsável pela criação e renderização dos cards.  |
| `style.css`    | Define o design visual e a responsividade.          |
| `tipos.ts`     | Define interfaces, tipos e categorias da aplicação. |
| `vagas.json`   | Armazena os dados das oportunidades profissionais.  |

## ⚙️ Como Executar o Projeto

### 1. Pré-requisitos

Certifique-se de ter instalado:

- Node.js
- npm
- Visual Studio Code (recomendado)

### 2. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 3. Entre na pasta do projeto

```bash
cd mural-de-vagas
```

### 4. Instale as dependências

```bash
npm install
```

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 6. Acesse no navegador

```text
http://localhost:5173/
```

## 🧩 Conceitos de TypeScript Aplicados

Durante o desenvolvimento foram utilizados conceitos fundamentais da linguagem:

- **Types:** criação de tipos personalizados para áreas e modalidades.
- **Interfaces:** definição da estrutura dos objetos de vagas.
- **Type Aliases:** organização de tipos reutilizáveis.
- **Readonly:** proteção de propriedades que não devem ser modificadas.
- **Optional Properties:** utilização de propriedades opcionais.
- **Generics:** reutilização de funções com diferentes tipos de dados.
- **Type Assertions:** conversão de tipos quando necessário.
- **Modules:** organização do código em arquivos independentes.
- **DOM Manipulation:** interação com elementos HTML.
- **Async/Await:** carregamento assíncrono de dados.
- **Event Listeners:** tratamento das interações do usuário.

## 🎯 Objetivo Educacional

Este projeto tem como objetivo consolidar os conhecimentos adquiridos no estudo de TypeScript, demonstrando como estruturar uma aplicação frontend modular, organizada e funcional.

Também permite compreender como diferentes arquivos e responsabilidades podem trabalhar juntos para construir uma aplicação web completa.

## 👨‍💻 Autor

Desenvolvido como projeto final do curso **Desenvolvedor Web Fullstack I (2026)**.

**Tecnologias:** TypeScript | HTML5 | CSS3 | Vite

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!
