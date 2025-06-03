function sum(firstNumber, seccondNumber) {
  return firstNumber + seccondNumber
}

function multi(firstNumber, seccondNumber) {
  return firstNumber * seccondNumber
}

const person = {
  name: "Henrique",
  age: 32
}

module.exports = { sum, multi, person } //Exportando mais de uma função.
this.person = person //Exportando a const person.