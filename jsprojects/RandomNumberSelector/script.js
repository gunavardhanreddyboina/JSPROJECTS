const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const numberDisplay = document.getElementById('number');
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert('Please enter a valid range where Min is less than Max.');
    return;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  numberDisplay.textContent = randomNumber;
});
