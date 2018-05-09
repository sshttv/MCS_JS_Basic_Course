console.log('You are at '+window.location);

const backColor = prompt('Новый фон страницы');
const body = document.body
body.style.backgroundColor = backColor;
console.log(backColor);

const textColor = prompt('Новый цвет текста страницы');
const page = document.querySelector('.page');
page.style.color = textColor;
console.log(textColor);

const personName = prompt('Как зовут вашего героя?');
const name = document.querySelector('.name');
name.innerHTML = personName;
console.log(personName);

const imageURL = prompt('Новая картинка с расширением (напр., .png или .jpeg');
const image = document.querySelector('.imageBlock img');
image.setAttribute('src', 'img/'+imageURL);
console.log(image.getAttribute('src'));

const bioNew = prompt('Новый текст страницы');
const bio = document.querySelector('.shortBio');
bio.innerHTML = bioNew;
console.log(bioNew);

bio.className += ' animated';
console.log(bio.className);