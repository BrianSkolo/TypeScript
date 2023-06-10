import { Sorter } from "./sorter";

export class CharactersCollection extends Sorter{
    //gets data thats a string
    constructor(public data: string) {
        super();
    }
    //gets the length of that string
    get length(): number {
        return this.data.length;
    }
    //compare a left index thats a number with a right index that's a number, its going to return a boolean, return the left indexed character lowercased compared to the right indexed character lowercased.
    compare(leftIndex: number, rightIndex: number): boolean {
        return (
            this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLocaleLowerCase()
        );
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('');

        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join();
    }
}