"use strict";

var calculator = document.querySelector('.calculator');
var keys = calculator.querySelector('.calculatorkeys');
keys.addEventListener('click', function (e) {
  if (e.target.matches('button')) {
    // do something
    var key = e.target;
    var action = key.dataset.action;

    if (!action) {
      console.log('number key');
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      console.log('operator key!');
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