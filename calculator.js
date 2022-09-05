const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

// function fires when button is click
keys.addEventListener('click', e =>{
  if (e.target.matches('button')){
    const key = e.target;

    //create a variable that target the data-action attribute.
    const action = key.dataset.action;

    // get textContent from clicked button
    const keyContent = key.textContent;

    // get display value
    const displayedNum = display.textContent;
    console.log(displayedNum);
  }
})
