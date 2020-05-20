/**
 * @fileoverview Stack
 * @author Colt_Steele Udemy
 **/

/** Stack
 * @definition
 *
 * A data structure that abides by LIFO principle!
 *
 * The last element added to the stack will be the first element removed from the stack
 *
 * @example
 * Think about a stack of plates or a stack of markers, or a stack of ....anything
 * As you pile things up the last thing(or topmost thing) is what gets removed first.
 * Actual implementation is used in the Call Stack
 **/

//#region Stack

/**
 * @description
 * Array implementation of a stack
 * We can use push and pop methods of an array to create a stack
 * We can also use shift and unshift methods of an array to create a stack
 * But since shift and unshift are slighly more expensive(due to reindexing),
 * we could rather use push and pop
 */

const stack = [];

stack.push(10); // [10]
stack.push(20); // [10, 20]
stack.push(30); // [10, 20, 30]

stack.pop(); // 30
stack.pop(); // 20
stack.pop(); // 10

//#endregion

//#region Stack main implementation

/**
 * @class Node
 * Helper class to keep track of the elements in the stack
 *
 * @property next -> points to the next node in the stack or undefined
 * @property value -> Stores the value
 */

use('strict');

class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

/**
 * @class Stack
 * Implementation of stack
 *
 * @constructor Initializes the following properties as shown below
 * @property first
 * @property last
 * @property size
 */

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/**@method push
	 *
	 * @pseudocode
	 * The function should accept a value
	 * Create a new node with that value
	 * If there are no nodes in that stack, set the first and last property to be the newly created node
	 * If there is atleast one node, create a varibale that stores the current first property on the stack
	 * Reset the first property to the newly created node
	 * Set the next property on the node to be the previously created variable
	 * Increment the size of stack by 1
	 * Return size
	 *
	 * @param {any} val value to be stored in the stack
	 * @returns {number} the size of the stack
	 **/

	push(val) {
		const node = new Node(val);
		if (this.size === 0) this.first = this.last = node;
		else {
			let current = this.first;
			this.first = node;
			node.next = current;
		}
		return ++this.size;
	}

	/**@method pop
	 *
	 * @pseudocode
	 * If there are no nodes in the stack, return null
	 * Create a temporary variable to store the first property on the stack
	 * If there is only 1 node, set the first and last property to be null
	 * If there is more than 1 node, set the first property to be the next property on the current first
	 * Decrement the size of stack by 1
	 * Return the removed(temporary variable) value
	 *
	 * @returns {any} value of the removed node
	 */

	pop() {
		if (this.size <= 0) return null;
		const temp = this.first;
		if (this.size === 1) {
			this.last = null;
		}
		this.first = temp.next;

		this.size--;
		return temp.value;
	}
}

//#endregion
