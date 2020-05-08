//#region Power problem

/**@problem_statement
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow()
 * do not worry about negative bases and exponents.
 *
 * @param {number} base
 * @param {number} exponent
 * @returns {number} the power of the base to the exponent
 */

function power(base, exponent) {
	if (exponent === 0) return 1;
	return base * power(base, exponent - 1);
}

//#endregion

//#region Factorial problem

/**@problem_statement
 * Write a
 * @function factorial
 * which accepts a number and returns the factorial of that number.
 * A factorial is the product of an integer and all the integers below it
 *
 * @example
 *  e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
 * @param {number} base
 * @returns {number}  A factorial is the product of an integer and all the integers below it
 */

//  My Approach
function factorial(num) {
	if (num === 0) return 1;
	return num * factorial(num - 1);
}

//Author approach
function factorial(x) {
	if (x < 0) return 0;
	if (x <= 1) return 1;
	return x * factorial(x - 1);
}

//#endregion

//#region productOfArray problem

/**@problem_statement
 * Write a  function which takes in an array of numbers and returns the product of them all
 * @function productOfArray
 * accepts an  array of numbers and returns the product of them all.
 *
 * @example
 *  productOfArray([1,2,3]) // 6
 *
 * @param {<number>[]} arr
 * @returns {number}  A factorial is the product of an integer and all the integers below it
 */

function productOfArray(arr) {
	if (arr.length === 0) return 1;
	return arr[0] * productOfArray(arr.slice(1));
}

//#endregion

//#region recursiveRange problem

/**@problem_statement
 * Write a
 * @function recursiveRange
 *  which accepts a number and adds up all the numbers from 0 to the number passed to the function
 *
 * @example
 * recursiveRange(6) // 21
 * 6 + 5 + 4 + 3 + 2 + 1 + 0 = 21
 *
 * @param {number} num
 * @returns {number} a number which adds up all the numbers from 0 to the number passed to the function
 */

function recursiveRange(num) {
	if (num === 0) return 0;
	return num + recursiveRange(num - 1);
}

//#endregion

//#region fibonacci problem

/**@problem_statement
 * Write a recursive function called
 * @function fib
 *  which accepts a number and returns the n
 * th number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
 * which starts with 1 and 1,
 *  and where every number thereafter is equal to the sum of the previous two numbers.
 *
 * @example
 * fib(4) // 3
 * 6 + 5 + 4 + 3 + 2 + 1 + 0 = 21
 * n =	0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	...
 * xn =	0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	...
 *
 * @param {number} num
 * @returns {number} a number which adds up all the numbers from 0 to the number passed to the function
 */

function fib(num) {
	if (num <= 2) return 1;
	return fib(num - 1) + fib(num - 2);
}

//#endregion
