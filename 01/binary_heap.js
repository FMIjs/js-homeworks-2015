var BinaryHeap = function(list){
        var self = this;
        if(!(list instanceof Array)) return this;  //or use Array.isArray(list)
        list.forEach(function(el){
            self.insert(el);
        });
    };

BinaryHeap.prototype = Object.create(Array.prototype);

BinaryHeap.prototype.parentIndex = function(i){
    return Math.floor(i/2);
};

BinaryHeap.prototype.leftIndex = function(i){
    return (2 * i) + 1;
};

BinaryHeap.prototype.rightIndex = function(i){
    return (2 * i) + 2;
};

BinaryHeap.prototype.parentElement = function(i){
    return this[this.parentIndex(i)];
};


BinaryHeap.prototype.leftElement = function(i){
    return this[this.leftIndex(i)];
};

BinaryHeap.prototype.rightElement = function(i){
    return this[this.rightIndex(i)];
};

BinaryHeap.prototype.getMinimum = function(){
    var lastIndex = this.length - 1;
    this.swap(0, lastIndex);
    var result = this.pop();
    this.bubbleDown();
    return result;
};

BinaryHeap.prototype.add = function(number) {
    return this.insert(number);
};

BinaryHeap.prototype.isEmpty = function(){
    return this.length === 0;
};

BinaryHeap.prototype.insert = function(value){
    this.push(value);
    this.bubbleUp();
    return this.toString();
};

BinaryHeap.prototype.swap = function(firstIndex, secondIndex){
    var tmp = this[firstIndex];
    this[firstIndex] = this[secondIndex];
    this[secondIndex] = tmp;
};

BinaryHeap.prototype.bubbleUp = function(){
    var index = this.length - 1;
    while(this.parentElement(index) > this[index]){
        var parentIndex = this.parentIndex(index);
        this.swap(index, parentIndex);
        index = parentIndex;
    }
};

BinaryHeap.prototype.bubbleDown = function(){
    var index = 0;
    var rightValue = null;
    var leftIndex = null;
    var currentValue = null;
    while(this.leftElement(index)){
        leftValue = this.leftElement(index);
        rightValue = this.rightElement(index);
        currentValue = this[index];
        if(currentValue > leftValue || currentValue > rightValue){
            if(leftValue > rightValue){
                this.swap(this.rightIndex(index), index);
                index = this.rightIndex(index);
            }else{
                this.swap(this.leftIndex(index), index);
                index = this.leftIndex(index);
            }
        }else{
            break;
        }
    }
};

BinaryHeap.prototype.top = function() {
    return this[0];
};

BinaryHeap.prototype.extract = function() {
    return this.getMinimum();
};

module.exports = BinaryHeap;