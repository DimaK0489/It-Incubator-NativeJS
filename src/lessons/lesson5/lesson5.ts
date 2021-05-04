console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

// Example 1
/*function f() {
    console.log("this from FD", this)
}
let arrow = () => {
    console.log("this from arrow", this)
}
f();
arrow();
let obj = {
    name: "Dima",
    f,
    arrow
}
obj.f();
obj.arrow();*/

// Example 2
/*let obj = {
    name: "Dima",
    f() {
        console.log("this from FD", this);
    },
    arrow: () => {
        console.log("this from arrow", this)
    }
}
obj.f();
obj.arrow();*/

// Example 3
/*let obj = {
    name: "Dima",
    f() {
        console.log("this from FD", this);
        let test = () => {
            console.log("this from arrow", this)
        };
        return test;
    },
}
let someFC = obj.f();
someFC();*/
/*let obj2 = {
    name: "Alena",
    f() {
        console.log("this from FD", this);
        function test () {
            console.log("this from arrow", this)
        };
        return test;
    },
}
let someFC2 = obj2.f();
someFC2();*/

// Example 4
/*let obj = {
    name: "Dima",
    f() {
        console.log("this from FD", this);
        function test () {
            console.log("this from arrow", this)
        };
        return test;
    },
}
let obj2 = {
    name: "Alena"
}
obj2.f = obj.f();
obj2.f();*/

/*let obj = {
    name: "Dima",
    f() {
        console.log(this.name);
        let  test = () => {
            console.log(this.age)
        };
        return test;
    },
    age: 32,
}
let obj2 = {
    name: "Alena"
}
obj2.f = obj.f();
obj2.f();*/

// Example 5
/*let obj = {
    name: "Dima",
    f () {
        setTimeout(function (){
            console.log(this);
        },0)
    },
    arrow: () => {
        setTimeout(function (){
            console.log(this)
        },0)
    }
}
obj.f();
obj.arrow();*/

// Example 6
/*let obj = {
    name: "Dima",
    f () {
        return () => {
            setTimeout(function () {
                console.log(this);
            },0)
        }
    }
}
obj2.f = obj.f();
obj2.f();*/

/*let obj1 = {
    name: "Dima",
    f () {
        return () => {
            setTimeout( () => {
                console.log(this);
            },0)
        }
    }
}
let obj3 = {
    name: "Alena"
}
obj3.f = obj1.f();
obj3.f();*/

//Function methods
/*let obj = {
    name: 'Dima',
    f() {
        console.log(this.name)
    },
}
let obj2 = {
    name: 'Alena'
}
obj.f();
// @ts-ignore
//obj2.f = obj.f.bind(obj); // bind возвращает другую(новую) ф-ию
obj2.f = obj.f
// @ts-ignore
obj2.f.call(obj);
//obj2.f.apply(obj);*/

/*let obj1 = {
    name: 'Dima',
    f(arg1: any, arg2: any) {
        console.log(this.name, arg1, arg2)
    },
}
let obj3 = {
    name: 'Alena'
}
// @ts-ignore
//obj1.f(10,20);
/!*let test = obj1.f.bind(obj3, 0);
// @ts-ignore
test(50);*!/
obj1.f.call(obj3, 1,2);
obj1.f.apply(obj3, [1,2]);*/




// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
}

let someObj: someObjType = {
    name: 'Eugene',
    age: 32
}

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {
    name: 'Two', sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a: number, b: number): number {
    return a + b
};
function bindNum(f: Function, n: number) {
    return f.bind(null, n)
}
let bindTen = bindNum(sumTwoNumbers, 10);

console.log(bindTen(10));
console.log(bindTen(5));
/*function f(a: number) {
    return function (b: number){
        return a + b;
    }
} // замыкание*/

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call


// just a plug
export default () => {
};