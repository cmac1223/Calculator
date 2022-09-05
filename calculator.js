const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

// function fires when button is click
keys.addEventListener('click', e =>{
  if (e.target.matches('button')){
    const key = e.target;
    console.log(key);
  }
})
