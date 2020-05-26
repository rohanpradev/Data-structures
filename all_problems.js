/**
 * @fileoverview This file contains all exercise problems
 */

//#region  Recursion

function flatten(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			newArr = newArr.concat(flatten(arr[i]));
		} else {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

function reverse(str) {
	if (str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
	if (str.length === 1) return true;
	if (str.length === 2) return str[0] === str[1];
	if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
	return false;
}

function someRecursive(arr, cb) {
	if (arr.length === 0) return false;
	if (cb(arr[0])) return true;
	return someRecursive(arr.slice(1), cb);
}

function capitalizeFirst(arr, newArr = []) {
	if (arr.length === 0) return newArr;
	let str = arr[0];
	// newArr.push(str[0].toUpperCase() + str.slice(1)); // For first letter
	// newArr.push(str.toUpperCase()); //For entire word
	return capitalizeFirst(arr.slice(1), newArr);
}

function nestedEvenSum(obj, sum = 0) {
	for (let key in obj) {
		if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			sum += obj[key];
		} else if (typeof obj[key] === 'object') {
			sum += nestedEvenSum(obj[key]);
		}
	}
	return sum;
}

function stringifyNumbers(obj) {
	let newObj = {};
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

function collectStrings(obj) {
	let arr = [];
	for (let key in obj) {
		if (typeof obj[key] === 'string') {
			arr.push(obj[key]);
		} else if (typeof obj[key] === 'object') {
			arr = arr.concat(collectStrings(obj[key]));
		}
	}
	return arr;
}

//#endregion

//#region Search
function linearSearch(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}

function binarySearch(arr, val) {
	let start = 0;
	let end = arr.length - 1;
	let mid = Math.floor((start + end) / 2);
	while (start < end && arr[mid] !== val) {
		if (val > arr[mid]) start = mid + 1;
		else end = mid - 1;
		mid = Math.floor((start + end) / 2);
	}
	return arr[mid] === val ? mid : -1;
}

//#endregion

//#region Sort

function bubbleSort(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) {
			break;
		}
	}

	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (min !== i) {
			let temp = arr[min];
			arr[min] = arr[i];
			arr[i] = temp;
		}
	}
	return arr;
}

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

//#endregion

//#region Merge Sort, Quick Sort, Radix Sort

function merge(arr1, arr2) {
	let i = 0,
		j = 0;
	let result = [];

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}

	return result;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

// Quick Sort

// 1. Helper function

function pivot(arr, start = 0, end = arr.length - 1) {
	let pivot = arr[start];
	let pivotIdx = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			pivotIdx++;
			swap(arr, i, pivotIdx);
		}
	}
	if (pivotIdx !== start) {
		swap(arr, start, pivotIdx);
	}
	return pivotIdx;
}

const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// 2. QuickSort function

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIdx = pivot(arr, left, right);
		quickSort(arr, left, pivotIdx - 1);
		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}

// Radix Sort

function getLastDigit(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getDigitCount(num) {
	return `${num}`.length || 0;
}

function maxDigit(arr) {
	let max = -Infinity;
	for (let ele of arr) {
		max = Math.max(max, getDigitCount(ele));
	}
	return max;
}

function radixSort(arr) {
	let maxDigit = maxDigit(arr);
	for (let k = 0; k < maxDigit; k++) {
		var digitBucket = Array.from({ length: 10 }, () => []);

		for (let i = 0; i < arr.length; i++) {
			digitBucket[getLastDigit(arr[i], k)].push(arr[i]);
		}
		arr = [].concat(...digitBucket);
	}
	return arr;
}

//#endregion

// #region Singly Linked List

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

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		++this.length;
		return this;
	}

	pop() {
		let removed;
		if (!this.head) {
			return undefined;
		} else if (this.head === this.tail) {
			removed = this.head;
			this.head = this.tail = null;
		} else {
			let prev = this.head;
			while (prev.next.next !== null) {
				prev = prev.next;
			}
			removed = this.tail;
			this.tail = prev;
			this.tail.next = null;
		}
		this.length--;
		return removed;
	}

	shift() {
		let removed;
		if (!this.head) {
			return removed;
		} else if (this.head === this.tail) {
			removed = this.head;
			this.head = this.tail = null;
		} else {
			removed = this.head;
			this.head = this.head.next;
		}
		this.length--;
		return removed;
	}

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let temp = this.head;
		while (index !== counter) {
			temp = temp.next;
			counter++;
		}
		return temp;
	}

	set(index, val) {
		let node = this.get(index);
		if (!node) {
			return false;
		}
		node.value = val;
		return true;
	}

	insert(index, value) {
		if (index > this.length || index < 0) return false;
		if (index === 0) this.unshift(value);
		else if (index === this.length) this.push(value);
		else {
			let newNode = new Node(val);
			let prevNode = this.get(index - 1);
			let temp = prevNode.next;
			prevNode.next = newNode;
			newNode.next = temp;
			this.length++;
		}
		return true;
	}

	remove(index) {
		if (index >= this.length || index < 0 || !this.head) return undefined;
		else if (index === 0) return this.shift();
		else if (index === this.length - 1) return this.pop();
		else {
			let prev = this.get(index - 1);
			let removed = prev.next;
			prev.next = removed.next;
			this.length--;
			return removed;
		}
	}

	reverse() {
		if (!head) return undefined;
		else {
			let node = this.head;
			this.head = this.tail;
			this.tail = node;

			let next,
				prev = null;

			for (let i = 0; i < this.length; i++) {
				next = node.next;
				node.next = prev;

				prev = node;
				node = next;
			}

			return this;
		}
	}

	print() {
		let arr = [],
			temp = this.head;

		while (temp.next !== null) {
			temp = temp.next;
			arr.push(temp.value);
		}
		return arr;
	}
}

