
// third number is the return type.  If a and b are type: number and we we are returning the value of  a + b then we are also returning a type: number.  Typescript reads the function and sees if the type that you're returning it correct.
const add = (a: number, b:number): number => {
  return a + b;
}

// we need to add annotations on arguments so you don't need to add that third "number" from above.  You can just do:

const addExampleTwo = (a: number, b:number) => {
  return a + b;
}

// but you still want to annotate the return value though so that TS can find mistakes.  for instance if you didn't use return and just wrote a + b TS would read that as a void return value.

function divide (a: number, b: number): number {
  return a/b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

//void shows that there will be no return value from this function.  You'll get an error message if you try to return anything.
const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => {
  throw new Error(message);
};

//DESTRUCTURING ANNOTATIONS
const forecast = {
  date: new Date(),
  weather: 'Sunny'
}

//destructure first then annotate after
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}
