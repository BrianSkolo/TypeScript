//INTERFACE for the new type that we are creating.  summary is an example of using a function as a property for Vehicle.
interface Vehicle {
  name: string,
  year: Date,
  broken: boolean
  summary(): string
}

// we have an object called oldCivic and a function that will take a vehicle object (in this case oldCivic) that has the same structure as oldCivic and print the name, year and if it's broken or not.  when you invoke the summary function from the interface it need to have the function name, call it, the type and then the whatever the function is going to do inside of the brackets
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

//OLD
// const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// }

//NEW... replace the long annotation from above with the interface that we created at the top of the page.
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
}

printVehicle(oldCivic);
