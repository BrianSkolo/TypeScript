//INTERFACE NOW we are saying in order for this object to be a type that is reportable you must have a function called summary that returns a string.
interface typeReportable {
  summary(): string 
}

// we have an object called oldCivic and a function that will take a vehicle object (in this case oldCivic) that has the same structure as oldCivic and print the name, year and if it's broken or not.  when you invoke the summary function from the interface it need to have the function name, call it, the type and then the whatever the function is going to do inside of the brackets
const oldCivic2 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`
  }

}

//condensing to summary function 
const printSummary = (reportItem: typeReportable): void => {
  console.log(reportItem.summary());
}

printSummary(oldCivic);
printSummary(drink2);

//point is we can use the same interface to describe the shape/ different properties of very different objects.  Keep the interfaces generic so that they are reusable.
