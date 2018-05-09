let money = parseFloat(prompt('How much money do you have?'));
let applesCount = parseInt(prompt('How many apples do you have?'));
let breadCount = parseFloat(prompt('How many bread do you have?'));
let sumApples = applesCount * parseFloat(prompt('What is the apple price?'));
let sumBread = breadCount * parseFloat(prompt('What is the bread price?'));
let result = money >= (sumApples + sumBread);
document.body.innerHTML = result;