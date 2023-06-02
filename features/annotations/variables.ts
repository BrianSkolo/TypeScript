//***  NONE OF THESE ARE NECESSARY ANNOTATIONS.  THEY ARE ALL BUILD IN INFERENCES BUT ARE HERE FOR EXAMPLE ONLY  ***



//colon and the word number after it is our typescript annotation.  Just like const apples = 5 but tells us that we are only ever going to use the type number to the variable of apples.  If you try to assign apples a boolean value like true for instance it will tell you that true is not assignable to the type number.

//we are going to use let instead of const after this
// const apples: number = 5;


//let allows you to reassign apples.  Check the error on apples because i used a boolean
// let apples: number = 5;

// apples = true;

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects.  We have a variable called now and it can only be assigned a Date (now: Date) then we assign it an instance of a date object (= new Date();)
// breaking it down:  you have a date object that you're assigning to a variable called now and setting : Date as the type.
let now: Date = new Date();

//ARRAYS

//Type annotation for an ARRAY called colors (variable for the array)
//Type : string[] tells typescript that colors's type will be an array that contains nothing but string inside of it. 
let colors: string[] = ['red', 'green', 'blue'];
//  ^variable  ^type       ^array that we assign the variable to

let myNumbers: number[] = [1,2,3];

let truths: boolean[] = [true, false, true]; 

//CLASSES
// this creates a class called Car and an instance of the class Car called car
class Car {
  honk() {
    throw new Error("Method not implemented.");
  }
  drive() {
    throw new Error("Method not implemented.");
  }

}

let car: Car = new Car();

//OBJECT LITERAL

let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

//FUNCTION

//what types of arguments are going to go into the function and what types of values is the function going to return.  for the annotation you list: (argument and type) => values that you expect the the function to return =.  In this case the function returns nothing so we use the type of VOID.  annotation is :    (i: number) => void = 
// const logNumber: (i: number) => void = (i: number) => {
//   console.log(i);
// }

// /// WHEN TO USE ANNOTATIONS
// //1. Function that returns type: any

// const json = {'x': 10, 'y': 20};
// const coordinates = JSON.parse(json);
// console.log(coordinates); 

//coordinates comes up as type: any.  This means TS has no idea what's going on and cannot give use error messages.  This is bad.

//fix

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

const json = {"x": 10, "y": 20};
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); 

//2. When we declare a variable on one line and initialize it later:
let words = ['red', 'green', 'blue']
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3. When we have a variable who's type cannot be inferred correctly.  you need boolean | value because numberAboveZero could return false or the positive number.
let numbers = [-10, -12, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; 1 < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}