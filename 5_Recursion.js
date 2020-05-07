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
 *
 * @param {number} num
 */
function fact(num) {
	if (num === 1) return 1;
	return fact(num) * fact(n - 1);
}

//#endregion
