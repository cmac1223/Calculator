const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');


// calculate function
const calculate = (n1, operator, n2) => {
  let result = '';

  if (operator === 'add') {
    result = (parseFloat(n1) + parseFloat(n2)).toFixed(2);
  } else if (operator === 'subtract') {
    result = (parseFloat(n1) - parseFloat(n2)).toFixed(2);
  } else if (operator === 'multiply') {
    result = (parseFloat(n1) * parseFloat(n2)).toFixed(2);
  } else if (operator === 'divide') {
    result = (parseFloat(n1) / parseFloat(n2)).toFixed(2);
  }
  return result;
}

// const clearFunction = (f, s) => {
//   result = {
//     f: '0',
//     s: '0'
//   }
// }


// function fires when button is click
keys.addEventListener('click', e => {
  // debugger;
  if (e.target.matches('button')) {
    const key = e.target;

    //create a variable that target the data-action attribute.
    const action = key.dataset.action;

    // get textContent from clicked button
    const keyContent = key.textContent;

    // get display value
    const displayedNum = display.textContent;

    // Define previousKeyType
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === '0' ||
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        display.textContent = keyContent;
      } else {
        display.textContent = `${displayedNum}${keyContent}`
      }
      calculator.dataset.previousKeyType = 'number';
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      // store firstValue inside of custom attribute
      const firstValue = calculator.dataset.firstValue;

      // store operator inside of custom attribute
      const operator = calculator.dataset.operator;

      // assign the second value as displayedNum value
      const secondValue = displayedNum;

      if (
        firstValue &&
        operator &&
        previousKeyType !== 'operator' &&
        previousKeyType !== 'calculate'
      ) {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;

        // Update calculated value as firstValue
        calculator.dataset.firstValue = calcValue;

      } else {
        // if no calculations, set displayNum as the firstValue
        calculator.dataset.firstValue = displayedNum;
      }

      // Displaying error message if divide by 0
      if (firstValue &&
        operator === 'divide' &&
        secondValue === '0'
      ) {
        display.textContent = `Divide By ${secondValue} Error`
      }

      //create operator custom attribute set to action
      calculator.dataset.operator = action;
      // add custom attribute
      calculator.dataset.previousKeyType = 'operator';
    }





    // When decimal key is click
    if (action === 'decimal') {
      if (previousKeyType === 'operator' ||
        previousKeyType === 'calculate') {
        display.textContent = '0.';
      } else if (!displayedNum.includes('.')) {
        display.textContent = `${displayedNum}.`
      }
      calculator.dataset.previousKeyType = 'decimal'
    }

    // When clear button is click
    if (
      action === 'clear'
    ) {

      // set first and second value to 0
      calculator.dataset.firstValue = 0;
      calculator.dataset.secondValue = 0;

      // display 0
      display.textContent = 0;

      // change clear button from 'CE' to 'AC'
      key.textContent = 'AC';

      // set previousKeyType to clear
      calculator.dataset.previousKeyType = 'clear'
    }

    // Whenever clear button isn't click
    if (action !== 'clear') {
      const clearButton = calculator.querySelector('[data-action=clear]');
      clearButton.textContent = 'CE';
    }
    // when equal sign is click
    if (action === 'calculate') {
      // debugger;
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      let secondValue = displayedNum;

      // instead of secondValue, we want the set firstValue to the displayed number.
      if (firstValue) {
        if (previousKeyType === 'calculate') {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }

        display.textContent = calculate(firstValue, operator, secondValue)
      }


      // Displaying error message if divide by 0
      if (firstValue &&
        operator === 'divide' &&
        secondValue === '0'
      ) {
        display.textContent = `Divide By ${secondValue} Error`
      }

      // set modValue attribute
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = 'calculate';
    }

  }
})
