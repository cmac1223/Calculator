const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');


// calculate function
const calculate = (n1, operator, n2) => {
  let result = '';

  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  return result;
}


// function fires when button is click
keys.addEventListener('click', e => {
  debugger;
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
      console.log('operator');
      // store firstValue inside of custom attribute
      const firstValue = calculator.dataset.firstValue;

      // store operator inside of custom attribute
      const operator = calculator.dataset.operator;

      // assign the second value as displayedNum value
      const secondValue = displayedNum;

      // storing the first displayedNum as the firstValue
      calculator.dataset.firstValue = displayedNum;

      //create operator custom attribute set to action
      calculator.dataset.operator = action;

      // add custom attribute
      calculator.dataset.previousKeyType = 'operator';
    }

    // When decimal key is click
    if (action === 'decimal') {
      console.log('decimal')
      calculator.dataset.previousKeyType = 'decimal'
    }

    if (action === 'clear') {
      console.log('clear');
      calculator.dataset.previousKeyType = 'clear'
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
      calculator.dataset.previousKeyType = 'calculate';
    }

  }
})
