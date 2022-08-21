const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculatorkeys');

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
   // do something

const key = e.target;
const action = key.dataset.action;

if (!action) {
  console.log('number key');
}

if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  console.log('operator key!');
  calculator.dataset.previousKeyType = 'operator';
  
  const previousKeyType = calculator.dataset.previousKeyType;

  if (!action) {
    if (displayedNum === '0' || previousKeyType === 'operator') {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }

}

if (action === 'decimal') {
  console.log('decimal key!');
}

if (action === 'clear') {
  console.log('clear key!');
}

if (action === 'calculate') {
  console.log('equal key!');
}

}
});

// clicking number keys
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    

    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }
    

  }
})

// clicking the equals sign
if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue;
  const operator = calculator.dataset.operator;
  const secondValue = displayedNum;
  
  display.textContent = calculate(firstValue, operator, secondValue);

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    // ...
    calculator.dataset.firstValue = displayedNum;
    calculator.dataset.operator = action;
  }

  // calculate function
  const calculate = (n1, operator, n2) => {
    let result = '';
  
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2);
    }
  
    return result;
  }


}