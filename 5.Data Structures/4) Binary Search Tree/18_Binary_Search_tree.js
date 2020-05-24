/**
 * @fileoverview Trees
 * @author Colt_Steele Udemy
 **/

//#region Introduction

/**
 * @description
 * Trees are data structures that consist of nodes in a parent / child relationship
 *
 * @example
 *                                            2
 *                                         /  |  \
 *                                        9  12   8
 *                                      /   / | \  \
 *                                     2   1  7  2  44
 *
 * Lists - are Linear
 * Trees - are non linear
 *
 * @summary Tree terminology :
 *
 * @typedef Root - Top node in a tree
 * @typedef Child - A node directly connected with another node when moving away from the Root
 * @typedef Parent - The converse notion of a child
 * @typedef Siblings - A group of nodes with the same parent.
 * @typedef Leaf - A node with no children.
 * @typedef Edge - The connection between one node and another.
 *
 * @summary usage of trees:
 *
 *      HTML DOM
 *      Network Routing
 *      Abstract Syntax Trees
 *      Folders in Operating Sytem
 *      Computer File Systems
 */

//#endregion

//#region Binary Trees

/**
 * @description
 *
 * A binary tree can either have 0 children, 1 child or 2 children.
 * Can't have more than 2 children
 *
 *                                           1
 *                                         /   \
 *                                        5     12
 *                                      /  \     \
 *                                     6   3     11
 *
 * @summary Binary Search Trees(BST)
 *
 * A special type of binary tree in which every parent node has at most 2 children
 * Every node to the left of a parent node is always less than the parent
 * Every node to the right of a parent node is always greater than the parent
 *
 *                                           10
 *                                         /    \
 *                                        6     15
 *                                      /  \     \
 *                                     3   8     20
 *
 */

//#endregion

//#region  Binary Search Trees

/**
 * @class Node
 * This helper class is used to initialize a new node
 *
 * @property left -> which holds the left link of the newly created node, initially set to null
 * @property right -> which holds the right link of the newly created node, initially set to null
 *
 */

class Node {
	constructor(value) {
		this.value = value;
		this.left = this.right = null;
	}
}

/**
 * @class BinarySearchTree
 * This class is used to initialize a Binary Search Tree
 *
 * @property root -> which hold the root node of the tree
 *
 */

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	/**@method insert
	 * Adds a new node to the BST. It can be done recursively or iteratively.
	 *
	 * @pseudocode
	 * Create a new node
	 * Starting at the root:
	 *      Check if there is a root, if not -the root now becomes the new node!
	 *      If there is a root, check if the value of the new node is less than or greater than
	 *      the value of the node
	 *
	 *      If it is greater:
	 *          Check to see if there is a node to the right
	 *              If there is, move to that node and repeat these steps
	 *              If there not, add that node as the right property
	 *
	 *      If it is less:
	 *          Check to see if there is a node to the left
	 *              If there is, move to that node and repeat these steps
	 *              If there not, add that node as the left property
	 *
	 * @param {any} val value to be stored in the BST
	 * @returns { BinarySearchTree | undefined } the BST or undefined if duplicate is passed
	 *
	 **/

	insert(val) {
		const node = new Node(val);
		if (!this.root) this.root = node;
		else {
			let temp = this.root;
			while (true) {
				if (val > temp.value) {
					if (temp.right === null) {
						temp.right = node;
						break;
					}
					temp = temp.right;
				} else if (val < temp.value) {
					if (temp.left === null) {
						temp.left = node;
						break;
					}
					temp = temp.left;
				} else {
                    // Duplicate case
					return undefined;
				}
			}
		}
		return this;
	}

	/**@method find
	 * Adds a new node to the BST. It can be done recursively or iteratively.
	 *
	 * @pseudocode
	 * Create a new node
	 * Starting at the root:
	 *      Check if there is a root, if not - we are done searching!
	 *      If there is a root, check if the value of the new node is the value we are looking for.
	 *          If we found it, we're done
	 *      If not, check to see if the value is less than or greater than value of the root
	 *
	 *      If it is greater:
	 *          Check to see if there is a node to the right
	 *              If there is, move to that node and repeat these steps
	 *              If there not, we're done searching
	 *
	 *      If it is less:
	 *          Check to see if there is a node to the left
	 *              If there is, move to that node and repeat these steps
	 *              If there not, we're done searching
	 *
	 * @param {any} val value to be stored in the BST
	 * @returns { boolean } true if val is found or else false
	 *
	 **/

	find(val) {
		if (!this.root) return false;
		let temp = this.root;
		while (true) {
			if (temp.value === val) return true;
			else if (val > temp.value) {
				if (!temp.right) return false;
				temp = temp.right;
			} else {
				if (!temp.left) return false;
				temp = temp.left;
			}
		}
	}
}

/**
 * @example:
 *             10
 *      5              13
 *  2       7      11     16
 *
 */

//  INSERT TEST:
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

//#endregion
