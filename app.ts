// let a: number = 5
// let str: string = "HELLO TYPESCRIPT"
// let bool: boolean = true
// let empty: undefined = undefined
// let user: null = null

// let numbers: number[] = [10,20]

// interface CarType {
//     title: string,
//     price: number
// }

// const car: CarType = {
//     title: "Dilshod",
//     price: 30_000
// } 



// console.log(a)
// console.log(str)
// console.log(bool)
// console.log(empty)
// console.log(user)
// console.log(numbers)
// console.log(car);


// #1

function sumNumber(n: number): number {
    let sum = 0

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}

console.log(sumNumber(7))


// #2

function sumBoolean(n: boolean): number {
    return n ? 1 : 0
}

console.log(sumBoolean(false))


// #3


function sumString(str: string): string {
    return str.slice(0, 2)
}

console.log(sumString("laylo"));

// #4

function sumNum(num: number): number {
    let result: number = Math.floor(num + 2) 
    return result
}

console.log(sumNum(5.5));


// #5

function createStr(str: number): string {
    let result: number = str + 1
    let strnum: string = result.toString()
    return strnum
}
console.log(createStr(5));


// #6

function textLength(str: string): void {
    for (let i: number = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

textLength("salom")


// #7

function munfiyMusbat(num: number): void {

    for (let i = num; i >= num - (num + num); i--) {
        console.log(i);
    }
}

munfiyMusbat(2)


// #8

function raqam(n: number): boolean {
    if (n === 1) return true
    if (n === 0) return false
    return raqam(n - 2)
}
console.log(raqam(2))

// #9

function nameMilat(name: string, milati: string): string {
    return `My name is ${name}. I'm ${milati}`
}
console.log(nameMilat("Dilshod", "uzbek"));

