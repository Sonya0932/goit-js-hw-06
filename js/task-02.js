const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");

const newItems = ingredients.map(ingredient => {
  const makeIngredient = document.createElement("li");
  makeIngredient.textContent = ingredient;
  makeIngredient.classList.add("item");

  return makeIngredient;
});

list.append(...newItems);
