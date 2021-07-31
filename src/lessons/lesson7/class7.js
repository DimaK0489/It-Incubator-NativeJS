class Test {
    constructor(name) {
        this.name = name
    }
}
let test1Obj = new Test("Dima")
//console.log(testObj instanceof Test) //testObj является экземпляром class Test
//console.log(Object.getPrototypeOf(test1Obj) === Test.prototype) // ссылки на на объект равны


function TestConstructorFunc (name) {
    this.name = name;
}
TestConstructorFunc.prototype = function () {} //эта ф-ия появиться у всех экземпляров которые ссылаются на этот объект, возможно мутировать объект из любого места.
let testOdj = new TestConstructorFunc("Dima")
let testOdj2 = new testOdj.__proto__.constructor("Alena")
//console.log(testOdj2 instanceof TestConstructorFunc) // создан еще один экземпляр объекта в TestConstructorFunc не используя ф-ию
/*testOdj.__proto__.sayHi = function (){}*/
// эта ф-ия появиться у всех экземпляров которые ссылаются на этот объект, возможно мутировать объект из любого места. НО ТАК ДЕЛАТЬ НЕ СТОИТ


class TestingProto {
    constructor(name) {
        this.name = name
    }
}
// в классе нельзя изменить ссылку на сам объект через prototype, можно расширить но нельзя изменить(перзаписать),
// все изменения пиши внутри class
let objTP = new TestingProto("Mike")
// console.log(objTP)
// console.dir(TestingProto)

class Class extends TestingProto{
    constructor() {
        super("test");
    }
    sayBay(){};
}
let objClassNew = new Class("Volvo")
// console.dir(Class)
// console.log("obj", objClassNew)

// Task 05
// Используя метод Call реализовать свой собственный метод bind
Function.prototype._bind = function (context, ...args) {
    const _this = this
    return function (...args2){
        return _this.call(context, ...args, ...args2)
        //return _this.apply(context, [...args, ...args2])
    }
}
// function f() {
//
// }
// f()._bind()

Function.prototype._bind2 = function (context, ...args) {
    context.___bindFunc___ = this
    return function (...args2){
        return context.___bindFunc___(...args, ...args2)
    }
}
let obgF = {
    name: "Dima",
    sayName: function (a,b) {
        console.log('this name', this.name, a,b)
    }
}
let objD = {
    name: "Alena"
}
let objC = {
    name: "Denis"
}
let result = obgF.sayName._bind(objD, 100).bind(objC, 500)
console.log(result())