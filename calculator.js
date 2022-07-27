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
const valueArray = [];

// function returns number value
displayValue = (e) => {
  // debugger;
  const displayContainer = document.getElementById('display-container')
  let integer = parseInt(e.target.innerText);

  if (Number.isInteger(integer)) {
    valueArray.push(displayContainer.innerText += integer);

  }
}

// target buttons by class 
// add eventlistener 
// run function that populates number
// store display value somewhere

const numbers = document.querySelectorAll('.numbers');
numbers.forEach((number => {
  number.addEventListener('click', displayValue)
}))
