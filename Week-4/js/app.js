// document <- gets us access to the page

// getElementById()
let ul = document.getElementById('main-list');

console.log(ul);

// getElementsByTagName - returns an array of elements
let h1 = document.getElementsByTagName('h1');

console.log(h1);

// getElementsByClassName - returns an array of elements
let greenClass = document.getElementsByClassName('fonts');

console.log(greenClass);

// querySelector - returns the first item you are looking for

let firstElementGrabbed = document.querySelector('li');
console.log(firstElementGrabbed);
let firstFontsClass = document.querySelector('.fonts');
console.log(firstFontsClass);

// querySelectorAll - returns a collection of items searched

let allFonts = document.querySelectorAll('.fonts');
console.log(allFonts);

let itemAdd = document.querySelectorAll('#item-add');
console.log(itemAdd);