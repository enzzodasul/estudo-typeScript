# Curso TypeScript

Repositório destinado aos estudos e práticas do curso de TypeScript.

## Compilando um arquivo TypeScript

Para transformar um arquivo TypeScript (`.ts`) em JavaScript (`.js`), utilizamos o **TypeScript Compiler (`tsc`)**.

```bash
tsc ./index.ts
```

Esse comando pega o arquivo `index.ts` e gera o arquivo `index.js`.

### Executando o JavaScript

Depois de compilar o arquivo TypeScript, podemos executar o JavaScript utilizando o **Node.js**:

```bash
node index.js
```

O comando `node` executa o código JavaScript presente no arquivo `index.js`.

## Resumo dos comandos

| Comando          | Função                                   |
| ---------------- | ---------------------------------------- |
| `tsc ./index.ts` | Compila o TypeScript e gera o JavaScript |
| `node index.js`  | Executa o arquivo JavaScript com Node.js |

## Fluxo

```text
index.ts
   ↓
tsc ./index.ts
   ↓
index.js
   ↓
node index.js
   ↓
Código executado
```

## Estrutura básica

```text
curso-typescript/
├── index.ts
├── index.js
└── README.md
```
