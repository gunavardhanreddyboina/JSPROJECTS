// Get DOM elements
const count = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

// Initialize counter variable
let counter = 0;

// Increase
increaseBtn.addEventListener('click', () => {
  counter++;
  count.textContent = counter;
});

// Decrease
decreaseBtn.addEventListener('click', () => {
  counter--;
  count.textContent = counter;
});

// Reset
resetBtn.addEventListener('click', () => {
  counter = 0;
  count.textContent = counter;
});
