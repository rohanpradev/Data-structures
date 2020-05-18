/**
 * @fileoverview Singly Linked List
 * @author Colt_Steele Udemy
 **/

/** Linked List
 * @definition
 *
 * A data structure that contains a head, tail and length property
 *
 * Linked list consist of nodes and each node has a value and a pointer to another node or null
 *
 **/

//#region  Singly Linked Lists

/** Singly Linked Lists
 * Singly Linked list are an excellent alternative to arrays,
 * 	when insertion and deletion at the beginning are frequently required
 *
 * Arrays contain a built in index, whereas linked lists do not
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = this.tail = null;
		this.length = 0;
	}

	/** @method push
	 * Adds a new node to the end of the linked list
	 *
	 * @pseudocode
	 * push should accept a value
	 * create a new Node using the value passed to the function
	 * If there is no head property on the list , set head and tail to be the newly created node
	 * Otherwise set the next property on the tail to be the new node and set the tail property on the list
	 * to be the newly created node
	 * Return the linked list
	 *
	 * @param {any} val
	 * @returns {SinglyLinkedList} the linked list
	 */

	push(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	/** @method pop
	 * Removes a node from the end of the linked list
	 *
	 * @pseudocode
	 * If there are no nodes in the list return undefined
	 * Loop through the list until you reach the tail
	 * Set the next property of second to last property to be null
	 * Decrement the length of the list by 1
	 * Return the node removed.
	 *
	 * @returns {Node | undefined} the removed node
	 */

	pop() {
		let removed = this.tail || undefined;
		if (!this.head) {
			return removed;
		} else if (this.head === this.tail) {
			this.head = this.tail = null;
		} else {
			let current = this.head;
			while (current.next.next !== null) {
				current = current.next;
			}
			removed = current.next;
			this.tail = current;
			this.tail.next = null;
		}
		this.length--;
		return removed;
	}

	/** @method shift
	 * Removes a node from the beginning of the linked list
	 *
	 * @pseudocode
	 * If there are no nodes in the list return undefined
	 * Store current head property in a variable
	 * Set the head property to be the current head's next property
	 * Decrement the length by 1
	 * Returns the node removed
	 *
	 * @returns {Node | undefined} the removed node
	 */

	shift() {
		let removed = this.head || undefined;
		if (!this.head) {
			return removed;
		} else if (this.head == this.tail) {
			this.head = this.tail = null;
		} else {
			this.head = this.head.next;
		}
		this.length--;
		return removed;
	}

	/** @method unshift
	 * Adding a new node to the beginning of the linked list
	 *
	 * @pseudocode
	 * The function should accept a value
	 * Create a new node using value passed to the function
	 * If there is no head property on the list,set head and tail to the newly created list.
	 * Otherwise set the newly created node's next property to be current head property on the list.
	 * Increment the length of the list by 1.
	 * Return the list
	 *
	 * @param {any} val
	 * @returns {SinglyLinkedList} the linked list
	 */

	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	/** @method get
	 * Retrieving the node by its position in the linked list
	 *
	 *  @pseudocode
	 * The function should accept an index
	 * If the index is less than zero or greater than or equal to the length of the list, return null
	 * Loop through the list until you reach the index and return the node at the specified index
	 *
	 * @param {number} index
	 * @returns {Node} the node at the provided index
	 */

	get(index) {
		if (index >= this.length || index < 0) return null;
		let current = this.head;
		let counter = 0;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	/** @method set
	 * Changing the value of the node based on its position in the Linked List
	 *
	 * @pseudocode
	 * The function should accept an index and a value
	 * If the node is not found return false
	 * If the node is found, set the value of that node to be the value passed to the function
	 * and return true
	 *
	 * @param {number} index
	 * @param {any} value
	 * @returns {boolean}
	 */

	set(index, value) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.value = value;
			return true;
		}
		return false;
	}

	/** @method insert
	 * Insert a new node based on its position in the Linked List
	 *
	 * @pseudocode
	 * The function should accept an index and a value
	 * If index is less than 0 or greater than the length, return false
	 * If index is same as the length, push a new node to the end of the list.
	 * If the index is 0, unshift a new node to the start of the list,
	 * Otherwise using get method access node at index - 1.
	 * Set the next property on that node to be new node
	 * Set the next property on the new node to be the previous next
	 * Increment the length
	 * Return true
	 *
	 * @param {number} index
	 * @param {any} value
	 * @returns {boolean}
	 */

	insert(index, value) {
		if (index > this.length || index < 0) return false;
		if (index === this.length) this.push(value);
		else if (index === 0) this.unshift(value);
		else {
			let newNode = new Node(value);
			let prev = this.get(index - 1);
			let temp = prev.next;
			prev.next = newNode;
			newNode.next = temp;
			this.length++;
		}
		return true;
	}

	/** @method remove
	 * Removing a node from the Linked List at a specific position
	 *
	 * @pseudocode
	 * If index is less than zero or greater than or equal to length return undefined
	 * If index is same as length -1, pop
	 * If index is 0 use shift,
	 * Otherwise using get method access node at index - 1.
	 * Set the next property on that node to bethe next of the next node
	 * Decrement the length
	 * Return the value of the node removed.
	 *
	 * @param {number} index
	 * @returns {Node} the value of the node removed.
	 */

	remove(index) {
		if (!this.head || index >= this.length || index < 0) return undefined;
		else if (index === this.length - 1) return this.pop();
		else if (index === 0) return this.shift();
		else {
			let prev = this.get(index - 1);
			let removed = prev.next;
			prev.next = removed.next;
			this.length--;
			return removed;
		}
	}

	/** @method reverse
	 * Reversing the Linked List in place
	 *
	 * @pseudocode
	 * Swap the head and tail
	 * Create a variable called next.
	 * Create a variable called prev
	 * Create a variable called node and initialize it to the head property
	 * Set next to be the next property on whatever node is
	 * Set the next property on the node to be whatever prev is
	 * Set the previous to be the value of the node variable
	 * Set the node variable to be the value of the next variable
	 *
	 * @returns {SinglyLinkedList} the reverse of the Linked list
	 */

	reverse() {
		if (!this.head) return undefined;
		else if (this.head === this.tail) return this;
		else {
			// Step 1 Swap head and tail
			let node = this.head;
			this.head = this.tail;
			this.tail = node;
			// Step 2 Create vatiables next and prev
			let next,
				prev = null;

			for (let i = 0; i, this.length; i++) {
				next = node.next;
				node.next = prev;
				// Move to the next step
				prev = node;
				node = next;
			}
			return this;
		}
		return this;
	}

	/** @method print
	 * Printing the values in the Linked List from the start
	 *
	 * @returns {Array} an array containing the values in the linked list
	 */

	print() {
		if (!this.head) return undefined;
		let temp = this.head;
		let values = [];
		while (temp.next !== null) {
			values.push(temp.value);
			temp = temp.next;
		}
		values.push(temp.value);
		return values;
	}
}

//#endregion
