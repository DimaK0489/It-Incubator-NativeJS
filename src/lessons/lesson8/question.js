//Task 1
/*var a = 50
function f() {
    a = 100
    let b = 150
}
if (true) {
    a = 175
    let c = 200
    var d = 300
    const e = 400
}
f();
console.log(a)
console.log(b) // будет ошибка и дальше все log не выведутся
console.log(c)
console.log(d)
console.log(e)*/

//Task 2
/*let a = 5
{ a = 10 } // "анонимный код" нет области видимости , поэтому перезапишет с 5 на 10
console.log(a)// => 10
function f2() {
    console.log(a)
    a = 20
    var b = 20
}
console.log(b) // error, и до ф-ии даже не дайдет
f2()
console.log(a) */

//Task 3
/*{
    let c = 100
    var family = 'it-incubator'
    function f() {
        console.log(c)
    }
}
let doc = false
if (!doc){
    function c() {
        console.log(family)
    }
}
f() //100
c() // 'it-incubator'
console.log(family) // 'it-incubator'
console.log(c) // function*/

//Task 3
/*let car1 = new Promise((_, reject) => setTimeout(reject, 2000, 'Car 1 crashed in'))
let car2 = new Promise((resolve) => setTimeout(resolve, 1500, 'Car 2 completed'))
let car3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Car 3 completed'))
Promise.race([car1, car2, car3])
    .then(value => {
        let res = `${value} the race.`
        console.log(res)
    })
    .catch(err => console.log('Race is canceled', err))
// car 2 - так как все это макротаски, а метод race выведет первый промис который resolve & reject*/

//Task 4
/*
console.log('start')
Promise.resolve('Success')
    .then(console.log)
console.log('End')
// start синхронно
// End синхронно
// Success микротаска*/

//Task 5
/*setCurrentUrl();
console.log('The current Url is: ' + url)
function setCurrentUrl() {
    url = window.location.href
} // вытягивает url браузера на котором работаешь */

//Task 6
// Какие ключи будут заполенены у pet1
function Animal(size, type) {
    this.type = type || 'Animal';
    this.canTalk = false;
}
Animal.prototype.speak = function () {
    if(this.canTalk) {
        console.log('It spoke')
    }
}
let Pet = function (size, type, name, owner) {
    Animal.call(this, size, type);
    this.size = size;
    this.name = name;
    this.owner = owner;
}
Pet.prototype = Object.create(Animal.prototype)
let pet1 = new Pet();
//console.log(pet1)

//Task 7
let array = [1,2,3,4,4,5,4,4]
for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
        array.splice(i,1)
    }
}
//console.log(array) // удалит из массива лишние 4ки

//Task 8
let first = 'Who'
let second = 'What'
try {
    try {
        throw new Error('Sad trombone')
    } catch (err) {
        first = 'Why';
        throw err;
    } finally {
        second = 'When'
    }
} catch (err) {
    second = 'Where'
}
// console.log(first)
// console.log(second)
// Why
// Where

//Task 9
/*setTimeout(() => console.log(1),0)
console.log(2);
new Promise((res,rej) => {
    setTimeout(() => rej(console.log(3),1000))
}).catch(() => console.log(4))
console.log(5);
// 2,5,1,3,4*/

//Task 10
let date = new Date(2021,7,1)
let dateDisplayOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
let formattedDate = date.toLocaleDateString('en', dateDisplayOptions);
//console.log(formattedDate) // August 1,2021

//Task 11
let objBook = {title: "JS"}
Object.preventExtensions(objBook) // метод запрещает добавлять новые свойства объекту
let newObjBook = objBook
newObjBook.author = "Robert";
//console.log(objBook) // JS
//console.log(newObjBook) // JS

//Task 12
function getAvaliabilityMessage(item) {
    if (getAvaliabilityMessage(item)) {
        var msg = 'Username avaliable'
    }
    return msg
}
function getAvailability (name) {
    return name === 'Dima'
}
//console.log('getAvaliabilityMessage', getAvaliabilityMessage('newUser'))
// undefined 'newUser' не равно "Dima"

