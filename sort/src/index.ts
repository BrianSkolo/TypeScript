import { Sorter } from "./sorter";
import { NumbersCollection } from "./numberscollection";
import { CharactersCollection } from "./charcterscollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection1 = new NumbersCollection([10, 3, -5, 0])
// const sorter1 = new Sorter(numbersCollection1)
// sorter1.sort();
// console.log(numbersCollection1.data);

// const charcterscollection1 = new CharactersCollection('jsdfdsf');
// const sorter = new Sorter(charcterscollection1);
// sorter.sort();
// console.log(charcterscollection1.data);

const linkedList1 = new LinkedList();
linkedList1.add(500);
linkedList1.add(-10);
linkedList1.add(-3);
linkedList1.add(4);

const sorter1 = new Sorter(linkedList1);
sorter1.sort();
linkedList1.print();

 