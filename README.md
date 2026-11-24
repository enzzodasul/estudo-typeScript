# 📘 TypeScript — Estudos e Práticas

Repositório dedicado aos estudos de **TypeScript**, reunindo conteúdos teóricos, exercícios práticos, desafios e projetos desenvolvidos durante o módulo do curso de formação Full Stack.

O objetivo é consolidar os fundamentos da linguagem, aprofundar conceitos de tipagem e orientação a objetos e desenvolver aplicações práticas, aplicando boas práticas de programação.

## 🎯 Objetivos

- Compreender os fundamentos do TypeScript.
- Trabalhar com variáveis, funções e tipagem estática.
- Aprender desestruturação e Generics.
- Compreender classes e os princípios de orientação a objetos.
- Aplicar encapsulamento e modificadores de acesso.
- Desenvolver aplicações práticas utilizando TypeScript.
- Resolver questões técnicas e desafios de recrutamento.

## 📥 Introdução e Instalação

Para começar a trabalhar com TypeScript, é necessário ter o Node.js instalado, pois ele disponibiliza o ambiente de execução e o gerenciador de pacotes NPM.

### 1. Downloads oficiais

| Ferramenta         | Link                                    |
| ------------------ | --------------------------------------- |
| Node.js            | https://nodejs.org/en/download          |
| TypeScript         | https://www.typescriptlang.org/download |
| Visual Studio Code | https://code.visualstudio.com/          |

**Importante:** ao instalar o Node.js, o NPM também será instalado automaticamente.

### 2. Verificar a instalação

Abra o CMD (Prompt de Comando) do Windows ou o terminal do VS Code e execute:

Verificar a versão do Node.js:

```bash
node -v
```

Verificar a versão do NPM:

```bash
npm -v
```

Se os comandos retornarem os números das versões instaladas, o ambiente está pronto para a instalação do TypeScript.

### 3. Instalar TypeScript globalmente

Execute o seguinte comando no CMD:

```bash
npm install -g typescript
```

O parâmetro `-g` significa instalação global, permitindo utilizar o compilador TypeScript em diferentes diretórios do computador.

### 4. Verificar a instalação do TypeScript

Após concluir a instalação, execute:

```bash
tsc --version
```

Para consultar os comandos disponíveis:

```bash
tsc --help
```

### 5. Criar um projeto TypeScript

Crie uma pasta para o projeto e acesse seu diretório:

```bash
mkdir meu-projeto-typescript
cd meu-projeto-typescript
```

Inicialize o projeto Node.js:

```bash
npm init -y
```

Instale o TypeScript como dependência de desenvolvimento:

```bash
npm install -D typescript
```

Crie o arquivo de configuração do TypeScript:

```bash
npx tsc --init
```

Esse comando gera o arquivo `tsconfig.json`, responsável por configurar o comportamento do compilador TypeScript.

### 6. Primeiro arquivo TypeScript

Crie um arquivo chamado `index.ts`:

```typescript
const mensagem: string = 'Olá, TypeScript!';

console.log(mensagem);
```

Compile o arquivo utilizando:

```bash
npx tsc
```

O compilador transforma o arquivo TypeScript em JavaScript.

Para executar o arquivo gerado:

```bash
node index.js
```

### 7. Comandos úteis do TypeScript

| Comando                     | Descrição                             |
| --------------------------- | ------------------------------------- |
| `tsc --version`             | Verifica a versão instalada           |
| `tsc --help`                | Exibe a ajuda do compilador           |
| `tsc index.ts`              | Compila um arquivo específico         |
| `npx tsc`                   | Compila o projeto conforme o tsconfig |
| `npx tsc --init`            | Cria o arquivo tsconfig.json          |
| `npx tsc --watch`           | Monitora alterações e recompila       |
| `npm install -g typescript` | Instala TypeScript globalmente        |
| `npm install -D typescript` | Instala TypeScript no projeto         |
| `npm uninstall typescript`  | Remove a dependência local            |
| `npm list typescript`       | Exibe a versão local instalada        |

**Observação:** para projetos reais, prefira a instalação local com `npm install -D typescript`, pois ela permite manter uma versão específica do compilador em cada projeto.

## 📚 Conteúdo Programático

| Aula | Conteúdo                             |
| ---- | ------------------------------------ |
| 01   | Introdução                           |
| 02   | Variáveis                            |
| 03   | Funções                              |
| 04   | Prática I — Sistema de E-commerce    |
| 05   | Desestruturação                      |
| 06   | Generics                             |
| 07   | Introdução às Classes                |
| 08   | Prática II — Sistema de E-commerce   |
| 09   | Encapsulamento de Dados              |
| 10   | Classes (Get e Set)                  |
| 11   | Classes (Somente Leitura e Estático) |
| 12   | Questões de Recrutamento             |
| 13   | Prova de TypeScript                  |

## 🛠️ Tecnologias e Ferramentas

- **TypeScript** — Linguagem principal dos estudos.
- **JavaScript** — Base de comparação e compreensão dos conceitos.
- **Node.js** — Ambiente de execução.
- **NPM** — Gerenciador de pacotes.
- **Visual Studio Code** — Editor de código.
- **Git e GitHub** — Versionamento e organização dos estudos.

## 📂 Organização do Repositório

A organização será feita por aulas, mantendo cada conteúdo independente e facilitando a consulta e revisão dos exercícios.

typescript-estudos/
│
├── aula-01-introducao/
├── aula-02-variaveis/
├── aula-03-funcoes/
├── aula-04-pratica-ecommerce/
├── aula-05-desestruturacao/
├── aula-06-generics/
├── aula-07-introducao-classes/
├── aula-08-pratica-ecommerce/
├── aula-09-encapsulamento/
├── aula-10-get-set/
├── aula-11-readonly-static/
├── aula-12-questoes-recrutamento/
│
├── README.md
└── .gitignore

## 💡 Metodologia

Cada aula será organizada com foco na aprendizagem prática:

1. Estudo e compreensão do conteúdo.
2. Desenvolvimento de exemplos próprios.
3. Resolução dos exercícios propostos.
4. Aplicação dos conceitos em situações reais.
5. Organização e versionamento do código.

## 🚀 Objetivo Final

Concluir o módulo de TypeScript com domínio dos principais conceitos da linguagem, capacidade de desenvolver aplicações tipadas e maior segurança na construção de projetos Full Stack.

Este repositório representa a evolução contínua dos estudos, registrando a prática, o aprendizado e o desenvolvimento técnico ao longo da formação.

---

**📚 Formação Full Stack | Módulo TypeScript**

_Aprender, praticar, construir e evoluir._
