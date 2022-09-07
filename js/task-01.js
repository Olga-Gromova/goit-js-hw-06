const numbersCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numbersCategories.length}`);

numbersCategories.forEach(item => {
    const titleCategories = item.querySelector('h2');
    const quantityItem = item.querySelectorAll('li');
    console.log('Category:', titleCategories.textContent, '\n', 'Element:', quantityItem.length);
});

