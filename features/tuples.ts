//array called drink with properties
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//tuple... an array of properties.  The way this is written if you hover over pepsi it tells you that this is an array with a string, a boolean, and a number.  : (string | boolean| number)[].  This can be messed up if you change the order of the array ex: pepsi[0] = 40 would take the sugar value and put it in the first position in the array.  pepsi[2] = 'brown' would take the color and make it the third element in the array.  breaking the order breaks down our data model.
const pepsi = ['brown', true, 40];

//instead
const pepsi2: [string, boolean, number] = ['brown', true, 40];

//So pepsi2 position zero at 40 is going to give me an error now because element 0 is supposed to be a string
pepsi2[0] = 40

//TYPE ALIAS... this is sick
type Drink = [string, boolean, number];

const pepsi3: Drink = ['brown', true, 40];

// so now check this out
const sprite: Drink = ['clear', true, 30];
const dietcoke: Drink = ['brown', true, 0];
const tea: Drink = ['brown', false, 0];


//ex:
const carSpecs: [number, number] = [400, 3354]  //this doesn't tell us what these numbers mean

//instead:  make an array object (key/ value pairs).  The key makes the numerical value obvious/ clear.  So modeling records in array objects is generally more useful then tuples.
const carStats = {
  horsepower: 400,
  weight: 3354
}