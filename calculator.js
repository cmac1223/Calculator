const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

// function fires when button is click
keys.addEventListener('click', e => {
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
      if (displayedNum === '0'
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

      // add custom attribute
      calculator.dataset.previousKeyType = 'operator';
    }

    // When decimal key is click
    if (action === 'decimal') {
      console.log('decimal')
    }

    if (action === 'clear') {
      console.log('clear');
    }

    if (action === 'calculate') {
      console.log('calculate');
    }
  }
})
