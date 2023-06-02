                           //type definition file below @types/library name... ish ex search for @types/faker in the search bar for the faker documentation
import { faker } from "@faker-js/faker";
import { Mappable } from "./customMap";

//implements Mappable means that we are using the properties specified in mappable in the User class.
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  // parseFloat() take the string and converts it into a number with decimal.
  // constructor initialized the properties that we created in the class
    constructor() {
      this.name = faker.name.firstName();
      this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      };
    }

    markerContent(): string {
      return `
      <div>User Name: ${this.name}</div>    
      `;
    }
} 

