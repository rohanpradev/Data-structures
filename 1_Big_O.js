/**
 * @fileoverview BIG O
 * This section contains all information about the Big O notation
 * @author Colt_Steele Udemy
 *
 * @description
 * In case you want to try out the examples you can open dveloper tools in the browser
 * and navigate to Sources tab
 * on the left side choose snippets and then create a snippet
 * and paste or write code there.
 * Enjoy!
 * **/

//#region Timing Our Code

/**
 * What does better mean?
 * Faster?
 * Less memory-intensive?
 * More readable?
 */

const addUpto1 = (n) => {
	let total = 0;
	for (let i = 0; i <= n; i++) {
		total += i;
	}
	return total;
};

console.log(addUpto1(6));

// Alternate Solution

const addUpto2 = (n) => (n * (n + 1)) / 2;

console.log(addUpto2(6));

// To test Faster

var t1 = performance.now();
// addUpto1(100000);
addUpto2(100000);
var t2 = performance.now();
console.log(`Time Elapsed ${(t2 - t1) / 1000} seconds`);
//addUpto1 Time Elapsed 0.00437000000232365 seconds
//addUpto2 TTime Elapsed 0.000004999994416721165 seconds
//#endregion

//#region  Understanding Big O defintion
/**
 * @definition O(n)
 * We say that an algorithm is O(f(n))
 * if the number of simple operations the computer has to do is
 * eventually less than the constant times f(n),
 * as n increases
 *
 * @variation
 * f(n) could be linear (f(n) = n)
 * f(n) could be quadratic (f(n) = n^2)
 * f(n) could be constant (f(n) = 1)
 * f(n) could be something entirely different
 *
 * @summary of addUpto1
 * Number of operations is bounded by a multiple of n
 * so you could call it a O(n)
 *
 * @summary of addUpto2
 * addUpto2 has roughly 3 calculations(+,* and /) and
 * as the input increases it doesnt increase the calculations, still use only 3 operations
 * so you could call it a O(1)
 */

//#endregion

//#region  Calculating algorithms with Big O
// Example 1

function goingUpDown(n) {
	for (let i = 0; i <= n; i++) {
		// this loop is O(n)
		console.log(i);
	}
	console.log('At the top! \n Going down...');
	for (j = n; j >= 0; j--) {
		// this loop is O(n)
		console.log(j);
	}
	console.log('Back down.Bye!');
}

goingUpDown(5);

/**
 * @summary
 * To calculate Big O we need to add both operations O(n) + o(n) = O(2n)
 * But we do not differentiate between 2n and n so we can generalize it as
 * @yields O(n)
 * */

//  Example 2

function printAllPairs(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j > n; j++) {
			console.log(i, j);
		}
	}
}

/**
 * @summary
 * To calculate Big O we see that its a nest loop
 * with each loop being O(n)
 * An O(n) inside a O(n) which
 * @yields O(n^2)
 * */

//#endregion

//#region Simplifying Big O notations

/**
 * @description
 * When determining the time complexity of an algorithm,
 * there are some helpful rule of thumbs for Big O expressions.
 * These rules are the consequences of the definition of Big O
 *
 * @rule Contants don't matter
 * @example O(2n) is simplified to O(n)
 * @example O(500) is simplified to O(1)
 * @example O(13n^2) is simplified to O(n^2)
 *
 * @rule Smaller terms don't matter
 * @example O(n + 10) is simplified to O(n)
 * @example O(1000n + 50) is simplified to O(n)
 * @example O(n^2 + 5n + 8) is simplified to O(n^2)
 *
 * @see Big O Shorthands
 * Arithmetic operators are constant
 * Variable assignments are also constant
 * Accessing elements in an array (by index) or (by key) is constant
 * In a loop, the complexity is the length of the loop times
 * the complexity of whatever happens inside of the loop
 *
 * */

//  More examples

function logAtleeast5(n) {
	// Big O of this example is O(n)
	for (let i = 0; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}

function logMax5(n) {
	/**
	 * Big O of O(1) because if we say n is 1000
	 * the loop runs only five times so it is O(5)
	 * Hence after simplification it is Big O(1)
	 **/
	for (let i = 0; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}

//#endregion

//#region Space complexity

/**
 * @description Rule of thumb:
 * @rule Most primitive types(booleans, number, undefined, null) are constant space
 * @rule Strings require O(n) space(where n is the string length)
 * @rule Referency type such as Arrays and Objects are generally O(n)
 *       where n is the length(for arrays) or number of keys(for objects)
 */

//  Example

function sum(arr) {
	let total = 0; // variable total takes constant space: a  number
	for (let i = 0; i < arr.length; i++) {
		// another number i
		total += arr[i];
	}
	return total;
}

// The above example has O(1) space complexity

// Another Example
function double(arr) {
	let newArr = [];
	for (let i = 0; i, arr.length; i++) {
		newArr.push(arr[i] * 2); // Array length is directly proportionate to n (i.e input)
	}
	return newArr;
}

// The above example has O(n) space complexity

//#endregion

//#region Logarithms

/**
 * @definition
 * A logarithm is the inverse of exponentiation
 *
 * Rule of thumb
 * @rule The logarithm of a number roughly measures the number of times you can divide the number by 2
 * 		 before you can get a value thats less than or equal to one
 *
 * @example  logarithm of 8
 * divide 8 by 2 we get 4
 * divide 4 by 2 we get 2
 * divide 2 by 2 we get 1
 * Hence log(8) = 3
 *
 * @example  logarithm of 25
 * divide 25 by 2 we get 12.5
 * divide 12.5 by 2 we get 6.25
 * divide 6.25 by 2 we get 3.125
 * divide 3.125 by 2 we get 1.5625
 * divide 1.5625 by 2 we get 0.78125
 * Hence log(25) ~ 4.64 somewhere between 4 and 5
 *
 * Logarithmic time complexity is great
 */
//#endregion
