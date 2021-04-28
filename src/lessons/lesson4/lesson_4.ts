console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

//Task 1
/*setTimeout( () => console.log(1),0) //макротаска
console.log(2); // асинхронно
( () => console.log(3))(); // самовызывающаяся
Promise.resolve(console.log(4));*/ //fulfill   //2341

//Task 2
/*new Promise( (res, rej) =>{
    console.log(1);
}) // синхронное выполнение кода
new Promise( (res, rej) => {
    setTimeout( () => console.log(2),0)
}) // макротаска 1
Promise.resolve(setTimeout( () => console.log(3),0)) // макротаска 2
console.log(4) // логично отрисуется
Promise.reject(console.log(5)); */  // 1 4 5 2 3

//Task 3
/*(function (){
    setTimeout( () => console.log(1),100)
})(); // макротаска
console.log(2); // выводится сразу
new Promise( (res,rej) => {
    setTimeout( () => console.log(3), 50)
}); // макротаска
function f() {
    console.log(4);
} // нигде не вызывается
Promise.resolve(console.log(5));*/  // 2 5 3 1

//Task 4
/*function f1 (num: number) {
    console.log(num);
} // объявление ф-ии
Promise.resolve(1)
    .then(f1); // случилась микротаска и в нее прокидывается колбэк
(function (){
    console.log(2);
})(); // самовызывающаяся
console.log(3); // синхроннно рисует
new Promise( (res,rej) => {
    console.log(4);
}); // синхронно выполняется код
setTimeout(f1,0,5);*/  // 2 3 4 1 5

//Task 5
/*console.log(1); // синхронно
function f2 () {
    console.log(2)
} // функция которая не вызванна
setTimeout( () => {
    console.log(3); // синхронно
    let p = new Promise( (res, rej) => {
        console.log(4);
        res();
    });
    p.then( () => f2())
}, 0); // макротаска
let l = new Promise( (res, rej) => {
    console.log(5);
    rej();
}); // создался промис - выводим его
l.then(res => console.log(res)).catch( () => console.log(6)); // обращение к промису - микротаска (выполняется первее чем макротаска)
console.log(7);*/     // 1 5 7 6 3 4 2

//Task 6
/*setTimeout( () => console.log(1),0); // макротаска
console.log(2); // синхронно
new Promise((resolve,reject) => {
    setTimeout( () => reject(console.log(3)),1000); // макротаска попадаем внутрь и выполняем reject
}).catch(() => console.log(4));
console.log(5) */  // 2 5 1 3 4

//Task 7
//before
// async function sleep(ms: number) {
//         setTimeout( () => {
//             console.log(ms);
//         }, ms * 100);
// }
/*async function sleep(ms: number) {
    return new Promise( res => {
        setTimeout( () => {
            console.log(ms);
            res();
        }, ms * 100);
    })
}
async function show() {
    await sleep(3)
    await sleep(2)
    await sleep(1)
}
show();*/

//Task 8
/*let pr1 = new Promise((res) => {
    res(10);
});
let pr2 = new Promise( (res) => {
    res(0);
});
pr1
    .then((res: any) => {
        console.log(res);
        return res + 2;
    }) // новый промис попадает в микротаску со значение 12
    .then((res: any) => {
        console.log(res);
        return res + 2;
    }) // pr1(12) + 2 = 14
    .then(console.log); // здесь больше ничего не создается и микротаски удаляются
pr2
    .then((res: any) => {
        console.log(res);
        return res + 1;
    }) // новый промис попадает в микротаску со значение 1
    .then((res: any) => {
        console.log(res);
        return res + 1;
    }) //pr2(1) + 1 = 2
    .then(console.log); */  //10 0 12 1 14 2


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const pr = new Promise((res, rej) => {
    console.log("Promise is created")
})

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const pr1 = new Promise(resolve => resolve("Promise Data"))
    .then(console.log)


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
const pr2 = new Promise((res, rej) => rej('Promise Error'))
    .catch(console.log);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
const pr3 = new Promise((res, rej) => {
    setTimeout(() => res('Promise Error4'), 3000)
})
pr3.then(console.log);


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.
type testObjType = {
    promise: null | Promise<any>;
    resolve: null | Function;
    reject: null | Function;
    onSuccess: (paramName: string) => void;
    onError: (paramName: string) => void;
}
const handlePromise: testObjType = {
    promise: null,
    reject: null,
    resolve: null,
    onSuccess: (paramName: string) => {
        console.log(`Promise is resolved with data: ${paramName}`);
    },
    onError: (paramName: string) => {
        console.log(`Promise is resolved with error: ${paramName}`)
    }
}
export const createPromise = () => {
    const somePromise: Promise<any> = new Promise((res, rej) => {
        handlePromise.reject = rej;
        handlePromise.resolve = res;
    });
    handlePromise.promise = somePromise;
    handlePromise.promise
        // .then(res => handlePromise.onSuccess(res))
        .then(handlePromise.onSuccess)
        // .catch(err => handlePromise.onError(err))
        .catch(handlePromise.onError)
}
// @ts-ignore
window.testObj = handlePromise

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve("True");
}
export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject("False");
}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
const pr6 = new Promise<string>((res, rej) => {
    setTimeout(() => res("My name is"), 1000)
})

function onSuccess(oneParam: string) {
    return `${oneParam} Dima`
}

function print(value: string) {
    console.log(value)
}

pr6
    //.then(res => print(onSuccess(res)))
    .then(res => onSuccess(res))
    .then(res => print(res))

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
let obj = {}
const pr7 = new Promise<{ name: string }>((res, rej) => {
    setTimeout(() => res({name: "Dima"}), 2000)
})
const pr8 = new Promise<{ age: number }>((res, rej) => {
    setTimeout(() => res({age: 32}), 3000)
})
const pr9 = new Promise<{ city: string }>((res, rej) => {
    setTimeout(() => res({city: "Minsk"}), 4000)
})
const p10All = Promise.all([pr7, pr8, pr9]);
p10All
    .then(data => {
        obj = {name: data[0].name, age: data[1].age, city: data[2].city}
        console.log(obj)
    })


// just a plug
export default () => {
};