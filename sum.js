/*Entendendo sobre modulos.
Se eu instalo um framework ou uma biblioteca
eu consigo usar dentro do meu código como no caso do express
const express = require('express')

Além disso é possível usar arquivos de um arquivo em outro arquivo*/

// const person = {
//   name: "Henrique",
//   age: 32
// }

// module.exports = person // Deixando a const person disponível para utilização em outro arquivo.

function sum(firstNumber, seccondNumber) {
  return firstNumber + seccondNumber
}

module.exports = sum
