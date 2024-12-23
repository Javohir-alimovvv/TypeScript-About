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
function sumNumber(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumNumber(7));
// #2
function sumBoolean(n) {
    return n ? 1 : 0;
}
console.log(sumBoolean(false));
// #3
function sumString(str) {
    return str.slice(0, 2);
}
console.log(sumString("laylo"));
// #4
function sumNum(num) {
    var result = Math.floor(num + 2);
    return result;
}
console.log(sumNum(5.5));
// #5
function createStr(str) {
    var result = str + 1;
    var strnum = result.toString();
    return strnum;
}
console.log(createStr(5));
// #6
function textLength(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
textLength("salom");
// #7
function munfiyMusbat(num) {
    for (var i = num; i >= num - (num + num); i--) {
        console.log(i);
    }
}
munfiyMusbat(2);
// #8
function raqam(n) {
    if (n === 1)
        return true;
    if (n === 0)
        return false;
    return raqam(n - 2);
}
console.log(raqam(2));
// #9
function nameMilat(name, milati) {
    return "My name is ".concat(name, ". I'm ").concat(milati);
}
console.log(nameMilat("Dilshod", "uzbek"));
