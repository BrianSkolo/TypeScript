interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex:number): boolean; //takes a left number and right number and has a boolean that says if they need to be swapped
    swap(leftIndex: number, rightIndex: number): void;
}
// here we need a collection to get collection property that we are trying to sort. For the collection we need a length so we know how many times we need to iterate through the collection, we need to compare two elements next to each other and give us a boolean to say weather they need to be swapped is true or false, and if true finally we need to swap two numbers/ indexes that are next to each other.  You can be an array of anything as long as you have a length and can give me value to compare and swap.
export abstract class Sorter {
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;
   
    sort(): void {
        const { length } = this;
        //these loops are confusing as fuck
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length -i -1; j++) { 
                console.log(i, j);                    
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}