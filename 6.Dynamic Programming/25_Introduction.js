/**
 * @fileoverview DYNAMIC PROGRAMMING
 * @author Colt_Steele Udemy
 */

/**
 * @definition
 * A method of solving complex problem by breaking it down into a simpler collection of
 *   simpler subproblems just once, and storing their solutions.
 */

/** OVERLAPPING SUBPROBLEMS
 * A problem is said to have overlapping subproblems if it can be broken down into subproblems
 *  which can be reused several times
 */

function fibonacci(n) {
	if (n <= 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Memoization
 * Storing the results of expensive function calls and returning the cached results when the same inputs
 * occur again
 *
 * Big O(n)
 */

function fibonacci(n, memo = []) {
	if (memo[n] !== undefined) return memo[n];
	if (n <= 2) return 1;
	let res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
	memo[n] = res;
	return res;
}

/**
 * Tabulation
 * Storing the result of a previous result in a "table" (usually an array).
 * Usually done using iteration.
 * Better space complexity can be achieved using tabulation
 */

function fib(n) {
	if (n <= 2) return 1;
	let fibNums = [0, 1, 1];
	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	return fibNums[n];
}