//#endregion

//#region Doubly Linked List

class Node {
	constructor(val) {
		this.value = val;
		this.prev = this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);
		if (this.length === 0) this.head = this.tail = node;
		else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	pop() {
		let removed = this.tail || undefined;
		if (!this.length) return removed;
		else if (this.length === 1) this.head = this.tail = null;
		else {
			this.tail = removed.prev;
			removed.prev = null;
			this.tail.next = null;
		}
		this.length--;
		return removed;
	}

	shift() {
		let removed = this.head || undefined;
		if (this.length === 0) return removed;
		else if (this.length === 1) this.head = this.tail = null;
		else {
			this.head = removed.next;
			this.head.prev = null;
			removed.next = null;
		}
		this.length--;
		return removed;
	}

	unshift(val) {
		const node = new Node(val);
		if (this.length === 0) this.head = this.tail = node;
		else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length || this.length === 0) return null;
		return this.loop(index, index > Math.floor(this.length / 2));
	}

	// Helper method to loop from start or end of the linked list
	loop(index, reverse) {
		let current = reverse ? this.head : this.tail;
		let counter = reverse ? 0 : this.length - 1;
		while (counter !== index) {
			current = reverse ? current.next : current.prev;
			reverse ? counter++ : counter--;
		}
		return current;
	}

	set(index, val) {
		let node = this.get(index);
		if (!node) return false;
		node.value = val;
		return true;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		const node = new Node(val);
		if (index === 0) this.unshift(val);
		else if (index === this.length) this.push(val);
		else {
			const prevNode = this.get(index - 1);
			const afterNode = prevNode.next;

			prevNode.next = node;
			node.prev = prevNode;

			node.next = afterNode;
			afterNode.prev = node;
			this.length++;
		}
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift(val);
		else if (index === this.length - 1) return this.pop();
		else {
			const removedNode = this.get(index);
			const beforeNode = removedNode.prev;
			const afterNode = removedNode.next;

			beforeNode.next = afterNode;
			afterNode.prev = beforeNode;

			removedNode.next = removedNode.prev = null;
			this.length--;
			return removedNode;
		}
	}

	reverse() {
		let current = this.head;
		let prev = null;
		while (current) {
			let next = current.next;
			current.next = prev;
			current.prev = next;

			prev = current;
			current = next;
		}
		this.head = this.tail;
		this.tail = prev;
		return this;
	}
}

//#endregion

//#region Stack
class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const node = new Node(val);
		if (!this.first) this.first = this.last = node;
		else {
			let temp = this.first;
			this.first = node;
			node.next = temp;
		}
		return ++this.size;
	}

	pop() {
		if (!this.first) return null;
		let removed = this.first;
		if (this.first === this.last) this.last = null;
		this.first = removed.next;
		this.size--;
		return removed.value;
	}
}

//#endregion

//#region Queue

class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const node = new Node(val);
		if (this.size === 0) this.first = this.last = node;
		else {
			this.last.next = node;
			this.last = node;
		}
		return ++this.size;
	}

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

//#region Trees

class Node {
	constructor(value) {
		this.value = value;
		this.left = this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const node = new Node(val);
		if (!this.root) this.root = node;
		else {
			let temp = this.root;
			while (true) {
				if (val > temp.value) {
					if (!temp.right) {
						temp.right = node;
						break;
					}
					temp = temp.right;
				} else if (val < temp.value) {
					if (!temp.left) {
						temp.left = node;
						break;
					}
					temp = temp.left;
				} else return undefined;
			}
		}
		return this;
	}

	find(val) {
		if (!this.root) return false;
		let temp = this.root;
		while (true) {
			if (temp.value === val) return true;
			else if (temp.value < val) {
				if (!temp.right) return false;
				temp = temp.right;
			} else {
				if (!temp.left) return false;
				temp = temp.left;
			}
		}
	}

	breadthFirstSearch() {
		const queue = this.root ? [this.root] : [];
		let values = [];
		while (queue.length) {
			let removed = queue.shift();
			values.push(removed.value);
			if (removed.left) queue.push(removed.left);
			if (removed.right) queue.push(removed.right);
		}
		return values.length ? values : undefined;
	}

	depthFirstSearch_preOrder() {
		if (!this.root) return undefined;
		let values = [];
		function traverse(node) {
			values.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return values;
	}

	depthFirstSearch_postOrder() {
		if (!this.root) return undefined;
		let values = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			values.push(node.value);
		}
		traverse(this.root);
		return values;
	}

	depthFirstSearch_inOrder() {
		if (!this.root) return undefined;
		let values = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			values.push(node.value);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return values;
	}
}

//#endregion

//#region Heaps

class BinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(value) {
		this.values.push(value);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.values.length - 1;
		let elem = this.values[index];

		while (index > 0) {
			let parentIdx = Math.floor((index - 1) / 2);
			let parent = this.values[parentIdx];
			if (elem <= parent) break;
			this.values[index] = parent;
			this.values[parentIdx] = elem;
			index = parentIdx;
		}
	}

	extractMax() {
		let max = this.values[0];
		let end = this.values[this.values.length - 1];
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max;
	}

	sinkDown() {
		let index = 0;
		let element = this.values[0];
		let length = this.values.length;
		while (true) {
			let leftChildIdx = 2 * index + 1;
			let rightChildIdx = 2 * index + 2;
			let swap = null;
			let leftChild, rightChild;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				swap = leftChildIdx;
			}

			if (rightChildIdx < length) {
				rightChild = this.values[leftChildIdx];
				if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) swap = rightChildIdx;
			}

			if (swap === null) break;
			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
	}
}

//#endregion
