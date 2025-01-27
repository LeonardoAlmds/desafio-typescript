# Desafios em TypeScript

Este repositório contém uma série de desafios resolvidos utilizando a linguagem **TypeScript**. Cada desafio tem seu próprio arquivo, com o código-fonte em TypeScript e a versão compilada em JavaScript já disponível.

## Tecnologias Utilizadas

- **TypeScript (TS)**
- **Node.js**

## Como Rodar os Projetos

### Pré-requisitos

Antes de rodar os projetos, é necessário ter o **Node.js** e o **TypeScript** instalados em sua máquina:

1. **Instalar o Node.js**: Baixe e instale o Node.js a partir de [https://nodejs.org/](https://nodejs.org/).
2. **Instalar o TypeScript**: Para instalar o TypeScript globalmente, execute o comando abaixo no terminal:
   ```bash
   npm install -g typescript
   ```

### Instruções para Execução

Se quiser compilar o código TypeScript e rodar manualmente, siga os passos abaixo:

1. **Compile o arquivo TypeScript**:
   - Execute o comando:
     ```bash
     tsc nome-do-arquivo.ts
     ```
     Isso irá gerar um arquivo `.js` correspondente ao arquivo `.ts`.

2. **Execute o arquivo JavaScript gerado**:
   - Após a compilação, execute o arquivo com o comando:
     ```bash
     node nome-do-arquivo.js
     ```

### Como Rodar Diretamente

Para facilitar, os arquivos `.js` já estão prontos e podem ser executados diretamente. Basta rodar o seguinte comando:

```bash
node nome-do-arquivo.js
```

### Estrutura de Arquivos

- **nome-do-arquivo.ts**: Arquivo principal de cada desafio, em TypeScript.
- **nome-do-arquivo.js**: Arquivo JavaScript gerado após a compilação (já disponível para execução).
- **dados.json** (se houver): Arquivo contendo os dados de entrada para alguns dos desafios.