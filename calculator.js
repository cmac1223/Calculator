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
operate = ( operator, a, b) => {
  
}