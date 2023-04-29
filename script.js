const counter = document.querySelector('.counter');
const count = counter.querySelector('.count');
const decrementBtn = counter.querySelector('.decrement');
const incrementBtn = counter.querySelector('.increment');

let counterValue = 0;

function updateCounter() {
  count.textContent = counterValue;
}

function decrementCounter() {
  if (counterValue > 0) {
    counterValue--;
    updateCounter();
  }
}

function incrementCounter() {
  counterValue++;
  updateCounter();
}

decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener('click', incrementCounter);