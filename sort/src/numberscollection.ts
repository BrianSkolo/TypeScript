import { Sorter } from "./sorter";
//class called numbers collection that has a reference to the data that we are going to sort (constructor)
export class NumbersCollection extends Sorter {
    constructor (public data: number[]) {
        super();
    }
    //get makes it so when you call length (at the bottom of the code) you don't need a bracket (length())
    get length(): number {
        return this.data.length;
    }
    //taking the data from above and and using the left and right indexes in the array as arguments, we are saying the the left index is greater than the right index then we want to swap them.  So 
    compare(leftIndex: number, rightIndex: number): boolean {
         return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}

const collection1 = new NumbersCollection([1,2,3]);
collection1.length;