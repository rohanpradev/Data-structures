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

