// FUNCTIONS FOR OUR OPERATORS IN ORDER TO RETURN A CONSISTENT VALUE

function add(num1, num2) {

  return num1 + num2;
}

function subtract(num1, num2) {

  return num1 - num2;
}

function divide(num1, num2) {

  return num1 / num2;
}

function multiply(num1, num2) {
    
  return num1 * num2;
}

function power(num1, num2) {

  return Math.pow(num1, num2);
}

// MAYBE?? SQRT

function squareRoot(num1) {

  return Math.sqrt(num1);
}

// FOUND INTERESTING ANSWER FOR PERCENTAGE ON WEB... WILL IT WORK?
//  return Math.floor((num1 / num2) * 100); 
// NOPE it will not work

function percentage (num1, num2) {
  return num1 % num2;
}

// MAKING A FUNCTION WITH A PARAMETER OF EXPRESSION. IF ELSE STATEMENTS COME BACK AS STRINGS THAT WE SLICE IN ORDER TO RETURN THE VALUE WE WANT
// MAKING THE FUNCTIONS I WROTE ABOVE COME INTO PLAY AND MAKE THE CALCULATOR DO DA MATH THROUGH IS STATEMENTS 

function calculate(expression) {

  const tokens = expression.split(" ");
  // const num1 = tokens[0]; ------ this syntax was messin up the system with the sqrt so they must be changed 
  // const operator = tokens[1];
  // const num2 = Number(tokens[2]);

  if (tokens.length === 3 ) {
    num1 = Number(tokens[0]);
    operator = tokens[1];
    num2 = Number(tokens[2]);

    //number is invalid
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("This was not a number");
      return;
    }
  }

  // ?????? WHY IS THIS ONE AN ELSE IF ??????
  else if (tokens.length === 2) {
    operator = (tokens[0]);
    num1 = Number(tokens[1]);

    if (Number.isNaN(num1)) {
      alert("This was not a number");
      return;
    }
  }

  if (operator === "+") {

  // NOT ADDING THE NUMBERS TOGETHER BECAUSE WE ARE CALLING A FUNCTION WHERE WE DID THAT FROM FURTHER BACK IN CODE
  return add(num1,num2);
  }
  // tried doing if else here and I want to ask for clarification on why if else isn't needed. I got a "(" expected error
  // We may have gone over that but I want to understand that a little more.
  if (operator === "-") {
    return subtract(num1,num2);
  } 

  if (operator === "/") {
  return divide(num1,num2);
  }

  if (operator === "*") {
    return multiply(num1,num2);
  }

  if (operator === "^") {
    return power(num1,num2);
  }

  if (operator === "%") {
    return percentage(num1,num2);
  }

  // THIS STATEMENT DID NOT WORK BECAUSE IT IS AT THE 0 INDEX. MAKE An else if statement TO MAKE THIS RUN PROPERLY
  // I ended up needing to put the solution into an else if statement in order to 

  if (operator === "sqrt") {
    return squareRoot(num1);
  }

  
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.

document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
