// Task 1
const company = {
    sales: [{name: 'Dima', salary: 1000}, {name: "Alena", salary: 1900}],
    development: {
        sites: [{name: "Denis", salary: 1100}, {name: "Lera", salary: 500}],
        internals: [{name: 'Lesha', salary: 2000}, {name: "Olga", salary: 900}]
    }
}

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0)
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep)
        }
        return sum
    }
}

//console.log(sumSalaries(company))

// Task 2 Решение циклом
function sumTo(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log(sumTo(100))

// Решение с помощью рекурсии
function sumTo2(n) {
    if (n === 1) return 1
    return n + sumTo(n - 1)
}
console.log(sumTo2(100))

//Решение по формуле
function sumTo3(n) {
    return n * (n + 1) / 2
}
console.log(sumTo3(100))

// Task 2 Factorial число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1
function factorial (n) {
    return (n !== 1) ? n * factorial(n - 1) : 1
}
function factorial2 (n) {
    return n ? n * factorial(n - 1) : 1
}
console.log(factorial(4))
console.log(factorial2(4))

// Task 3 Fibbonache
function fib(n) {
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        b = c
    }
    return b;
}
console.log(fib(5))
console.log(fib(9))

// Task 4
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// цикл
function printList(list) {
    let elem = list
    while (elem) {
        console.log(elem.value)
        elem = elem.next
    }
}
console.log(printList(list))
// рекурсия
function printList2(list) {
   console.log(list.value)
    if (list.next) {
        printList(list.next)
    }
}
console.log(printList2(list))