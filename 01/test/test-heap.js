var chai = require('chai');

var BinaryHeap = require('../binary_heap');

var should = chai.should();

describe('BinaryHeap', function() {
	var heap, list;
	beforeEach(function(done) {
		heap = new BinaryHeap();
		list = [4, 9, 5, 8, 7, 10, 2];
		done();
	})

	it('should report empty', function(done) {
		heap.isEmpty().should.be.true;
		done();
	});

	it('should be constructed from a list', function(done) {
		heap = new BinaryHeap([4, 2, 7]);
		heap.isEmpty().should.be.false;
		done();
	});

	it('should support insertion', function(done) {
		var first = heap.insert(2);
		var second = heap.insert(3);
		first.should.equal([2].toString());
		second.should.equal([2, 3].toString());
		done();
	});

	it('should report top element', function(done) {
		heap.insert(42);
		heap.insert(22);
		heap.getMinimum().should.equal(22);

		heap.insert(2);
		heap.getMinimum().should.equal(2);
		done();
	});

	//    2
	//  7   4
	// 9 8 10 5

	it('should return linked elements', function(done) {
		heap = new BinaryHeap(list);
		heap.parentElement(1).should.equal(2);
		heap.leftElement(2).should.equal(10);
		heap.rightElement(1).should.equal(8);
		chai.expect(heap.rightElement(4)).to.be.undefined;
		done();
	});

});