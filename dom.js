// // console.dir(documment);
// // shows the documentation and codes on inspect
// console.log(document.domain);
// // shows the domain or IP address
// console.log(document.URL);
// // shows the url

// console.log(document.title);
// // shows what the title of the page is in this case document
// console.log(document.doctype);
// // shows what document type it is in this case html
// console.log(document.head);
// // shows everything on the head
// console.log(document.body);
// // shows everything the body
// console.log(document.all);
// // shows everything on the page
// console.log(document.all[7]);
// // shows whats is on the tree line 7
// document.all[15].textcontent = 'we just changed the header'
// // changed the header 

// console.log(document.forms);
// // shows forms
// console.log(document.links);
// // shows if there is any links
// console.log(documents.images);
// // shows if there is any image

// ///////////////////////////////////////////

// Access the DOM with GETELEMENTBYID

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// document object model can scan the tree for elements in this case forms, links, and images

// //  get element by id

// console.log(document.getElementByID('header-title'));
// let headerTitle = console.log(document.getElementByID('header-title'));
// headerTitle.textcontent = "Im changing the Header";
// headerTitle.innerText = "I am changing it Again";
// headerTitle.style.color = 'blue'
// // creation of an object variable using the document function to edit or change them



//  //////////////
//  GetElementByClassName///////

// to call by class name variable and index a specific array in this case 1 

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// items[1].textContent = "Hello world! Number 2"
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'blue';
// items[1].textContent='Alpha Kappa Alpha';
// items[1].style.color = 'black';

// change the style of the element class 

// items[0].textContent = "Delta Sigma Theta"
// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'red';
// items[0].textContent = 'Oooop - 'Coleman Love';
// items[0].style.color = 'white';

// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'blue';
// items[2].textContent = 'Zee Phi - 'Zeta';
// items[2].style.color = 'white';

// items[3].style.fontWeight = 'bold';
// items[3].style.backgroundColor = 'yellow';
// items[3].textContent = 'Zee Phi - 'Phi';
// items[3].style.color = 'white';


// items[4].style.fontWeight = 'bold';
// items[4].style.backgroundColor = 'green';
// items[4].textContent = 'Zee Phi - 'Beta';
// items[4].style.color = 'white';

// THis is a counter which loops all the  way until 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i<=20; i +=2){
//     console.log(i);
// }
// increament loop by 1 loop up to 20

// for (let i = 100; i >= 0; i -=2){
//     console.log(i)
// }
// decrement by 2 loop up to 100

// for (var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = 'grey';
//     items[i].textContent = 'I change the list';
//     items[i].style.Color = 'green';
// } 
// USE power loop to change the color and the list names

// const myDiamonds = ['snacky','scary','piggy','lily','ittyBitty','binnles','lanky','kibble','pinchie']

// for(let i = 0; i < myDiamonds.length; i++){
//     console.log(i, myDiamonds[i]);
// }
// we use this to show a string array in the console inteade of numbers

// ////////////
// get element by tag name

// var li = document.getElementsByTagName('li');
// console.log(li);
// // get element by tag name in this case li
// console.log(li[1]);

// li[1].textContent = "Hello 2";
// // change the text content on item 2

// li[1].style,fontWeight = 'bold';
// li[1].style.backgroundColor = 'blue';
// li[1].style.color = 'white';
// // change the style color and font weight by calling the tag since it is decleard by var

// for (var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = 'Chamged content';
// }
// used for to change the style of the li tag 

// //////////////

// query selector

var header = document.querySelector('#main-header');

header.style.borderBottom = 'solid 4px hotpink';
// change the border to hop pink and 4px using query selector
var input = document.querySelector('input');
input.value = "change the input box text";
// change the text with query selector 

var submit = document.querySelector("input[type='submit']");
submit.value = "Send"
// used document selector with submit var to change the submit button to send

var item = document.querySelector('.list-group-item');
item.style.color = 'red';
// used document selector with list group items class to change the color for the first to red

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'coral';
// used document select with list group items class to change the last child or last item color to coral