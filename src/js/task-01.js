const allItem = document.querySelectorAll('.item')
console.log('Number of categories:', allItem.length)

// const nameCategorys = document.querySelectorAll('h2')

// console.log('Category:', nameCategorys[0].textContent)
// console.log('Elements:', allItem[0].children[1].children.length)

// console.log('Category:', nameCategorys[1].textContent)
// console.log('Elements:', allItem[1].children[1].children.length)

// console.log('Category:', nameCategorys[2].textContent)
// console.log('Elements:', allItem[2].children[1].children.length)

allItem.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
});