/* let varName = "Roxana";

console.log("Hello " + varName);

let temp = -10;

if (temp <= 0) {
    console.log("Afara este frig");
}  else {
    console.log("Afara este cald");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}  

function funcName(message, value2) {
    console.log("Function work properly " + message);
    alert("It's a function " + value2);
}

let message = "Test"
funcName(message, "Value 2"); 


function myFunction(value) {
    if (value < 25) {
        alert("Less than need");
    } else if (value == 25) {
        alert("You win");
    } else {
        alert("More than need");
    }
}
myFunction(25); 

let global = 3;

function calculator(a, b) {
    let local = a + b + global;
    return global;
}

console.log(global);

let result = calculator(3, 4);
console.log(result); 

function mainFunction(operation, a, b){
    if (operation == "plus") {
        result1 = a + b;
        console.log(result1);
    } else if (operation == "minus") {
        result2 = a - b;
        console.log(result2);
    } else if (operation == "multiply") {
        result3 = a * b;
        console.log(result3);
    } else if (operation == "div") {
        result4 = a / b;
        console.log(result4);
    }
}
mainFunction("div", 10, 2);  


function calcPlus(a, b) {
    return a + b;
}
function calcMinus(a, b) {
    return a - b;
}
function calcMulti(a, b) {
    return a * b;
}
function calcDiv(a, b) {
    return a / b;
}

function mainFunction(operation, a, b) {
    if (operation == "+") {
        result1 = calcPlus(a, b);
        console.log(result1);
    } else if (operation == "-") {
        result2 = calcMinus (a, b);
        console.log(result2);
    } else if (operation == "*") {
        result3 = calcMulti(a, b);
        console.log(result3);
    } else if (operation == "/") {
        result4 = calcDiv(a, b);
        console.log(result4);
    }
}

mainFunction("/", 10, 5); */










/* let EmptyArray = [];
let ArrayWithValue =["Red", "Green", "Blue"];

console.log(ArrayWithValue);
console.log(" ");

console.log(ArrayWithValue[0]);
console.log(ArrayWithValue[1]);
console.log(ArrayWithValue[2]);
console.log(" ");

console.log(ArrayWithValue.length);
console.log(" ");

for (let i = 0; i < ArrayWithValue.length; i++) {
    console.log(ArrayWithValue[i]);
}
console.log(" ");

for (let element of ArrayWithValue) {
    console.log(element);
} 


let array = [1];
array.push(2); // add smth in the end of array
array.unshift(0); // add smth in the begining of array
array.pop(); // delete last element
array.shift(); // delete first element

console.log(array); */


let bidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(bidimensional[2][0]);

for (let i = 0; i < bidimensional.length; i++) {
    for(let j = 0; j < bidimensional.length; j++) {
        console.log(bidimensional[i][j]);
    }
}