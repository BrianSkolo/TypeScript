//METHOD MODIFIERS PAGE.  THREE TYPES OF MODIFIERS:
//PUBLIC: METHOD CAN BE CALLED ANYWHERE ANYTIME.  making all of these functions public change nothing.  
//PRIVATE: METHOD CAN ONLY BE CALLED BY ITS OWN CLASS.  this restricts the methods that other developers can call.  Maybe we don't want another developer calling/ fucking with a method we wrote because they'll break it.
//PROTECTED: METHOD CAN BE CALLED BY PARENT AND CHILD CLASSES.  when we set honk as protected our child classes can access the method but to anyone else it behaves as private.

//new class
class Vehicle { 
//CONSTRUCTOR FUNCTIONS: INSTANTLY EXECUTED WHEN YOU CREATE A NEW INSTANCE OF A CLASS.  ARGUMENTS ARE WHAT WE PASS IN WHEN WE CREATE AN INSTANCE.  You either initialize a property like above or in a constructor.
  constructor(public color: string) {}

  protected honk(): void { 
    console.log('honk honk');
  }
}

const vehicle10 = new Vehicle('orange');
console.log(vehicle10.color);


//INHERITING FROM THE VEHICLE CLASS USING EXTENDS.  Here I overwrote the drive function which supersedes the parent class.
//using super (parent class)
class Car extends Vehicle {
  constructor (public wheels: number, color: string) {
    super(color);
  }  
}


//creating a new instance of that class.  The instance will have access to all of the methods inside of the class.
const vehicle2 = new Vehicle(); 
//calling the drive function on the new instance of the Vehicle class (vehicle1) aka calling drive on vehicle1
vehicle1.drive();

//calling honk on vehicle1
vehicle1.honk();

const car6 = new Car();
car5.drive();
car5.honk();