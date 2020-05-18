/**
 * @fileoverview Doubly Linked Lists
 * @author Colt_Steele Udemy
 **/

/** Doubly Linked List
 * @definition
 *
 * Almost identical to Singly Linked List, except every node has another pointer,
 * to the "previous" node
 *
 * Better than Singly Linked Lists for finding nodes and can be done in half the time!
 * 
 * However they do take up more memoryconsidering the extra pointer
 */

//#region  Doubly Linked Lists

class Node {
	constructor(value) {
		this.value = value;
		this.next = this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = this.tail = null;
		this.length = null;
	}

	/** @method
	 * Add a new node tothe end of the Doubly linked list
	 *
	 * @pseudocode
	 * push should accept a value
	 * create a new Node with the value passed to the function
	 * If the head property is set to null, set the head and tail to be the newly created node
	 * If not, set the next property on the tail to be that node
	 * Set the previous property on the newly created node to be the tail
	 * Set the tail to be the newly created node
	 * Increment the length
	 * Return the Doubly linked list
	 *
	 * @param {any} val
	 * @returns {DoublyLinkedList}
	 */

	push(val) {
		const node = new Node(val);
		if (!this.head) this.head = this.tail = node;
		else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	/** @method pop
	 * Removing a node from the end of the Doubly Linked List.
	 *
	 * @pseuocode
	 * If there is no head return undefined
	 * Take the current tail in a variable to return later
	 * If the length is 1, set the head and tail to be null
	 * Update the tail to be the previous Node.
	 * Set the newTail's next to be null
	 * Decrement the length
	 * Return the removed node
	 *
	 * @returns {Node} the removed node
	 */

	pop() {
		let removed = this.tail || undefined;
		if (!this.head) return removed;
		else if (this.head === this.tail) {
			this.head = this.tail = null;
		} else {
			this.tail = removed.prev;
			this.tail.next = null;
			removed.prev = null;
		}
		--this.length;
		return removed;
	}

	/** @method shift
	 * Removing a node from the beginning of the Doubly Linked List.
	 *
	 * @pseudocode
	 * If the length is 0, return undefined
	 * Store the current head property in a variable (we'll call old head)
	 * If the length is 1
	 *
	 * 		set the head to be null
	 *
	 * 		set the tail to be null
	 *
	 * Update the head to be the next of the old head
	 * Set the head's prev property to be null
	 * Set the old head's next to null
	 * Decrement the length
	 * Return the old head
	 *
	 * @returns {Node| undefined} The node that was removed or undefined
	 */

	shift() {
		let oldHead = this.head || undefined;
		if (this.length === 0) return oldHead;
		else if (this.length === 1) this.head = this.tail = null;
		else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	/** @method unshift
	 * Adding a node to the beginning of the Doubly Linked List.
	 *
	 * @pseudocode
	 * Create a new node with the value thats passed to the function
	 * If the length is 0
	 *
	 * 		set the head to be the new node
	 *
	 * 		set the tail to be the new node
	 *
	 * Otherwise
	 *
	 * 		Set the prev property on the head of the list to be the new node
	 *
	 * 		Set the next property on the new node to be the head property
	 *
	 * 		Update the head to be the new head
	 *
	 * Increment the length
	 * Return the list
	 *
	 * @param {any} val
	 * @returns {DoublyLinkedList} the linked list
	 */

	unshift(val) {
		const node = new Node(val);
		if (this.length === 0) this.head = this.tail = node;
		else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
		this.length++;
		return this;
	}

	/** @method get
	 * Accessing a node in a Doubly Linked List by its position.
	 *
	 * @pseudocode
	 * If the index is less than 0 or greater than or equal to the length, return null
	 * If the index is less than or equal to half the length of the list
	 *
	 * 		Loop through the list starting from the head and loop towards the middle
	 *
	 * 		Return the node once it is found
	 *
	 * If the index is greater than half the length of the list
	 *
	 * 		Loop through the list starting from the tail and loop towards the middle
	 *
	 * 		Return the node once it is found
	 *
	 * @param {number} index
	 * @returns {Node} the node at the position in linked list
	 */

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let temp, count;
		if (index > Math.floor(this.length / 2)) {
			temp = this.tail;
			count = this.length - 1;
			while (count !== index) {
				temp = temp.prev;
				count--;
			}
		} else {
			count = 0;
			temp = this.head;
			while (count !== index) {
				temp = temp.next;
				count++;
			}
		}
		return temp;
	}

	/** @method set
	 * Replacing the value of a node in a Doubly Linked List.
	 *
	 * @pseudocode
	 * Create a variable which is the result of get method at the index passed to the function
	 * 	If the get method returns a valid node, set the value of the node to be the value passed to the function
	 *	Return true
	 * Otherwise return false
	 *
	 * @param {number} index
	 * @param {any} val
	 * @returns {boolean} true if value was set or else false
	 */

	set(index, val) {
		const node = this.get(index);
		if (!node) return false;
		node.value = val;
		return true;
	}

	/** @method insert
	 * Adding a node in the Doubly Linked List by a certain position.
	 *
	 * @pseudocode
	 * If index is less than zero or greater than or equal to the length, return false.
	 * If the index is 0, unshift
	 * If the index is the same as the length, push
	 * Use the get method to accept the index - 1
	 * Set the next and prev properties on the correct nodes to link everything together
	 * Increment the length
	 * Return true
	 *
	 *
	 * @param {number} index
	 * @param {any} val
	 * @returns {boolean} if inserted then true or else false
	 */

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		else if (index === this.length) return !!this.push(val);
		else {
			let node = new Node(val);
			// Get the previous and after node
			const prevNode = this.get(index - 1);
			const afterNode = prevNode.next;
			// Insert the new node by modifying the links to point to previous and next nodes
			(node.prev = prevNode), (node.next = afterNode);
			// Change the previous and after node next and prev values to the new node
			(prevNode.next = node), (afterNode.prev = node);
			// Increment length and then return true
			this.length++;
			return true;
		}
	}

	/** @method remove
	 * Removing a node in the Doubly Linked List by a certain position.
	 *
	 * @pseudocode
	 * If index is less than zero or greater than or equal to the length, return undefimed.
	 * If the index is 0, shift
	 * If the index is the same as the length -1, pop
	 * Use the get method to retrieve the item to be removed
	 * Update the next and prev properties to remove the found node from the list
	 * Set the next and prev on the found node to be null
	 * Decrement the length
	 * Return the removed node
	 *
	 * @param {number} index
	 * @returns {Node | undefined} removed node or else undefined
	 */

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift(val);
		else if (index === this.length - 1) return this.pop();
		else {
			const removedNode = this.get(index);
			const prevNode = removedNode.prev;
			const afterNode = removedNode.next;
			// Get the next and previous node from the removed node
			prevNode.next = afterNode;
			afterNode.prev = prevNode;
			// Set the prev and next of the removedNode to be null (Sever all ties from the node)
			removedNode.next = null;
			removedNode.prev = null;
			// Decrement the length and return the removed node
			this.length--;
			return removedNode;
		}
	}
}

//#endregion
