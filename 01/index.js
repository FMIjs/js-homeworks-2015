var BinaryHeap = require('./binary_heap');
var myHeap = new BinaryHeap([4, 7, 2]);

myHeap.insert(1);
console.log(myHeap.isEmpty());    //false
console.log(myHeap.getMinimum()); //1