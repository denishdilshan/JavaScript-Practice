// Java script  can be declared in 4 ways:
// Modern JavaScript: Using let, Using const
// Old JavaScript: Using var, Without using any keyword

//Using let
let x = 5;
const y = 6;

//Mixed Example
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

//Price1 and 2 declare in const keyword, constnat values cannot be changed
//total declare in let keyword, let values can be changed

//String can be written in double or single quotes
let firstName = "John";
let lastName = 'Doe';

//Rules for constructing names for variables
//1. Names can contain letters, digits, underscores, and dollar signs
//2. Names must begin with a letter
//3. Names can also begin with $
//4. Names are case sensitive (y and Y are different variables)
//5. Reserved words (like JavaScript keywords) cannot be used as names

// In javaScript '=' operator is used to assign value '==' is used for equal value

//Create variable and assign value
let carName = "Volvo";

//let
//let and const provided block scope in Javascript
{
    let x = 2;  ////Varible declared inside the block cannot be accessed from out side
}
// can't use x here

//Variables decalared with the var always have Global Scope
{
    var yo = 2;  //Varible declared inside the block can be accessed from out side
}

//variables defined with let cannot be redeclared
//variables defiend with var can be redeclared

//JavaScript Logical Operator
//&& logical and
//|| logical or
//! logical not



////////////////////////
//FUNCTIONS
//Functionas are fundamental building blocks in JavaScript
//It enable better code organization
//Functions are reusable block of code 
//'Functions execute when they are called

function myName(price1, price2, p3){

}

//Arrow Functions
//Before ARROW functions
let myFunction = function(a, b) { return a * b};
let result = myFunction(4, 3); // result is 12


//After ARROW functions
myFunction = (a, b) => a * b;

let result2 = myFunction(4, 3); // result is 12
document.getElementById("demo").innerHTML = "Results:" + result2


//LOCAL VARIABLES 
//Variables declared within a JavaScript function, become LOCAL to the function
//Local variables can only be accessed from within the function.
function goal(){
    let careName = "Cobra";
}

//JavaScript variables have 3 types of scope:
//1. Global Scope
//2. Function Scope
//3 . Block Scope


//Global Scope
//Variables declared outside the function, have Global Scope.
//It can be access outside the function as well as inside the function

//Function Scope
//Variables declared inside the function are not accessible from outside the function
function myFunction1() {
    var BusName = "Audi";

}

//Block Scope
//Variables declared inside a { } block cannot be accessed from outside the block


//JavaScript Hoisting
//In JavaScript, a variable can be declared after it has been used.
//EXAMPLE 1
b = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;

var b; //Declare x


//JavScript Objects
//Object is a variable that can hold many variables.
//The object have properties and methods
//Objects should declared with const keyword
//Create an Object
const hero = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

//We can create empty objective and add properties later
const zero = {};

//Add properties
zero.name = "Helo1";
zero.age = 50;
zero.color = "red";
