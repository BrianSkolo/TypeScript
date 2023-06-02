//you don't need the annotation here.  The string type will be inferred if there are strings in the array.  IF the array is empty however we need the annotation.
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

//in a similar manor the Date type is inferred here
const dates = [new Date(), new Date()];

//2 dimensional arrays.  Use 2 sets of square brackets.  If you hover over carsByMake it will show you : string[][]
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

//Inference when extracting values. If you hover over car1 typescript knows that carMakers is an array of strings and we just pulled a value out of it.
const car1 = carMakers[0];

//pulling last element in the array using the pop function 
const myCar = carMakers.pop(); 

//prevent incompatible values.  this tells you that the argument needs to be a string
carMakers.push(100);

//map() function / help for for each and reduce.  The function that is the argument for the map function will be called on every element in the array.
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

//Flexible types.  : (Date | string)[] shows that type Date or string can be used in the array.
const importantDates: (Date | string)[] = [new Date()];
//push a new string with a date to the array.  push appends new elements to the end of an array and then it returns the new length of the array.
importantDates.push('2030-10-10');
//push a new date to the array
importantDates.push(new Date());

//ARRAYS ARE FOR A COLLECTION OF DIFFERENT RECORDS TUPLES ARE SLIGHTLY DIFFERENT
