//let input = document.getElementById("input");
//let input1 = document.getElementById("input1");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mult = document.getElementById("mult");
let divide = document.getElementById("divide");
let output = document.getElementById("output");

function addition (num,num1){
    return num + num1;
}

function calculate (num, num1, cal){
    return cal(num,num1);
}

let input = document.getElementById("input");
let input1 = document.getElementById("input1");

function printToDOM(value) {
    document.getElementById("output").innerHTML = value;
  }


document.getElementById("add").addEventListener("click", function () {
    let answer = calculate(+input.value,+input1.value, addition);
    //document.getElementById("output").innerHTML = input.value + input1.value;
    printToDOM(answer);
});



/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */