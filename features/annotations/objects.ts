const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};
//here you have to list out the structure of profile and the different properties that you want it to have. Here we destructure age out of profile and assign the type of age to number
const { age }: {age: number} = profile


//destructure lat and lng as well.
const { age }: {age: number} = profile
const {coords: {lat, lng}}: {coords: {lat: number; lng: number}}  = profile
//              ^destructure             ^annotation