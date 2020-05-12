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

//#endregion
