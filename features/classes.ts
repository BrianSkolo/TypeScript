//new class
class Vehicle {
  drive(): void {
    console.log('vroom vroom');
  }

  honk(): void {
    console.log('honk honk');
  }
}


//INHERITING FROM THE VEHICLE CLASS USING EXTENDS.  Here I overwrote the drive function which supersedes the parent class.
class Car extends Vehicle {
  drive(): void {
    console.log('chug chug');
  }
}

//creating a new instance of that class.  The instance will have access to all of the methods inside of the class.
const vehicle1 = new Vehicle(); 
//calling the drive function on the new instance of the Vehicle class (vehicle1) aka calling drive on vehicle1
vehicle1.drive();

//calling honk on vehicle1
vehicle1.honk();

const car5 = new Car();
car5.drive();
car5.honk();