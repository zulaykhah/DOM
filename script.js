// accessing the body tag by id
let  bodyElement = document.getElementById('container');
// console.log(bodyElement);
// accessing element using query selector
let container = document.querySelector('#container');
let  helloDiv = document.querySelector('.hello');

// access element by class name
let helloByClassName = document.getElementsByClassName('hello');
let helloByClassName2 = document.querySelectorAll('.hello');
// access elt by tag name
let buttonElement = document.getElementsByTagName('button');
// console.log(buttonElement);

// DOM Manipulation
let helloElement = document.getElementsByTagName('div')[0];
console.log(helloElement);
helloElement.innerHTML = "Good Morning Stutern Learners!";

let everyoneElem = document.getElementsByTagName('div')[1];
console.log(everyoneElem);
 everyoneElem.innerText = "I hope everyone is enjoying javaScript!";

 helloElement.style.color = 'green';
 helloElement.style.backgroundColor = 'blue';
 everyoneElem.style.color = 'red';
 everyoneElem.style.backgroundColor = 'green';

//  Higher Order Function
function sendMessageHOF(message, callbackFunction){
    callbackFunction(message);
}
sendMessageHOF('Hello Joy', console.log);
sendMessageHOF('Hello Maryam', alert);
sendMessageHOF('Hello atinuke', confirm);
sendMessageHOF('Hello orezi', prompt);


// Q. write a solution that calculates the area and diameter
// of a circle given radia [1,2,3] and returns the output for each radius in an array.

// area of a circle = PI * radius * 2
// diameter of a circle = 2 * radius

function calculateArea(radia) {
    const result = [];
    for (let i = 0; i < radia.length; i++){
        let area = Math.PI * radia[i] * radia[i];
        result.push(area);
    }
        return result;
}
let arrayOfAreas = calculateArea([1,2,3]);
console.log(arrayOfAreas);

function calculateDiameter(radia){
    const result = [];
    for (i = 0; i < radia.length; i++){
        let diameter = 2 * radia[i] * Math.PI;
        result.push(diameter);
    }
        return result;
}
let arrayOfDiameter = calculateDiameter([1,2,3]);
console.log(arrayOfDiameter);
// circumference

// Use HOF and callback for above
function area(radius){
    let area = Math.PI * radius * 2;
    return area;
}
function diameter(radius){
    let diameter = 2 * radius;
    return diameter;
}
function circumference(radius){
    let circumference = 2 * Math.PI * radius;
    return circumference;
}
function circleOperation(radia, callbackFunction){
    const result = [];
    for (i = 0; i < radia.length; i++){
        let operation = callbackFunction(radia[i]);
        result.push(operation);
    } 
    return result;
}
let areas = circleOperation([1,2,3], area);
console.log(areas);

let diameters = circleOperation([1,2,3], diameter);
console.log(diameters);
let circumferences = circleOperation([1,2,3], circumference);
console.log(circumferences);

const usingmapToCalcDiameter = [1,2,3].map(diameter);
console.log(usingmapToCalcDiameter);

// setTimeout and setInterval
// 1000ms = 1s
// for 10s log out stutern learners
// function logMessage(){
//     console.log('Hello Stutern Learners');
// }
// setTimeout(logMessage, 10000);
// OR
// setTimeout (function() {
//     console.log('Hello Stutern Learners');
// }, 10000);

// OR
// setTimeout(() => console.log('hello Stutern Learners'), 10000);
// setInterval:Log out Stutern Learners after every 2s

// setInterval(callbackFunction,interval);
// setInterval(() => console.log('Hello Stutern Learners'), 2000);

// Trying to stop the timer
// cancel the operation after 20s
// let timerId = setInterval(() => console.log('Hello Stutern Learners'), 2000);
// setTimeout(function(){
//     clearInterval(timerId);
//     console.log('Interval has been terminated');
// }, 20000);

// Closure
function parentFunction(a){
    return function childFunction(b) {
        return a + b;
    }
}
parentFunction(8);
console.log(parentFunction(8));
parentFunction(8)(5);
console.log(parentFunction(8)(5));

// OR
function calculate(x){
    function multiply(y){
        return x * y;
    }
    return multiply;
}
const multiply3 = calculate(3);
const mult = multiply3(6);
console.log(mult); 