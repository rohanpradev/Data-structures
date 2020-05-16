//#region SameFrequency Problem

/**@problem_statement
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * @param {number} num1
 * @param {number} num2
 */
function sameFrequency(num1, num2) {
	let obj1 = {};
	let obj2 = {};

	num1 = num1.toString();
	num2 = num2.toString();
	if (num1.length !== num2.length) {
		return false;
	}
	for (let i = 0; i < num1.length; i++) {
		obj1[num1.charAt(i)] = (obj1[num1.charAt(i)] || 0) + 1;
		obj2[num2.charAt(i)] = (obj2[num2.charAt(i)] || 0) + 1;
	}

	for (let key in obj1) {
		if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
			return false;
		}
	}
	return true;
}

//#endregion

//#region  areThereDuplicatesProblem

/**@problem_statement
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and
 * checks whether there are any duplicates among the arguments passed in.  Y
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 *
 * @hint
 * Use multiple pointers approach to tackle this problem.
 * use a pointer left pointing to the start of the array
 * use a pointer right pointing to the end of the array
 * loop until left < right (termination condition)
 * check at any time if the element at left is matching element at right
 *
 * @function areThereDuplicates
 * @param  {array} arr
 * @returns true if there are no duplicates
 * @returns false if there are duplicates
 */

function areThereDuplicates(...arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		if (arr[left] === arr[right]) {
			return false;
		}
		left++;
	}
	return true;
}
//#endregion

//#region Average pairs

/**
 *@problem_statement
 * Write a function called averagePair.
 * Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array
 * where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 *
 * @example
 * averagePair([1, 2, 3], 2.5); //true
 *
 * @hint
 * Solve this problem using multiple pointers technique
 * keep 2 variables(left, right) pointing to start position and end of the same array(arr).
 * Find out average and check if it is equal to avg
 * if yes end the program
 * continue by movinf left to the next position
 *
 * @param {array} arr
 * @param {number} avg
 * @returns true if avg is found
 * @returns false if avg is not found or arr is empty
 */

function averagePair(arr, avg) {
	if (!arr) {
		return false;
	}
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let myavg = (arr[left] + arr[right]) / 2;
		if (myavg === avg) {
			return true;
		} else if (myavg > avg) {
			right--;
		} else {
			left++;
		}
	}
	return false;
}

//#endregion

//#region Subsequence problem

/**@problem_statement
 * Write a function called isSubsequence
 * which takes in two strings and checks whether the characters in the first string
 * form a subsequence of the characters in the second string.
 *
 * @description
 * In other words, the function should check whether the characters in the first string appear
 * somewhere in the second string, without their order changing.
 *
 * @example
 * isSubsequence("hello", "hello world"); //true
 *
 * @hint
 * Solve this problem using multiple pointers technique
 * keep 2 variables(i, j) pointing to start position of both strings
 * Loop around the second string as it is larger.
 * Check if a character is there in both strings if yes increment i to match the next matching string
 * as usual increment j whether match is found or not
 * check if i is the length of the first string to determine if the sunsequence is found.
 *
 * @param {string} str1
 * @param {string} str2
 */

function isSubsequence(str1, str2) {
	var i = 0;
	var j = 0;
	if (!str1) return true;
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return true;
		j++;
	}
	return false;
}

//#endregion

//#region  maxSubArraySum problem

/**@problem_statement
 * Given an array of integers and a number,
 * write a function called maxSubarraySum,
 * which finds the maximum sum of a subarray with the length of the number passed to the function.
 *
 * @description
 * Note that a subarray must consist of consecutive elements from the original array.
 *
 * In the first example below, [100, 200, 300] is a subarray of the original array,
 * but [100, 300] is not.
 *
 * @example
 * maxSubarraySum([100, 200, 300, 400], 2);
 *
 * @hint
 * Solve this problem using fixed window sliding technique
 * fix the window length as n and calculate sum of elements within subarray
 * then discard element at start and add next element
 * compare previous sum and current sum and save max of both
 * repeat the process until end of array
 *
 * @function maxSubarraySum
 * @param {array} arr
 * @param {number} n
 */

function maxSubarraySum(arr, n) {
	let tempSum = 0;
	let maxSum = 0;

	if (n > arr.length) {
		return null;
	}

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

//#region Minimun Sub Array length

/** @problem_statement
 * Write a function called minSubArrayLen
 * which accepts two parameters - an array of positive integers and a positive integer.
 *
 * @description
 * This function should return the minimal length of a contiguous subarray of which
 * the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 *
 * Solve this problem using dynamic window sliding
 * keep increasing window size until a target sum is met
 * once met move try to discard element at start and see if target is met
 * keep adding again at end until target is met
 * whenever target is met save the current length of array (end-start)
 * and compare with existing total and return smallest windowSize
 *
 * @function minSubArrayLen
 * @param {array} nums which is an array
 * @param {number} sum  which is a number
 * @returns {number} minLength
 *
 */

function minSubArrayLen(nums, sum) {
	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < nums.length) {
		// if current window doesn't add up to the given sum then
		// add one element at the right to the window
		if (total < sum && end < nums.length) {
			total += nums[end];
			end++;
		}
		// if current window adds up to at least the sum given then
		// we can shrink the window
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= nums[start];
			start++;
		}
		// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
		else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
}

//#endregion

//#region LongestSubstring Problem

/**@problem_statement
 * Write a function called findLongestSubstring,
 * which accepts a string and
 * returns the length of the longest substring with all distinct characters.
 *
 * @example
 * findLongestSubstring("rithmschool") //7
 *
 * @function findLongestSubstring
 * @param {string} str
 * @returns {number} longest
 *
 */

function findLongestSubstring(str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1 (to include current in count)
		longest = Math.max(longest, i - start + 1);
		// store the index of the next char so as to not double count
		seen[char] = i + 1;
	}
	return longest;
}

//#endregion
