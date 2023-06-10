"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    //gets data thats a string
    constructor(data) {
        this.data = data;
    }
    //gets the length of that string
    get length() {
        return this.data.length;
    }
    //compare a left index thats a number with a right index that's a number, its going to return a boolean, return the left indexed character lowercased compared to the right indexed character lowercased.
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLocaleLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join();
    }
}
exports.CharactersCollection = CharactersCollection;
