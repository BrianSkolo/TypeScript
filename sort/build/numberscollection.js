"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
//class called numbers collection that has a reference to the data that we are going to sort (constructor)
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    //get makes it so when you call length (at the bottom of the code) you don't need a bracket (length())
    get length() {
        return this.data.length;
    }
    //taking the data from above and and using the left and right indexes in the array as arguments, we are saying the the left index is greater than the right index then we want to swap them.  So 
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
const collection1 = new NumbersCollection([1, 2, 3]);
collection1.length;
