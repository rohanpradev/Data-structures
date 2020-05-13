/**
 * @fileoverview INTERMEDIATE SORTING ALGORITHMS (Radix Sort)
 * This section contains all information about various sorting algorithms
 * @author Colt_Steele Udemy
 *
 * Radix Sort
 *
 * **/

//#region Radix Sort

/**
 * @description
 * Radix sort is a special sorting algorithm that works on a list of numbers
 * It never makes comparisons between the elements!
 * It exploits the fact that information about size of a number
 * is encoded in the number of digits
 * More digits means bigger number!
 *
 */

/**
 * @description
 * In order to implement radix sort, it's helpful to build a few helper functions
 *
 * @method getDigit
 *
 * @example
 * getDigit(12345, 0); //5
 * getDigit(12345, 1); //4
 * getDigit(12345, 2); //3
 * getDigit(12345, 3); //2
 * getDigit(12345, 4); //1
 * getDigit(12345, 5); //0
 *
 * @param {number} num
 * @param {number} place
 * @returns the digit in "num" at the given place value.
 *
 */

//  1. Helper

function getDigit(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// 2. Helper

/**
 * @method digitCount
 * Counts the number of digits present in the parameter
 *
 * @example
 * digitCount(1); //1
 * digitCount(25); //2
 * digitCount(314); //3
 *
 * @param {number} num
 * @returns {number} the number of digits in num
 */

function digitCount(num) {
	return `${num}`.length || 0;
}

// 3.Helper

/**
 * @method mostDigits
 * Returns the maximum number of digits of the largest number in an array
 *
 * @example
 * mostDigits([1234, 56, 7]); //4
 * mostDigits([1, 1, 11111, 1, 1]); //5
 * mostDigits([12, 34, 56, 78]); //2
 *
 * @param {Array<number>} arr
 * @returns {number} the number of digits in the largest numbers in the list
 */

function mostDigits(arr) {
	let max = -Infinity;
	for (let ele of arr) {
		max = Math.max(max, digitCount(ele));
	}
	return max;
}

/** MAIN RADIX SORT
 *
 * @pseudocode
 * Define a function that accepts a list of numbers
 * Figure out how many digits the largest number has
 * Loop from k = 0 up to the largest number of digits
 * For each iteration of the loop:
 *
 *      Create buckets for each digit(0 to 9)
 *
 *      Place each number in the corresponding bucket place based on its kth digit
 *
 * Replace our existing array with values in our buckets, starting with 0 going up to 9
 * return the list at the end
 *
 * @method radixSort
 * @param {Array<number>} arr
 * @returns {Array<number>} a sorted array
 *
 */

function radixSort(arr) {
	const maxDigits = mostDigits(arr);
	for (let k = 0; k < maxDigits; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i, arr.length; i++) {
			digitBuckets[getDigit(arr[i], k)].push(arr[i]);
		}
		arr = [].concat(...digitBuckets);
	}
	return arr;
}

/**
 * Big O of Radix Sort
 * O(nk) where k is the number of digits and n is the length of the array
 * 
 */

//#endregion
