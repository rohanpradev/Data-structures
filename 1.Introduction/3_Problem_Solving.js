/**
 * @fileoverview Algorithms and problem Solving Patterns
 * @license Colt_Steele Udemy
 * **/

//#region Algorithm definition

/**
 * @definition ALGORITHM
 * A process or a set of steps to accomplish a certain task
 *
 */

//#endregion

//#region Frequency Counter Problem

/**@problem_statement
 * Write a function called same, which accepts two arrays and the function should return true
 * if every value in the first array has its corresponsing value squared in the second array.
 * The frequency of values must be the same
 */

//  my approach

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		arr2.splice(correctIndex, 1);
	}
	return true;
}

console.log(same([2, 3, 4], [9, 16, 4])); // O(n^2) bad!!!

// Refactored Code

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		if (!frequencyCounter2.hasOwnProperty(key ** 2)) {
			return false;
		}
		if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
			return false;
		}
	}
	return true;
}

console.log(same([2, 3, 4], [9, 16, 4])); // O(3n) ~ O(n) much better approach using objects

//#endregion

//#region Anagrams Problem

/** @problem_statement
 * Given two strings,write a function to determine if the second string is an anagram of the first
 *
 * @description
 * An anangram is a word, phrase or a name formed by rearranging the letters of another
 *
 * @example
 * cinema is a anagram of iceman
 */

//  My Solution

function anagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	let anagram1 = {};
	let anagram2 = {};

	for (let i = 0; i < str1.length; i++) {
		let first = str1.charAt(i);
		anagram1[first] = (anagram1[first] || 0) + 1;
		let second = str2.charAt(i);
		anagram2[second] = (anagram2[second] || 0) + 1;
	}

	for (let key in anagram1) {
		if (!anagram2.hasOwnProperty(key)) {
			return false;
		}
		if (anagram2[key] !== anagram1[key]) {
			return false;
		}
	}
	return true;
}

// Author Solution

function anagram(str1, str2) {
	if (str1.length !== str2.length) return false;
	let lookup = {};
	for (let char of str1) {
		lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
	}
	for (let letter of str2) {
		// check if letter is not there or zero then its not an anagram
		if (!lookup[letter]) return false;
		lookup[letter] -= 1;
	}
	return true;
}

//#endregion

//#region Multiple Pointers Pattern

/** @problem_statement
 * Write a function called sumZero which accepts a sorted array of integers.
 * The @function should find the first pair where sum is 0.
 *  @returns an array that includes both values that sum to zero or
 *  @returns undefined if a pair does not exist
 *
 * @example
 * sumZero([-3, -2, -1, 0 , 1, 2 , 3])  // [-3, 3]
 * sumZero([-2, 0 , 1, 3])  // undefined
 * sumZero([1, 2, 3])  // undefined
 */

// My Approach
function sumZero(arr) {
	let start = 0,
		end = arr.length - 1;
	let result;
	while (start < end) {
		let sum = arr[start] + arr[end];
		if (sum === 0) {
			result = [].concat(arr[start], arr[end]);
			break;
		} else if (sum > 0) {
			end--;
		} else {
			start++;
		}
	}
	return result;
}

// Author approach
function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

//#endregion

//#region Count Unique Values problem

/** @problem_statement
 * Implement a @function countUniqueValues
 * which accepts  a sorted array, and counts unique values in the array
 * There can be negative numbers in the array, but it will always be sorted.
 *
 * @example
 * countUniqueValues([1, 1, 1, 1, 1, 2])  // 2
 * countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])  // 7
 * countUniqueValues([])  // 0
 * countUniqueValues([-2, -1, -1, 0 , 1])  // 4
 */

//  My Approach
function countUniqueValues(arr) {
	let existing = {};
	let count = 0;
	for (let val of arr) {
		if (!existing.hasOwnProperty(val)) {
			count++;
		}
		existing[val] = 1;
	}
	return count;
}

// Alternate approach

function countUniqueValues(arr) {
	let count = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] !== arr[i + 1]) {
			++count;
		}
	}
	return arr.length > 1 ? count + 1 : count;
}

//Author approach

function countUniqueValues(arr) {
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

//#endregion

//#region Sliding Window Pattern

/**
 * @description Sliding Window
 *
 * This pattern involves creating a window
 * which can either be an array or number from one position to another
 *
 * Depending on certain condition, the window either increases or closes (and a new window is created)
 *
 * Very useful for keeping track of a subset data in an array/string etc
 **/

/** @problem_statement
 * Implement a @function maxSubArraySum
 * which accepts @param  array of integers
 * and @param n which is a number
 * The function should calculate the maximun sum of n consecutive elements in the array
 *
 * @example
 * maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)  // 10
 * maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)  // 17
 * maxSubArraySum([4, 2, 1, 6], 1)  // 6
 * maxSubArraySum([4, 2, 1, 6, 2], 4)  // 13
 * maxSubArraySum([], 4)  // null
 */

// my Approach

function maxSubArraySum(arr, n) {
	if (n > arr.length) {
		return null;
	}
	let max = -Infinity;
	for (let i = 0; i < arr.length - n + 1; i++) {
		let temp = 0;
		for (let j = 0; j < n; j++) {
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}

// Refactor

// O(n)
function maxSubArraySum(arr, n) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < n) return null;
	for (let i = 0; i < n; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let i = n; i < arr.length; i++) {
		tempSum = tempSum - arr[i - n] + arr[i];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

//#endregion

//#region Divide and Conquer

/**
 * @description Divide and Conquer
 *
 * This pattern involves dividing a data set into smaller chunks and then repeating a process
 * with a subset of data
 *
 * This pattern can tremendously decrease time complexity
 *
 * Binary search is an example of divide and conquer algorithm
 **/

//#endregion

/**
 * @function longestSubstr
 * @param str input string
 * @returns a number which denotes the longest substring without repeating characters
 *
 * @example
 * "abcbdca" should return 4
 */

function longestSubsr(str: string) {
  if (str.length <= 1) return str.length;
  const seenChar = {};
  let longest = 0;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const curChar = str[right];
    if (seenChar[curChar] >= left) {
      left = seenChar[curChar] + 1;
    }
    seenChar[curChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
