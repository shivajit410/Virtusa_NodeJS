const prompt = require("prompt-sync")();

const string1 = prompt("Enter first string: ");
const string2 = prompt("Enter second string: ");

let op1 = []
for(let x of string1){
    if(string2.includes(x)){
        continue
    } else {
        op1.push(x)
    }
}

let op2 = []
for(let x of string2){
    if(string1.includes(x)){
        continue
    } else {
        op2.push(x)
    }
}

op1 = op1.join('').toUpperCase()
op2 = op2.join('').toUpperCase()

console.log('Result OP1: ', op1)
console.log('Result OP2: ', op2)