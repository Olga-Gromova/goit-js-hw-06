let counterValue = 0;

const displayCounter = document.querySelector('#value');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');

buttonMinus.addEventListener('click', () => {
    counterValue--;
    displayCounter.textContent = counterValue;
});

buttonPlus.addEventListener('click', () => {
    counterValue++;
    displayCounter.textContent = counterValue;
});


buttonMinus.style.background = 'green';
buttonMinus.style.borderRadius = '15%';
buttonMinus.style.borderColor = 'green';
buttonMinus.style.color = 'yellow';
displayCounter.style.margin = '20px';
displayCounter.style.color = 'red';
buttonPlus.style.background = 'blue';
buttonPlus.style.borderRadius = '15%';
buttonPlus.style.borderColor = 'blue';
buttonPlus.style.color = 'yellow';

