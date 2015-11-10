var BinaryHeap = function (list) {
	var self = this;
	if (Array.isArray(list)) {
		list.forEach(function (item) { self.insert(item); });
	}
}


BinaryHeap.prototype = Object.create(Array.prototype);
	
// Method definitions
BinaryHeap.prototype.swapNodes = function (firstIx, secondIx) {
	var swapper = this[firstIx];
	this[firstIx] = this[secondIx];
	this[secondIx] = swapper;
}

BinaryHeap.prototype.parentIndex = function (ix) {
	return (ix === 0 ? undefined : Math.floor((ix - 1) / 2));
};

BinaryHeap.prototype.leftIndex = function (ix) {
	return (2 * ix) + 1;
};

BinaryHeap.prototype.rightIndex = function (ix) {
	return (2 * ix) + 2;
};

BinaryHeap.prototype.parentElement = function (ix) {
	return (ix === 0 ? undefined : this[this.parentIndex(ix)]);
};

BinaryHeap.prototype.leftElement = function (ix) {
	return this[this.leftIndex(ix)];
};

BinaryHeap.prototype.rightElement = function (ix) {
	return this[this.rightIndex(ix)];
};

BinaryHeap.prototype.getMinimum = function () {
	// Also does a pop according to the example in the lecture
	var result;
	this.swapNodes(0, this.length - 1);
	result = this.pop();
	this.bubbleDown(0); // Restore heap invariants
	return result;
};

BinaryHeap.prototype.isEmpty = function () {
	return this.length === 0;
};

BinaryHeap.prototype.bubbleUp = function (ix) {
	var currentIx = ix,
		parentIx;
	while (this.parentElement(currentIx) > this[currentIx]) {
		parentIx = this.parentIndex(currentIx);
		this.swapNodes(currentIx, parentIx);
		currentIx = parentIx;
	}
};

BinaryHeap.prototype.bubbleDown = function (ix) {
	var currentIx = ix,
		right,
		left,
		current,
		rightIx,
		leftIx;

	while (this.leftElement(currentIx)) {
		left = this.leftElement(currentIx);
		right = this.rightElement(currentIx);
		current = this[currentIx];
		if (current > left || current > right) {
			if (left > right) {
				rightIx = this.rightIndex(currentIx);
				this.swapNodes(rightIx, currentIx);
				currentIx = rightIx;
			} else {
				leftIx = this.leftIndex(currentIx);
				this.swapNodes(leftIx, currentIx);
				currentIx = leftIx;
			}
		} else {
			return;
		}
	}
};

BinaryHeap.prototype.insert = function (item) {
	this.push(item);
	this.bubbleUp(this.length - 1);
	return this.toString();
};

module.exports = BinaryHeap;