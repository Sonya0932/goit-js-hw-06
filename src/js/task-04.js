const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};
    
const counterEl = document.querySelector('#counter')
const valueEL = document.querySelector('#value')

counterEl.firstElementChild.addEventListener('click', function () {
    counterValue.decrement();
    valueEL.textContent = counterValue.value;
})

counterEl.lastElementChild.addEventListener('click', function() {
    counterValue.increment();
    valueEL.textContent = counterValue.value;
})