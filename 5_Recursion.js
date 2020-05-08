/**
 * @fileoverview Recursion
 * @license Colt_Steele Udemy
 * **/

//#region Recursion and Call Stack

/**
 * @definition Recursion
 * A process(a function in our case) that calls itself
 *
 *
 * When a function is invoked it is placed on the call stack
 * The newest one goes on top basedon data structure stack
 *
 * Run the below program in chrome dev tools and observe the call stack
 * after applying a breakpoint on wakeUp()
 *
 * When we write recursive functions we keep pushing new functions onto the call stack!
 */

function takeShower() {
	return 'Showering!';
}

function eatBreakfast() {
	let meal = cookFood();
	return `Eating ${meal}`;
}

function cookFood() {
	let items = ['Pizza', 'Burger', 'Sandwich'];
	return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
	takeShower();
	eatBreakfast();
	console.log('Ready to go to work!');
}

wakeUp();

//#endregion

//#region How Recursive functions Work

/**
 * Invoke the same function with a different input until you reach your base case
 *
 * @definition Base case
 * The conditionwhere the recursion ends
 * This is the most important concept
 *
 * @see
 * Two essential parts of a recursive function
 * BASE CASE
 * DIFFERENT INPUT
 *
 * @example
 * The first recursive function example
 *
 * @function countDown
 * @param {number} num
 *
 */

function countDown(num) {
	if (num <= 0) {
		console.log('All Done!!');
		return; //To stop execution need a return
	}
	console.log(num);
	countDown(--num);
}

countDown(5);

//#endregion

//#region Second Recursive function

/**
 * @function sumRange
 * @param {number} num
 */

function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}

/**
 * @example
 * sumRange(3);
 *
 *  return 3 + sumRange(2)
 *                 return 2 + sumRange(1)
 *                                 return 1
 *
 * Therefore result of above recursion:
 *  return 3 + 2 + sumRange(1);
 *  return 3 + (2 + 1);
 *  return 3 + 3;
 *  return 6;
 *
 * result is 6
 */

//#endregion

//#region Writing factorial Iteratively

/**
 * Write a function factorial which gives the factorial of the given number
 *
 * @example
 * 4! = 4 * 3 * 2 * 1
 * should give a result of 24
 *
 * @param {number} num
 * @returns factorial of a given number.
 */

function factorial(num) {
	let fact = num;
	for (let i = num - 1; i > 0; i--) {
		fact *= i;
	}
	return fact;
}

//#endregion

//#region Factorial Recursively

/**
 * Write a function factorial which gives the factorial of the given number
 * using recursion
 *
 * @example
 * 4! = 4 * 3 * 2 * 1
 * should give a result of 24
 * fact(4) executes as shown below
 *
 * @step
 * since 4 !== 1
 * we get return 4 * fact(3);
 * at this point the computer doesnt know what to multiply 4 with as fact(3) is unknown
 * so it waits for result
 * 4 * 3 * fact(2)
 * it stiill waits for fact(2)
 * 4 * 3 * 2 * fact(1) = 4 * 3 * 2 * 1
 * giving result of 24
 *
 * @param {number} num
 */

function fact(num) {
	if (num === 1) return 1;
	return num * fact(n - 1);
}

//#endregion

//#region Pitfalls/Drawbacks of Recursion

/**
 * @description
 * Where things go wrong:
 * 1) No base case
 * 2) Forgetting to return or returning the wrong things
 * 3) stack overflow
 *
 * @example for 2
 * num * fact(num) instead of num* fact(num - 1)
 *
 * @example for 3
 * Maximimum call stack size reached
 */

//#endregion

//#region Helper method Recursion

/** Helper function
 * @description
 * The below function is making use of a helper function
 * which calls helper function
 * helper function is a recursive function which calls itself
 *
 * @param {number} input
 */
function outer(input) {
	var outerScopedVariable = [];

	function helper(helperInput) {
		// modift the outerScopedVariable
		helper(helperInput--);
	}

	helper(input);
	return outerScopedVariable;
}

// A more useful example
/**
 * @function collectOddValues
 * @param {array} arr an array of numbers
 * @returns {array} an array of odd number provided in the input
 *
 *
 * @example
 * collectOddValues([1,2,3,4,5,6,7,8,9,10]); // [1, 3, 5, 7, 9]
 *
 */

function collectOddValues(arr) {
	let result = [];

	function helper(helperInput) {
		if (helperInput.length === 0) {
			return;
		}
		if (helperInput[0] % 2 === 1) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	}

	helper(arr);
	return result;
}

//#endregion

//#region Pure Recursion

/** Using Pure recursion
 *
 * @summary
 * We shall have a look at how the above recursive function works looking at and example
 *
 * @example
 * collectOddValues([1, 2, 3, 4, 5])
 * [1].concat(collectOddValues([2, 3, 4, 5]))
 * 				    [].concat(collectOddValues([3, 4, 5]))
 * 								     [3].concat(collectOddValues([4, 5]))
 * 														[].concat(collectOddValues([5]))
 * 																			[5].concat(collectOddValues([]))
 * 																								[]
 * Summing up
 * [1, 3, 5] // Try it in the console
 *
 * @param {<number>[]} arr
 * @returns {array} having ood numbers that are present in the input
 */

function collectOddValues(arr) {
	const newArr = [];

	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}
	newArr = newArr.concat(collectOddValues(arr.slice(1)));
	return newArr;
}

//#endregion
