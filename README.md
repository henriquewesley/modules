# Explorando Módulos Node.js: Exportação e Importação (CommonJS)

Este repositório demonstra diferentes maneiras de organizar e reutilizar código em Node.js utilizando o sistema de módulos CommonJS, padrão do Node.js antes da introdução dos ES Modules. O foco está nas formas de exportar funcionalidades de um arquivo (`module.exports`) e importá-las em outro (`require`).

## Objetivo

O código neste repositório ilustra:

1.  Como exportar uma única função ou valor de um módulo.
2.  Como exportar múltiplos valores (funções, objetos, etc.) de um único módulo.
3.  Diferentes formas de importar e utilizar esses módulos exportados em outro arquivo.

## Estrutura do Projeto

*   `sum.js`: Define e exporta uma função `sum`.
*   `multi.js`: Define e exporta uma função `multi`.
*   `allfunctions.js`: Define as funções `sum`, `multi` e um objeto `person`, exportando todos eles juntos.
*   `index.js`: Arquivo principal que importa e utiliza as funcionalidades dos outros módulos.

## Conceitos Demonstrados

### 1. Exportando um Único Valor (`module.exports = valor`)

Os arquivos `sum.js` e `multi.js` demonstram como exportar uma única entidade (neste caso, uma função). Qualquer valor (função, objeto, string, número) pode ser atribuído diretamente a `module.exports`.

**Exemplo (`sum.js`):**
```javascript
function sum(firstNumber, seccondNumber) {
  return firstNumber + seccondNumber;
}

module.exports = sum; // Exporta diretamente a função sum
```

### 2. Exportando Múltiplos Valores (`module.exports = { chave1: valor1, chave2: valor2 }`)

O arquivo `allfunctions.js` mostra como exportar várias funcionalidades de uma vez. Isso é feito atribuindo um objeto a `module.exports`, onde cada chave do objeto representa um nome de exportação e seu valor é a funcionalidade correspondente.

**Exemplo (`allfunctions.js`):**
```javascript
function sum(firstNumber, seccondNumber) { /* ... */ }
function multi(firstNumber, seccondNumber) { /* ... */ }
const person = { name: "Henrique", age: 32 };

// Exporta um objeto contendo as funções e o objeto person
module.exports = { sum, multi, person };
```

### 3. Importando Módulos (`require`)

O arquivo `index.js` utiliza a função `require()` para importar os módulos.

*   **Importando um único export:** Quando um módulo exporta um único valor (como `sum.js`), o `require` retorna esse valor diretamente.
    ```javascript
    // Em index.js (exemplo conceitual baseado nos arquivos individuais)
    // const sum = require('./sum');
    // const multi = require('./multi');
    // console.log(sum(2, 3)); // Usa a função importada
    ```

*   **Importando múltiplos exports (Desestruturação):** Quando um módulo exporta um objeto com várias propriedades (como `allfunctions.js`), podemos usar a desestruturação do ES6 para importar apenas as partes que precisamos.
    ```javascript
    // Em index.js
    const { sum, multi, person } = require('./allfunctions');
    console.log(sum(2, 3));
    console.log(multi(2, 3));
    console.log(person);
    ```

*   **Importando o objeto de exports completo:** Alternativamente, podemos importar o objeto inteiro exportado pelo módulo e acessar suas propriedades.
    ```javascript
    // Em index.js
    const allfunctions = require('./allfunctions');
    console.log(allfunctions.sum(2, 3));
    console.log(allfunctions.multi(2, 3));
    console.log(allfunctions.person);
    ```

## Como Executar

Para ver os resultados das importações e execuções, certifique-se de ter o Node.js instalado e execute o arquivo principal no terminal:

```bash
node index.js
```

## Conclusão

Compreender como exportar e importar módulos é fundamental para escrever código Node.js organizado, reutilizável e de fácil manutenção. Este repositório oferece exemplos práticos das abordagens mais comuns usando o sistema CommonJS.
