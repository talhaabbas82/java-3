// assignment no 1 if value is bigger than 100 or less;

let value = prompt("the value is greater than 100 or less");
if (value>100){
    console.log("the value is greater than 100.");
}else if (value<100){
    console.log("this value is less than 100.");
} else {
    console.log("this value is exactly 100.");
}

// assignment no 2 check which user value is (first vs second);

let first = prompt("enter the first number:");
let second = prompt("enter the second number:");
if (first>second){
    console.log("first value is bigger.");
} else if(first<second){
    console.log("second value is smaller.");
} else {
    console.log("both value are equally");
}

// assignment no 3 check if value is divisible by 2;

 let num = prompt("enter a number is divisible by 2");
if (num % 2 === 0){
    console.log("the number is divisible by 2");
} else {
    console.log("the number is not divisible by 2");
}

// assignment no 4 check the value is divible by 3;

num = prompt("enter a number is divisible by 3");
if (num % 3 === 0){
    console.log("this value is divsible by 3");
} else {
    console.log("this value is not divisible by 3");
}

// assignment no 5 check the value is divisible by 5;

num = prompt("the value is divisible by 5");
if (num % 5 === 0){
    console.log("this value is divisible by 5");
} else {
    console.log("this value is not divisible by 5");
}

// assignment no 6 check the value get remainder when divide by 2;

num = prompt("enter a number to get the remainder when divide by 2 ");
console.log("get remainder is divisible  by 2:", num % 2);

// assignment no 7 check the value get remainder when divide by 3;

num = prompt("enter a number to get the remainder when divide by 3");
console.log("get remainder is divisible by 3" , num % 3);

// assignment no 8 check the value get remainder when divide by 5;

num = prompt("enter the number when the remainder is divide by 5");
console.log("get remainder is divisible by 5" , num % 5);


