/**
 * @fileoverview INTERMEDIATE SORTING ALGORITHMS (Quick Sort)
 * This section contains all information about various sorting algorithms
 * @author Colt_Steele Udemy
 *
 * Quick Sort
 *
 * **/

//#region Quick Sort

/**
 * @description
 *
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
 * Works by selecting one element called (called the "pivot") and finding the index where the pivot
 * should end up in the sorted array
 * Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.
 *
 * @example
 *
 * First num or "pivot"
 * 							First num: 5
 * 						   [    5,    2,    1,    8,    4,    7,    6,    3    ]
 *
 *
 * 							First num: 3				5
 * 								3     2,    1,    4     	  7,    6,    8
 *
 *
 *
 * 														5
 * 										   3				  7,    6,    8
 * 								1	  	    	  4
 *									  2
 *
 *
 * 														5
 * 										   3				        7
 * 								1	  	    	  4			  6           8
 *									  2
 **/

/** PART 1 - IMPLEMENTING THE HELPER FUNCTION
 *
 * In order to implement quick sort, its useful to first implement
 * a function responsible for rearranging elements in an array on either side of the pivot.
 *
 * @description for helper function:
 *
 * Given an array, this helper function should designate an element as the pivot.
 * It should rearrange the elements in the array
 * so that all values less than the pivot are moved to the left of the pivot,
 * and all the values greater than the pivot are moved to the right of the pivot.
 * The order of the elements on either side of the pivot doesnt matter.
 * The helper should do this in place, that is, it should not create a new array.
 * When complete, the helper should return the index of the pivot.
 *
 *
 * @see
 * The runtime of quick sort depends in part on how one selects the pivot
 * Ideally, the pivot should be chosen so that it's roughly the median value in the data you're sorting
 *
 * @pseudocode
 * Write a @function pivot
 * which accepts three arguments:
 * an array, a start index, and an end index(these can default to 0 and the array length -1)
 * Grab the pivot from the start of the array
 * Store the current pivot index in a variable (this will keep track of where the pivot should end up)
 * Loop through array from the start until the end
 *
 * 		If the pivot is greater than the current element, increment the pivot index variable
 * 		and then swap the current element with the element at the pivot index.
 *
 * Swap the starting number(i.e the pivot) with the pivot index,
 * Return the pivot index.
 *
 * @example
 * pivot([4,8,2,1,5,7,6,3]); // 3
 *
 * array should look like this [3, 2, 1, 4, 5, 7, 6, 8]
 *
 *
 * @param {Array} arr
 * @param {number} start
 * @param {number} end
 * @returns {number} which is the pivot index
 */

function pivot(arr, start = 0, end = arr.length - 1) {
	let pivotIdx = start;
	let pivot = arr[start];

	for (let i = start + 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			pivotIdx++;
			swap(arr, i, pivotIdx);
		}
	}
	swap(arr, pivotIdx, start);
	return pivotIdx;
}

const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/**
 * @function quickSort
 *
 * @pseudocode
 * Call the pivot helper on the array
 * When the helper returns to you the updated pivot index,
 * recursively call the pivot helper on the subarray to the left of that index,
 * and the subarray to the right of that index.
 * Your base case occurs when you consider a subarray with less than 2 elements
 *
 * @param {Array} arr
 *
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIdx = pivot(arr, left, right);
		quickSort(arr, left, pivotIdx - 1);
		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}
/**
 * Big O(n log n)
 * log n decompositions and n comparisons, Therefore n log n.
 *
 * Worst case scenario:
 * Consider a situation where we already have a sorted array
 *
 * @example
 *
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
 * O(n) decompositions
 * O(n) comparisons per decomposition
 *
 **/

//#endregion
