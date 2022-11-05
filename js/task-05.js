const inputEL = document.querySelector('#name-input')
console.log(inputEL)
const spanEl = document.querySelector('#name-output')
console.log(spanEl)

inputEL.addEventListener('input', (event) => {
  if (event.currentTarget.value.trim() !== '') {
    spanEl.textContent = event.currentTarget.value;
  }  else {
    spanEl.textContent = 'Anonymous'
  }
});




