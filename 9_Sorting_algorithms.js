/**
 * @fileoverview SORTING ALGORITHMS
 * This section contains all information about various sorting algorithms
 * @author Colt_Steele Udemy
 *
 * @description
 * Sorting is the process of rearranging the items in a collection(e.g. an array)
 * so that items are in some kind of order
 *
 * @example
 * Sorting numbers from smallest to largest
 * Sorting names alphabetically
 * Sorting movies based on release year
 * Sorting movies based on revenue
 * **/

//#region Built in JavaScript sorting

/**
 * The built in sort method accepts an optional comparator method
 * You can use this comparator function to tell JavaScript how you want it to sort
 * The comparator looks at pairs of elements (a and b) determines their sort order
 * based on return value
 *
 * If it returns a negative number, a should come before b
 * If it returns a positive number, a should come after b
 * If it returns 0, a and b are same as far as the sort is concerned.
 *
 * @example
 * const months = ['March', 'Jan', 'Feb', 'Dec'];
 * months.sort();
 * console.log(months); // expected output: Array ["Dec", "Feb", "Jan", "March"]
 *
 * const array1 = [1, 30, 4, 21, 100000];
 * array1.sort();
 * console.log(array1); // expected output: Array [1, 100000, 21, 30, 4]
 *
 *
 *
 * @param {number} num1
 * @param {number} num2
 */

function numberCompare(num1, num2) {
	return num1 - num2;
}

// es6 equivalent
const numberCompare = (num1, num2) => num1 - num2;

[6, 4, 15, 10].sort(numberCompare); // [4, 6, 10, 15]

// Another example

const shortNameComparator = (a, b) => a.length - b.length;
['Rohan', 'Ron', 'Data Structures', 'Algorithms'].sort(shortNameComparator);
// ["Ron", "Rohan", "Algorithms", "Data Structures"]

//#endregion

//#region Bubble sort
/**
 * @function swap
 * which swaps elements of an array
 * @param {Array} arr
 * @param {number} idx1
 * @param {number} idx2
 */

//ES5
function swap(arr, idx1, idx2) {
	const temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/**
 * As sorting algorithm where the largest values bubble up to the top!
 * @function bubbleSort
 *
 * @example
 *
 * [5, 3, 4, 1, 2]
 *  i  j                  compare and swap if left items is greater(i > j)
 * [3, 4, 1, 2, 5]        After first iteration
 * [3, 1, 2, 4, 5]        After second iteration
 * [1, 2, 3, 4, 5]        After third iteration
 * [1, 2, 3, 4, 5]        After fourth iteration
 *
 * @param {Array<any>} arr
 * @returns {Array} of sorted data
 */

function bubbleSort(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
}

//#endregion

//#region Bubble Sort Optimization

/**
 * An efficient solution to bubble sort
 *
 * @example
 * Consider an almost sorted array
 * [8, 1, 2, 3, 4, 5, 6, 7]
 * This is sorted in the first iteration but since we loop
 * we are doing unnecessary comparisons
 * So we can use a variable noSwaps to determine, if there were no swaps in last iteration
 * If there were no swaps in last iteration then there are going to be no swaps in this iteration also
 * Hence break from the loop
 *
 * @param {Array} arr
 */

function bubbleSort(arr) {
	let noSwaps;

	for (let i = arr.length; i > 0; i++) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) {
			break;
		}
	}
	return arr;
}

// Big O of n^2 due to 2 loops

//#endregion

//#region Selection Sort

/**
 * Similar to bubble sort , but instead of first placing large values into sorted positions,
 * it places smaller into sorted position
 *
 * @example
 * 			  min(3,5) is 3
 *     [  5,   3,   4,   1,   2   ]
 * 		  ^	   ^
 *
 * 			   min(3,4) is 3
 *     [  5,   3,   4,   1,   2   ]
 *        ^         ^
 *
 * 			            min(3,1) is 1
 *     [  5,   3,   4,   1,   2   ]
 *        ^              ^
 *
 *                      min(1,2) is 1
 *     [  5,   3,   4,   1,   2   ]
 *        ^                   ^
 *
 * Note swap takes place only once in the end of iteration
 * After first iteration sorted array looks like this
 * [1, 3, 4, 5, 2]
 *
 * @pseudocode
 * Store the first element as the smallest value you have seen so far.
 * Compare this item to the next item in the array until you find a smaller number.
 * If the smaller number is found designate the smaller number to be the new "minimum"
 * and continue till the end of the array
 * If the minimum is not the value you initially began with, swap the two values
 * Repeat this with the next element until the array is sorted.
 *
 *
 * @function selectionSort
 * @param {Array} arr
 * @returns {Array} with sorted values
 *
 */

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (i !== min) {
			swap(arr, i, min);
		}
	}
	return arr;
}

// Big O is O(n^2)

//#endregion

//#region Insertion sort

/**
 * Builds up the sort by gradually creating a larger left half which is always sorted
 *
 * @pseudocode
 * Start by picking the second element in the array
 * Now compare the second element with the one before it and swap if necessary
 * Continue to the next element and if it is in the incorrect order,
 * iterate through the sorted portion (i.e the left side) to place the elementin the correct place.
 * Repeat until the array is sorted
 */

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

//#endregion
