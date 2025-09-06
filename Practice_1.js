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