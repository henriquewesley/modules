/* 
THIS

this em inglês significa isso, este, esta...

No JavaScript, o this faz referência:

Node => module.exports
Web => window

Escopo:
  ==> Global -> Quando começamos a escrever nossa aplicação.
    No contexto global, o this faz referência ao obejto global,
    que é o objeto window no navegador de internet ou ao objeto global no Node.js.

  ==> Local -> Por exemplo, dentro de uma função!

const name = "Henrique" // Escopo global (A variavel name não está dentro de nada).

function myName() {
  const myName = "Henrique" // Escopo local (A variavel myName está dentro de uma função)
}

// Comandos para o ecossistema do Node.Js.
console.log(global) //Identificando tudo o que está dentro do escopo global.
global.console.log("Olá") //O console.log é um método do objeto global.

// Confirmação de que this é igual a module.exports

console.log(this === module.exports)
*/

const persona = {
  name: "Henrique",
  age: 32,
  talk: function () {
    console.log(this.name) //O this faz referência ao escopo local dentro do objeto.
    console.log(this.age) //O this faz referência ao escopo local dentro do objeto.
  }
}

persona.talk() //A função talk está dentro do objeto persona.

function myFunction() {
  this.console.log("Agora sou do escopo global") //O this faz referência ao escopo global.
}

myFunction()