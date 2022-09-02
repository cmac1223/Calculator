// This function adds two numbers
add = (a, b) => {
  if (Number.isInteger(a) === true && Number.isInteger(b) === true) {
    return a + b;
  } else {
    return 'You must select an number'
  }
}

// This function subtracts two numbers
subtract = (a, b) => {
  if (Number.isInteger(a) === true && Number.isInteger(b) === true) {
    return a - b;
  } else {
    return 'You must select an number'
  }
}

// This function multiply two numbers
multiply = (a, b) => {
  if (Number.isInteger(a) === true && Number.isInteger(b) === true) {
    return a * b;
  } else {
    return 'You must select an number'
  }
}

// This function divides two numbers
divide = (a, b) => {
  if (Number.isInteger(a) === true && Number.isInteger(b) === true) {
    return a / b;
  } else {
    return 'You must select an number'
  }
}

// operate function takes an operator and 2 numbers then calls one of the above function on the numbers.
operate = (a, operator, b) => {
  return operator === add ? add(a, b)
    : operator === subtract ? subtract(a, b)
      : operator === multiply ? multiply(a, b)
        : operator === divide ? divide(a, b)
          : 'You must select an two numbers and operator'
}

// storing value inside array
// const valueArray = [];

let valueArray = [];
// let valueArray = '';
// let valueObj = {};

const displayContainer = document.getElementById('display-container')
// function returns number value
displayNumber = (e) => {
  // debugger;
  let integer = parseInt(e.target.innerText);

  if (Number.isInteger(integer)) {
    valueArray[0] = (displayContainer.innerText += integer);
    console.log(valueArray)
  }

}

displayOperator = (e) => {
  let operator = e.target.innerText;
  valueArray[0] = (displayContainer.innerText += operator);

}



// operator function?
blah = (e) => {
  if (e.target.innerText === '*') {
    console.log('multiplication')
  }
}

// target buttons by class
// add eventlistener
// run function that populates number
// store display value somewhere

const numbers = document.querySelectorAll('.numbers');
numbers.forEach((number => {
  number.addEventListener('click', displayNumber)
}))

const operators = document.querySelectorAll('.operators');
operators.forEach((operator => {
  operator.addEventListener('click', displayOperator)
}))

// add everything to storage array
// split storage array on operator to create values 1&2
// run operate with values 1, 2, & operator
