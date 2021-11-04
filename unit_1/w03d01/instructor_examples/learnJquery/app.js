////////////
//Selecting Elements with Jquery
////////////

// jQuery window onload function $(() => {})
// document.querySelector('body') <- Plain Vanilla Equivalent to $('body')

// const $body = $('body');

// console.log($body);
// console.log(document.querySelector('body'));

const $divs = $('div'); // document.querySelectorAll('div')
const $divId = $('#cheese'); //document.querySelector('#cheese')
const $divClass = $('.cheese'); //document.querySelector('.cheese')

// console.log($divs, $divId, $divClass);

$divs.eq(0).text('this is the first div'); //divs[0].innerText = 'this is the first div'
$divId.text('Hello World'); // divId.innerText = 'Hello World'
$divClass.html('<h1>Goodbye World</h1>'); // divClass.innerHTML = '<h1>Goodbye World</h1>'

/////////////
//Creating and Adding Elements
////////////
// $('<>')

const $h1 = $('<h1>'); // document.createElement('h1')

$h1.text('I am the h1 you created');

$divs.eq(3).append($h1); //divs[3].appendChild(h1)

$('body').prepend($('<div>').text('This the new div')); //append adds element as last child, prepend adds element as first child

$('div').eq(0).remove(); //grab the array of divs, and removing the first one, which the div we just prepended

$('body').empty(); // removes all the children of the body

//document.querySelector('body').appendChild(document.createElement('div').innerText = "this is the new div")

/////////////
//Exercise
/////////////
//Create a Div inside body, and inside that div create an h1 that says "I did the exercise!"

//select the body
$body = $('body');
//create our div and h1
$exDiv = $('<div>');
$exH1 = $('<h1>').text('I did the exercise');
//append my elements
$body.append($exDiv);
$exDiv.append($exH1);

/////////////////
// CSS and Styling
/////////////////
// .css(property, value)

// $exH1.css('color', 'orange'); //sets CSS property Color to Orange for the h1

$exH1.addClass('test'); // adds class 'test' to the h1

$exH1.removeClass('test'); // remove the 'test' class

$exH1.attr('id', 'test');

$exH1.hide(5000);

$exH1.show();

const $img = $('<img>').attr(
    'src',
    'https://media.comicbook.com/2018/07/thanos-grimace-cosplay-1119672-1280x0.jpeg'
);

$body.append($img);
