// Example 1
function sum(a, b, c) {
    return a + b + c
}
console.log(sum(4,4,4))

//каррирование
function sum2(a){
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum2(4)(4)(2))

// Example 2
function discount (price, discount) {
    return price * discount
}
console.log(discount(500,0.10))

// каррирование скидка 10%
function discount2 (skidka) {
    return (price) => {
        return price * skidka
    }
}
const tenPercentDiscount10 = discount2(0.10)
const tenPercentDiscount20 = discount2(0.20)
console.log(tenPercentDiscount10(1000))
console.log(tenPercentDiscount20(700))
