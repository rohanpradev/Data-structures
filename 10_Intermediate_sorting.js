/**
 * @fileoverview INTERMEDIATE SORTING ALGORITHMS
 * This section contains all information about various sorting algorithms
 * @author Colt_Steele Udemy
 *
 * Merge Sort
 * Quick Sort
 * Radix Sort
 *
 * **/

//#region Merge Sort

/**
 * @description
 * Its a combination of two things - merging and sorting
 * Exploits the fact that arrays of 0 or 1 elements are always sorted.
 * Works by decomposing an array into smaller arrays of 0 or 1 elements,
 * then building up a newly sorted array
 *
 * @example
 *
 *
 *                [    8,    3,    5,    4,    7,    6,    1,    2    ]
 *
 *         [    8,    3,    5,    4    ]        [    7,    6,    1,    2    ]
 *
 *    [    8,    3    ]   [    5,   4    ]    [    7,    6    ]   [    1,    2    ]
 *
 *  [  8  ]    [  3  ]    [  5  ]    [  4  ]    [  7  ]    [  6  ]    [  1  ]    [  2  ]
 *
 *    [    3,    8    ]   [    4,   5    ]    [    6,    7    ]   [    1,    2    ]
 *
 *         [    3,    4,    5,    8    ]        [    1,    2,    6,    7    ]
 *
 *                [    1,    2,    3,    4,    5,    6,    7,    8    ]
 *
 *
 *
 *
 */

/**
 * @function merge
 * In order to implement merge sort, it's useful to first implement
 * a function responsible for merging two sorted arrays
 * Given two arrays which are sorted,this helper function should
 * create a new array which is also sorted,
 * and consists of all of the elments in the two input arrays
 *
 * This function should run in O(n + m) time and O(n + m) space and
 * should not modify the parameters passed to it
 *
 * @pseudocode
 * Create an empty array,take a look at the smallest values in each input array.
 * While there are still values we havent looked at...
 *
 *      If the value in the first array is smaller than the value in the second array,
 *      push value in the first array into our results and move on to the next value in the first array.
 *
 *      If the value in the first array is larger than the value in the second array,
 *      push the value in the second array into our results and move on the next value in the second arrray.
 *
 *      Once we exhaust one array, push all the remaining valuesfrom the array.
 *
 * @example
 * merge([1, 10, 50], [2, 14, 99, 100]); // [1, 2, 10, 14, 50, 99, 100]
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} a merged array
 *
 */

function merge(arr1, arr2) {
	let result = [];
	let i = 0,
		j = 0;

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

/**
 * @pseudocode
 * break an array into halves until you have arrays that are empty or have one element
 */

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}
// Big O(n log n)

//#endregion

//#region Quick Sort

/**
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
 * Works by selecting one element called (called the "pivot") and finding the index where the pivot
 * should end up in the sorted array
 *
 */

//#endregion