//Task 13
const entries = []
entries.push("a")
entries.push("b","c") //push возвращает новую длину массива
//console.log(entries.pop()); // удалит последней индекс

//Task 14
let entries2 = ['a',1,true]
//console.log(entries instanceof Array) //true , instanceof сравнивает ссылки constructor

//Task 15
const entries3 = ["a", "b", "c"]
entries3.length = 10
//console.log(entries3.length) //перезаписали длину массива и он заполнился пустыми значениями

//Task 16
const ratings = [1,2,3,4,5]
const result = ratings.reduce((start,next,index,array) => start * next)
//console.log(result) //120 умножит все значения по порядку

//Task 17
const priority = [,,];
for (const item of priority) {
    //console.log(item)
} // последняя запетая в массиве скипуется и выведет 2 undefined, движок примет последнюю запятую как ошибку

//Task 18
const entries4 = ['a','b','c']
const newEntries = entries4.concat(['d','e','f'],'g','h')
//console.log(newEntries.length) // добавит все элементы в массив, работает быстрее чем ...

//Task 19
const priority2 = ['low', 'Normal', 'High']
const [low, ...remaining] = priority2
//console.log(remaining) //достаем первый элемент и в ЛОГ выводим остальные

//Task 20
let task = {isDone: false};
//console.log(Object.prototype.isPrototypeOf(task))

//Task 21
let task1 = {id: 1};
let task2 = {id: 2, num: 100};
let target = {}
Object.assign(target, task1, task2)
//console.log(target) //склеит в один объект {id: 2, num: 100}

//Task 22
let tasks = {
    isDone: true,
    estHours: 16
}
let anotherTask = tasks // anotherTask хранится ссылка на объект tasks
//console.log(anotherTask.isDone) // все очевидно

//Task 23
class Task {
    constructor(id=2) {
        //console.log('Constructing Task')
        this.taskId = id
    }
    showId() {
        console.log(this.taskId)
    }
}
let taskNew = new Task();
//taskNew.showId() // наследование, через него получаем доступ к методу который выводит id

//Task 24
let sum = function () {
    let x = 0;
    [...arguments].forEach((arg) => {
        x += arg
    })
    return x;
}
//console.log(sum(1,2,3)) // [...arguments]-псевдомассив

//Task 25
function square(x,y) {
    //console.log(x * y);
} // перемножиться
let v = square(2,3) // нет return значит будет undefined
//console.log(v)

//Task 26
let person = {
    firstName: "Alena",
    lastName: "Dima"
}
function showFullName() {
    console.log(`${this.firstName} ${this.lastName}`)
}
//showFullName.call(person) // вызывыем ф-ию с контекстом person, this = person и достанет свойства

//Task 27
uniqueInteger.count = 0;
function uniqueInteger() {
    return uniqueInteger.count++
}
//console.log(uniqueInteger()) //0
//console.log(uniqueInteger()) //1

//Task 28
var callback = function (x) {
    console.log(x)
}
var callAClosure = function (closure) {
    closure(10)
} // ф-ия принимает колбэк и делает его вызов
//callAClosure(callback)

//Task 29
let taskOne = {
    id: 123,
    done: function () {
        return () => console.log(this.id)
    }
};
let anotherTasks = {
    id: 987
}
//taskOne.done().bind(anotherTasks)(); // стрелочные ф-ий нет bind  - 123

//Task 30
// let obj = {
//     a: 0,
// }
let obj = {
    param: 0,
    get a () {
        return this.param++;
    }
}
if (obj.a === 0 && obj.a === 1 && obj.a === 2){
    //console.log('Work')
}

//Task 31
let objt = {a: 1};
let objt2 = Object.create(objt)
console.log(objt2.hasOwnProperty('a'))
objt2.a += 1;
console.log(objt2.hasOwnProperty('a'))