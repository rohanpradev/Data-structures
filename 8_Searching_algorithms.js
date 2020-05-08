/**
 * @fileoverview SEARCHING ALGORITHMS
 * This section contains all information aboutvarious search algorithms
 * @author Colt_Steele Udemy
 *
 * @description
 * Describe what a searching algorithm is
 * Implement linear search on Arrays
 * Implement binary search on sorted arrays
 * Implement a naive string searching algorithm
 * Implement the KMP string searching algorithm
 *
 * **/

//#region Linear search

/**
 * @function linearSearch
 * which takes an array and searches for a value present in it and
 * if found it returns the index of element where found
 * Otherwise return -1
 *
 * @example
 * linearSearch([1, 2, 3], 3) //2
 * linearSearch([1, 2, 3], 0) //-1
 *
 * @param {Array<string | number>} arr
 * @param {string | number} val
 * @returns
 */

function linearSearch(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}

//#endregion

//#region Binary search

/**
 * @description
 * Binary search is a much fatser form of search
 * Rather than eliminate oneelement at a time,
 * you can eliminate half of the remaining elemets at a time
 *
 * Binary search only works on sorted arrays!
 *
 * Based on divide and conquer strategy
 *
 * @function binarySearch
 * This function accepts a sorted array and a value
 * Create a left pointer at the start of the array, and a right pointer at the end of the array
 * while left pointer comes before right pointer:
 * * Create a pointer in the middle
 * * If you find the value return the index
 * * If value is too small, move the left pointer up
 * * If the value is too large, move the right pointer down
 * If you nevr find the value return -1
 *
 * @param {Array} arr which is a sorted array
 * @param {number | string} val
 *
 */

function binarySearch(arr, val) {
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor((left + right) / 2);
	while (arr[mid] !== val && left <= right) {
		if (val < arr[mid]) right = mid - 1;
		else left = mid + 1;
		mid = Math.floor((left + right) / 2);
	}
	return arr[mid] === val ? mid : -1;
}

//#endregion
