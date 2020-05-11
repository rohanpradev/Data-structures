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

//#region Binary Serach Big O

/**
 * @description
 * Suppose we are searching for  13 in the array below
 * 	[2, 4, 5, 9, 11, 14, 15, 19, 21, 25, 28, 30, 50, 52, 60, 63]
 * 							 mid 									//mid is 19
 *
 * [2, 4, 5, 9, 11, 14, 15]
 *          mid    				// mid is 9
 *
 * [11, 14, 15]
 * 		mid         //mid is 14
 *
 * [11]
 *  mid
 *
 * Therefor 13 is not in this array,
 * @steps
 * array has 16 elements
 * took 4 steps to determine the result
 *
 * @example
 * To add another step we need to souble the number of elements
 * Let's search for 32
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35]
 *													   mid   // mid is 16
 *
 *  [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35]
 *								mid    // mid is 24
 *
 * [25, 26, 27, 28, 29, 30, 32, 35]
 * 			    mid  // mid is 28
 *
 *  [29, 30, 32, 35]
 *       mid      // mid is 30
 *
 * [32, 25]
 * mid   //mid is 32 hence end
 *
 * It took 5 steps to find the result for 32 elements
 * which is log base 2 n (for 16 elements ~ 2 * 2 * 2 * 2)
 * (for 32 elements ~ 2 * 2 * 2 * 2 * 2)
 * Therefore log 2 n
 *
 */

//#endregion

//#region Naive String Search

//#endregion
