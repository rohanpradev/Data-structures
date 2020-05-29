/**
 * @fileoverview Priority Queues
 * @author Colt_Steele Udemy
 **/

//#region Priority Queues

/**
 * @definition
 * A data structure where each element has a priority.
 * Elements with higher priorities are served before elements with lower priorities
 *
 * @example
 *   [   priority:3 😩    priority:1 🙂    priority:2 ⌚    priority:5 😮   priority:4 🙀   ]
 *
 * Iterate over the entire thing to find the highest priority element
 *
 * @pseudocode
 * Write a min Binary Heap - lower number means higher priority.
 * Each node has a value and priority. Use the priority to build the heap.
 * @method enqueue accepts a value and priority,
 * makes a new node and puts it in the right spot based off of its priority
 * @method dequeue removes root element, returns it, and rearranges heap using priority
 */

/**
 * @class Node
 * @property value
 * @property priority
 */

class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(value, priority) {
		const node = new Node(value, priority);
		this.values.push(node);
		this.bubbleUp();
	}
	/**
	 * 🌊
	 */
	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIdx = Math.floor((index - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[index] = parent;
			index = parentIdx;
		}
	}

	dequeue() {
		const min = this.values[0];
		let end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	}

	/**
	 * 🎿
	 */
	sinkDown() {
		let index = 0;
		let element = this.values[0];
		while (true) {
			let leftChildIdx = 2 * index + 1;
			let rightChildIdx = 2 * index + 2;
			let length = this.values.length;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) swap = leftChildIdx;
			}

			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				)
					swap = rightChildIdx;
			}

			if (swap === null) break;
			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
	}
}

// TESTING VALUES

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

//#endregion
