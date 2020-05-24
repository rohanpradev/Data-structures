/**
 * @fileoverview Queues
 * @author Colt_Steele Udemy
 **/

/** Queues
 * @definition
 *
 * A data structure that abides by FIFO principle!
 *
 * The first element added to the queue will be the first element removed from the queue
 *
 * @example
 * Think about a line of people waiting to buy tickets.
 * First come first serve basis is an example
 *
 * How do we use them in programming:
 *  Background tasks
 *  Uploading resources
 *  Printing / Task processing
 *
 **/

//#region Array implementation of Queues

/**
 * Using Arrays to implement Queues
 *  Could use shift and push
 *  or unshift and pop better approach
 */

const q = [];

// Adding to the end
q.push('FIRST'); // ['FIRST']
q.push('SECOND'); // ['FIRST', 'SECOND']
q.push('THIRD'); // ['FIRST', 'SECOND', 'THIRD']

// Removing from the beginning

q.shift(); // 'FIRST'
q.shift(); // 'SECOND'
q.shift(); // 'THIRD'

//#endregion

//#region Queues Linked List Implementation

/** @class Node
 * Helper class to keep track of the elements in the queue
 *
 * @property next -> points to the next node in the queue or undefined
 * @property value -> Stores the value
 */

class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

/** @class Queue
 * Implementation of queue
 *
 * @constructor Initializes the following properties as shown below
 * @property first
 * @property last
 * @property size
 */

class Queue {
	constructor() {
		this.size = 0;
		this.first = null;
		this.last = null;
	}

	/**@method enqueue
	 * Adds a value to the queue at the end.
	 *
	 * @pseudocode
	 * The function should accept a value
	 * Create a new node with that value
	 * If there are no nodes in that queue, set the first and last property to be the newly created node
	 * Otherwise, set the next property on the current last to be that node,
	 * and then set the last property of that queue to be that node
	 * Increment the size of queue by 1
	 * Return size
	 *
	 * @param {any} val value to be stored in the queue
	 * @returns {number} the size of the queue
	 **/

	enqueue(val) {
		const node = new Node(val);
		if (!this.first) this.first = this.last = node;
		else {
			this.last.next = node;
			this.last = node;
		}
		return ++this.size;
	}

	/**@method dequeue
	 *  Removes a value from the queue from the beginning.
	 *
	 * @pseudocode
	 * If there is no first property, then return null
	 * Store the first property in the variable
	 * See if the first property is the same as the last (check if there is only 1 node).
	 * If so, set the first and last node to be null
	 * Decrement the size of queue by 1
	 * Return size
	 *
	 * @returns {any} value of removed value from queue
	 **/

	dequeue() {
		if (!this.first) return null;
		let removed = this.first;
		if (this.first === this.last) this.last = null;
		this.first = this.first.next;
		this.size--;
		return removed.value;
	}
}

//#endregion
