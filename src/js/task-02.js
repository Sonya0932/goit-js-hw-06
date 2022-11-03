const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) {
  const ingredientEl = document.createElement('li')
  ingredientEl.classList.add('item')
  ingredientEl.textContent = ingredient

  const ingrEl = document.querySelector('#ingredients')
  ingrEl.appendChild(ingredientEl)
}


