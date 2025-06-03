/* Esse bloco faz parte da explicação de exportação e importação.

const person = require('./sum') //Importando com require a const person do arquivo sum.
const multi = require('./sum') //O requerimento sem o deixar disponível não permite a utilização.

console.log(person) //Confirmando se funcionou a importação.
console.log(multi(2, 3)) //Além de mostrar a multiplicação, eu preciso indicar quais números eu quero que ele faça a operação.

//Importando as funções sum e multi de outros arquivos

const sum = require('./sum')
const multi = require('./multi')

console.log(sum(2, 3))
console.log(multi(2, 3))

//Agora importando todas as funções de um arquivo

const { sum, multi, person } = require('./allfunctions') //Desta forma você tem que colocar o nome correto da função.
console.log(sum(2, 3))
console.log(multi(2, 3))
console.log(person)

//Ou podemos importar de outra forma

const allfunctions = require('./allfunctions')
console.log(allfunctions.sum(2, 3))
console.log(allfunctions.multi(2, 3))
console.log(allfunctions.person)
*/

//Importando de outro arquivo usando o this

const person = require('./allfunctions')
console.log(person)