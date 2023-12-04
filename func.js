//Create a function that checks if the parameter/input is an even number

function checkForEven (first, last) {
    for (let num = first; num <= last; num++) {
        if (num % 2 === 0) {
            console.log(num + ' is even number')
        } else {
            console.log(num + ' is odd number')
        }
    }

}
checkForEven(4, 30)

//Create a function that prints to the console n1 to n2, where n1 is the first input/parameter and n2 is the second input/parameter

function printNum (n1, n2) {
    for (let num = n1; num <= n2; num++) {
        console.log(num);
    } 
}
printNum(3, 13);

//Create a function that sums the values in-between two numbers. E.g calcFunc(1, 3), return 6; i.e 1+2+3

function sumVal(n1, n2) {
    let sum = 0;
    for (let j = n1; j <= n2; j++) {
    sum += j; //sum = sum + j
    }
    return sum;
}
let total = sumVal(2, 10)
console.log("The sum between 2 and 10 is", total)