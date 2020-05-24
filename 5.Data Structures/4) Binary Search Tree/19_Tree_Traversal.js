/**
 * @fileoverview Tree Traversal Techniques
 * @author Colt_Steele Udemy
 **/

//#region Introduction

/**
 * @description
 * There are mainly two ways to traverse a tree
 *      Depth First Search (DFS)
 *      Breadth First Search (BFS)
 *
 *
 * @summary Breadth First Search (BFS)
 *
 *  ---------->   10
 *              /    \
 *  -------->  6 ---> 15
 *           / \       \
 * ------>  3   8 ---> 20
 *
 *      [10, 6, 15, 3, 8, 20]
 *
 **/

//#endregion

//#region Breadth First Search

/**
 * @summary BFS
 * Traverse the tree in BFS
 *
 * @pseudocode
 * Create a queue(this can be an array) and a varibale to store the values of node visited.
 * Place the root node in the queue
 * Loop as long as there is anything in a queue
 *      Dequeue a node from the queue and push the value of the node into variable that stores the nodes
 *      If there is a left property on the node dequeued - add it to the queue
 *      If there is a right property on the node dequeued - add it to the queue
 *
 * @method bfs
 * @param { BinarySearchTree } tree
 * @returns { Array<any> } an array of values traversed in BFS
 */

function bfs(tree) {
	const queue = tree.root ? [tree.root] : [];
	const data = [];
	while (queue.length) {
		let node = queue.shift();
		data.push(node.value);
		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	}
	return data === [] ? undefined : data;
}

//#endregion

//#region Depth First Search PreOrder

/** DFS - PreOrder
 * Visit the node first then add its children
 *
 * @example
 *            10							[10, 6, 3, 8, 15, 20]
 *          /    \
 *         6     15
 *       /  \     \
 *      3   8     20
 *
 * @pseudocode
 * Create a variable to store the values of nodes visited
 * Store the root of BST in a variable called current
 * Write a helper function which accepts a node:
 *
 * 		Push the value of node to the variable that stores the values
 *
 * 		If the node has a left property, call the helper function
 * 		with the left property on the node
 *
 * 		If the node has a right property, call the helper function
 * 		with the right property on the node
 *
 * @method dfs_pre
 * @param { BinarySearchTree } tree
 * @returns { Array<any> } an array of values traversed in DFS preOrder
 */

function dfs_pre(tree) {
	const values = [];
	function traverse(node) {
		values.push(node.value);
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	}
	traverse(tree.root);
	return values;
}

//#endregion

//#region Depth First Search PostOrder

/** DFS - PostOrder
 * Visit the all children first then the root node
 *
 * @example
 *            10							[3, 8, 6, 20, 15, 10]
 *          /    \
 *         6     15
 *       /  \     \
 *      3   8     20
 *
 * @pseudocode
 * Create a variable to store the values of nodes visited
 * Store the root of BST in a variable called current
 * Write a helper function which accepts a node:
 *
 * 		If the node has a left property, call the helper function
 * 		with the left property on the node
 *
 * 		If the node has a right property, call the helper function
 * 		with the right property on the node
 *
 * 		Push the value of node to the variable that stores the values
 *
 *		Invoke the helper function with the current variable
 *
 * Return the array of values
 *
 * @method dfs_post
 * @param { BinarySearchTree } tree
 * @returns { Array<any> } an array of values traversed in DFS PostOrder
 */

function dfs_post(tree) {
	const values = [];
	function traverse(node) {
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
		values.push(node.value);
	}
	traverse(tree.root);
	return values;
}

//#endregion

//#region Depth First Search InOrder

/** DFS - PostOrder
 * Visit the all children first then the root node
 *
 * @example
 *            10							[3, 8, 6, 10, 15, 20]
 *          /    \
 *         6     15
 *       /  \     \
 *      3   8     20
 *
 * @pseudocode
 * Create a variable to store the values of nodes visited
 * Store the root of BST in a variable called current
 * Write a helper function which accepts a node:
 *
 * 		If the node has a left property, call the helper function
 * 		with the left property on the node
 *
 * 		Push the value of node to the variable that stores the values
 *
 * 		If the node has a right property, call the helper function
 * 		with the right property on the node
 *
 *		Invoke the helper function with the current variable
 *
 * Return the array of values
 *
 * @method dfs_in
 * @param { BinarySearchTree } tree
 * @returns { Array<any> } an array of values traversed in DFS InOrder
 */

function dfs_in(tree) {
	const values = [];
	function traverse(node) {
		if (node.left) traverse(node.left);
		values.push(node.value);
		if (node.right) traverse(node.right);
	}
	traverse(tree.root);
	return values;
}

//#endregion
