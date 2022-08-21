"use strict";

var calculator = document.querySelector('.calculator');
var keys = calculator.querySelector('.calculatorkeys');
keys.addEventListener('click', function (e) {
  if (e.target.matches('button')) {
    // do something
    var key = e.target;
    var _action = key.dataset.action;

    if (!_action) {
      console.log('number key');
    }

    if (_action === 'add' || _action === 'subtract' || _action === 'multiply' || _action === 'divide') {
      console.log('operator key!');
      calculator.dataset.previousKeyType = 'operator';
      var previousKeyType = calculator.dataset.previousKeyType;

      if (!_action) {
        if (displayedNum === '0' || previousKeyType === 'operator') {
          display.textContent = keyContent;
        } else {
          display.textContent = displayedNum + keyContent;
        }
      }
    }

    if (_action === 'decimal') {
      console.log('decimal key!');
    }

    if (_action === 'clear') {
      console.log('clear key!');
    }

    if (_action === 'calculate') {
      console.log('equal key!');
    }
  }
}); // clicking number keys

var display = document.querySelector('.calculator__display');
keys.addEventListener('click', function (e) {
  if (e.target.matches('button')) {
    var key = e.target;
    var _action2 = key.dataset.action;
    var _keyContent = key.textContent;
    var _displayedNum = display.textContent;

    if (!_action2) {
      if (_displayedNum === '0') {
        display.textContent = _keyContent;
      } else {
        display.textContent = _displayedNum + _keyContent;
      }
    }

    if (_action2 === 'decimal') {
      display.textContent = _displayedNum + '.';
    }
  }
}); // clicking the equals sign

if (action === 'calculate') {
  var firstValue = calculator.dataset.firstValue;
  var operator = calculator.dataset.operator;
  var secondValue = displayedNum;
  display.textContent = calculate(firstValue, operator, secondValue);

  if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
    // ...
    calculator.dataset.firstValue = displayedNum;
    calculator.dataset.operator = action;
  } // calculate function


  var calculate = function calculate(n1, operator, n2) {
    var result = '';

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
  };
}