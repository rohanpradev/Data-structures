/**
 * @fileoverview Binary Heaps
 * @author Colt_Steele Udemy
 **/

//#region Introduction

/**
 * @definition
 * Very similar to Binary search trees, but with different rules!
 *
 * In MaxBinaryHeap, parent nodes are always larger than child nodes.
 * In MinBinaryHeap, parent nodes are always smaller than child nodes.
 *
 * @example
 *
 *        41
 *      /   \
 *    39     33
 *   / \     /
 * 18  27   12
 *
 * The above is an example of MaxBinaryHeap
 *
 * Each parent has atmost two child nodes.
 * The value of each parent node is always greater than its child nodes
 * In a max Binary Heap the parent is greater than the children,
 *  but there are no guarantees between sibling nodes.
 * A binary heap is as compact as possible.
 *  All the children of each node are as full as they can be and left children are filled out first
 *
 * @usage
 * Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
 * They are also used quite a bit, with graph traversal algorithms
 */

//#endregion

//#region Storing Heaps
/**
 * @description
 *
 * For any index of an array n...
 * The left child is stored at 2n + 1
 * The right child is stored at 2n + 2
 *
 * For any child node at the index n...
 * Its parent index is (n - 1) / 2    ->  (Remove the decimal)
 *
 */

//#endregion

//#region Insert

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	/**@method insert
	 * Insert a vlue into the Binary Heap
	 *
	 * Push the value into the values property on the heap
	 * Bubble the value up to its correct spot!
	 *
	 * @pseudocode
	 * Push the value into the values property on the heap
	 * bubble Up:
	 *
	 *      Create a variable called index which is the length of values property - 1
	 *
	 *      Create a variable called parentIndex which is the floor of (index - 1) / 2
	 *
	 *      Keep looping as long as the values element at the parentIndex is less than the values
	 *      at the child index
	 *
	 *          * Swap the value of the values element at the parentindex
	 *             with the value of element property at child index
	 *
	 *          * Set the index to be the parentIndex, and start over!
	 *
	 * @param {any} value
	 *
	 */

	// My Approach
	insert(value) {
		this.values.push(value);
		let currentIndex = this.values.length - 1;
		let parentIndex = Math.floor(currentIndex / 2);
		const swap = (arr, idx1, idx2) => {
			[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
		};
		while (value > this.values[parentIndex] && parentIndex >= 0) {
			swap(this.values, parentIndex, currentIndex);
			currentIndex = parentIndex;
			parentIndex = Math.floor(currentIndex / 2);
		}
	}

	// Author approach

	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element <= parent) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	/**@method extractMax
	 * Remove from a Heap
	 *
	 * @description
	 *
	 * 		   41 -----> To be removed
	 * 		 /   \
	 * 	   39	 33
	 *	  /  \ 	 /
	 * 	18   27  12
	 *
	 * @step Sinking Down
	 *
	 * 	       12 -----> Compare with left, right side and keep swapping with the larger value
	 * 		 /   \
	 * 	   39	 33
	 *	  /  \
	 * 	18   27
	 *
	 * @pseudocode
	 * Swap the first value in the values property with the last one.
	 * Pop from the values property, so you can return the value at the end.
	 * Have the new root "Sink Down" to the correct spot...
	 *
	 * 		* Your parent index starts at 0(the root)
	 *
	 * 		* Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
	 *
	 * 		* Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
	 *
	 *      * If left or right child is greater than the elemnt then swap,
	 * 		  if both left and right child is larger, swap with largest child
	 *
	 * 		* The child index you swapped to now becomes the new parent index.
	 *
	 * 		* Keep looping and swapping until neither child is larger than the element
	 *
	 * 		* Return the old root!
	 *
	 */

	extractmax() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max;
	}

	sinkDown() {
		let index = 0;
		const length = this.values.length - 1;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * index + 1;
			let rightChildIdx = 2 * index + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) swap = leftChildIdx;
			}

			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if ((swap === null && rightChild > element) || (swap && rightChild > leftChild)) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
	}
}

// TESTING VALUES
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

//#endregion
