// Example 1 "Call" аргументы передаются в виде списка
const user1 = {
    name: "Dima",
    age: 32,
    position: "FrontEnd Developer",
    level: "Junior+"
}
const user2 = {
    name: "Alena",
    age: 31,
    position: "QA Engineer",
    level: "Senior"
}
function getName() {
    const name = this.name
    console.log(name)
}
const result1 = getName.call(user1)
const result2 = getName.call(user2)
console.log(result1) // this (в теле функции getName) будет указывать на объект user1, у которого есть свойство name.
console.log(result2) // this (в теле функции getName) будет указывать на объект user2, у которого есть свойство name.

// Example 2
const junior = {
    name: "Alex",
    position: 'junior dev',
    salary: 500
}
const middle = {
    name: "Jon",
    position: 'middle dev',
    salary: 1000
}
const senior = {
    name: "German",
    position: 'senior dev',
    salary: 2000
}
function promote (position, salary) {
    this.salary = salary
    this.position = position
    return this.position + ' earns' + this.salary + ' dollars'
}
const res1 = promote.call(junior, 'super junior dev', 700)
const res2 = promote.call(middle, 'super middle dev', 1200)
const res3 = promote.call(senior, 'super junior dev', 2200)
console.log(res1)
console.log(res2)
console.log(res3)

// Apply похож на Call но аргументы передаются в массиве
const resA = promote.apply(junior, ['super junior dev', 700])
const resB = promote.apply(middle, ['super middle dev', 1200])
const resC = promote.apply(senior, ['super junior dev', 2200])
console.log(resA)
console.log(resB)
console.log(resC)

// Bind  этот метод позволяет выполнить отложенный вызов функции.
const resultA = promote.bind(junior)
const resultB = promote.bind(middle)
const resultC = promote.bind(senior)

const resultAA = resultA('super junior dev',700)
const resultBB = resultB('super middle dev',1200)
const resultCC = resultC('super senior dev',2200)

console.log(resultAA)
console.log(resultBB)
console.log(resultCC)