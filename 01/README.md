# BinaryHeap модул

Превърнете в Node модул библиотеката за BinaryHeap от [задача 4](https://github.com/FMIjs/js-lectures-2015/blob/master/tasks/03/README.md) от последното упражнение.

Модулът трябва да е във файл **binary_heap.js** и да поддържа следния интерфейс за зареждане, плюс всички методи изброени в условието:

```javascript
    var BinaryHeap = require('./binary_heap');
    var myHeap = new BinaryHeap([4, 7, 2]);

    myHeap.insert(1);
    console.log(myHeap.isEmpty());    //false
    console.log(myHeap.getMinimum()); //1
```
