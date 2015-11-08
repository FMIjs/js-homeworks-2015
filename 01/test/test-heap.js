
var chai = require('chai');
var Heap = require('../binary_heap');
var should = chai.should();

describe('BinaryHeap', function() {
	var heap;
	beforeEach(function(done) {
		heap = new Heap();
		done();
	})

	it('should report empty', function(done) {
		heap.isEmpty().should.be.true;
		done();
	});

	it('should support insertion', function(done) {
		var first = heap.add(2);
		var second = heap.add(3);
		first.should.equal(0);
		second.should.equal(0);
		done();
	});

	it('should report top element', function(done) {
		heap.add(42);
		heap.add(2);
		heap.top().should.equal(42);

		heap.add(100);
		heap.top().should.equal(100);
		done();
	});

	it('should return extremum', function(done) {
		heap.add(42);
		heap.add(2);
		heap.add(22);
		heap.extract().should.equal(42);
		heap.extract().should.equal(22);
		done();
	});

	it('should support changing keys', function(done) {
		var first = heap.add(42);
		var second = heap.add(22);
		second.should.equal(1);
		var newIdx = heap.changeKey(second, 62);
		newIdx.should.equal(0);
		done();
	});

});