console.log('stranger things are coming');

document.querySelector('h1').innerText = "Welcome to the Upside Down"

const image = document.querySelector('img')

console.log(image)

image.style.display = 'none'; // wont show the image anymore on the page

console.log('image was gone');

image.style.display = 'block';

image.style.filter = 'grayscale(100%)';

image.style.width = '95%';

image.style.filter = ''; //make it equal to nothing to unset it, will use its default

const eggos = document.createElement('img') // the type of element you want to create on the page is the thing you pass in the parantheses
console.log(eggos) // print it to the console, but we still didnt add the element to the page, we just CREATED it

document.querySelector('.container').appendChild(eggos) // no quotes in eggos since we're referring to the variable; adding this element to the container class; in the inspect -> elements tab, you'll see that the <img> tag was added but theres no actual image showing on the left since we didnt provide a src

eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg') // SetAttribute is a method we call on the eggos object and we are going to give it a src attribute as the first parameter, and the second one is the actual value so the link. So 'src' is the key, and the link is the value if we view it as an object

eggos.style.width = '100%';

eggos.remove();

const lis = document.querySelectorAll('li')

console.log(lis)

lis[0].innerText = "1234567"
document.querySelectorAll('li')[4].style.color = 'hotpink';
// OR lis[4].style.color = 'blue';

document.querySelectorAll('li')[3].remove()