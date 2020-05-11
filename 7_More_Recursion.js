//#region Reverse a string

/**
 * Write a recursive function called
 * @function reverse
 *  which accepts a string and returns a new string in reverse.
 *
 * @example
 * reverse('awesome') // 'emosewa'
 * reverse('rithmschool') // 'loohcsmhtir'
 *
 * @param {string} str
 * @returns {string} a new string in reverse.
 *
 */

// My Approach

function reverse(str) {
	if (str.length === 0) return '';
	return str.slice(str.length - 1) + reverse(str.slice(0, -1));
}

// Author approach

function reverse(str) {
	if (str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

//#endregion

//#region Palindrome

/**
 * Write a recursive function called
 * @function isPalindrome
 * which returns true if the string passed to it is a palindrome (reads the same forward and backward).
 * Otherwise it returns false.
 *
 * @example
 * isPalindrome('awesome') // false
 * isPalindrome('amanaplanacanalpanama') // true
 *
 * @param {string} str
 * @returns {boolean}
 */

// My Approach

function isPalindrome(str) {
	function reverse(str) {
		if (str.length <= 1) return str;
		return reverse(str.slice(1)) + str[0];
	}
	return str === reverse(str);
}

// Author Approach

function isPalindrome(str) {
	if (str.length === 1) return true;
	if (str.length === 2) return str[0] === str[1];
	if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
	return false;
}

//#endregion

//#region someRecursive

/**
 * Write a recursive function called
 * @function someRecursive
 * which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 *
 * @example
 * const isOdd = val => val % 2 !== 0;
 * someRecursive([1,2,3,4], isOdd) // true
 * someRecursive([4,6,8,9], isOdd) // true
 * someRecursive([4,6,8], isOdd) // false
 * someRecursive([4,6,8], val => val > 10); // false
 *
 * @param {Array} arr
 * @param {callback function} cb
 * @returns {boolean}
 */

// My Approach
function someRecursive(arr, cb) {
	if (arr.length === 0) return false;
	if (cb(arr[0])) return true;
	return someRecursive(arr.slice(1), cb);
}

//#endregion

//#region Flatten

/**
 * Write a recursive function called
 * @function flatten
 * which accepts an array of arrays and returns a new array with all values flattened.
 *
 * @example
 * flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 * flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 * flatten([[1],[2],[3]]) // [1, 2, 3]
 * flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1, 2, 3]
 *
 * @param {Array} oldArr
 * @returns {Array}
 */

function flatten(oldArr) {
	let newArr = [];
	for (let i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			//Keep recursively calling this function untill param is not an array
			newArr = newArr.concat(flatten(oldArr[i]));
		} else {
			newArr.push(oldArr[i]);
		}
	}
	return newArr;
}

//#endregion

//#region CapitalizeFirst

/**
 * Write a recursive function called
 * @function capitalizeFirst
 * Given an array of strings, capitalize the first letter of each string in the array.
 *
 * @example
 * capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 *
 * @param {Array} arr
 * @returns {Array}
 */

// My Approach

function capitalizeFirst(arr) {
	let newArr = [];
	if (arr.length === 0) return [];
	else newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
	newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
	return newArr;
}

// Alternate easier approach

function capitalizeFirst(arr, newArr = []) {
	if (arr.length === 0) return newArr;
	let str = arr[0];
	newArr.push(str[0].toUpperCase() + str.slice(1));
	return capitalizeFirst(arr.slice(1), newArr);
}

// Author approach

function capitalizeWords(array) {
	if (array.length === 1) {
		return [array[0].toUpperCase()];
	}
	let res = capitalizeWords(array.slice(0, -1));
	res.push(array.slice(array.length - 1)[0].toUpperCase());
	return res;
}

//#endregion

//#region nestedEvenSum

/**
 * Write a recursive function called
 * @function nestedEvenSum
 * Return the sum of all even numbers in an object which may contain nested objects.
 *
 * @example
 *
 * var obj1 = {
 *	 outer: 2,
 *	 obj: {
 *	  	 inner: 2,
 *		 otherObj: {
 *			 superInner: 2,
 *			 notANumber: true,
 *			 alsoNotANumber: 'yup',
 *		 },
 * 	 },
 * };
 *
 * var obj2 = {
 * 	 a: 2,
 * 	 b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
 * 	 c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
 * 	 d: 1,
 * 	 e: { e: { e: 2 }, ee: 'car' },
 * };
 *
 * nestedEvenSum(obj1); // 6
 * nestedEvenSum(obj2); // 10
 *
 * @param {Object} obj
 * @returns {number}
 */

// My Approach

function nestedEvenSum(obj, sum = 0) {
	for (var key in obj) {
		if (typeof obj[key] === 'object') {
			sum += nestedEvenSum(obj[key]);
		} else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			sum += obj[key];
		}
	}
	return sum;
}

//#endregion

//#region capitalizeWords

/**
 * Write a recursive function called
 * @function capitalizeWords
 * Given an array of words, return a new array containing each word capitalized..
 *
 * @example
 * let words = ['i', 'am', 'learning', 'recursion'];
 * capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 *
 * @param {Array<string>} array
 * @returns {Array<string>}
 */

function capitalizeWords(array) {
	if (array.length === 1) {
		return [array[0].toUpperCase()];
	}
	let res = capitalizeWords(array.slice(0, -1));
	res.push(array.slice(array.length - 1)[0].toUpperCase());
	return res;
}

//#endregion

//#region stringifyNumbers

/**
 * Write a recursive function called
 * @function stringifyNumbers
 * which takes in an object and finds all of the values which are numbers and converts them to strings.
 * Recursion would be a great way to solve this!
 *
 * @example
 *
 * let obj = {
 *    num: 1,
 *    test: [],
 *    data: {
 *       val: 4,
 *        info: {
 *           isRight: true,
 *           random: 66
 *        }
 *    }
 * }
 *
 * stringifyNumbers(obj)
 *
 * {
 *    num: "1",
 *    test: [],
 *    data: {
 *		val: "4",
 *      info: {
 *          isRight: true,
 *          random: "66"
 *       }
 *    }
 *  }
 *
 * @param {Object} obj
 * @returns {Object}
 */

function stringifyNumbers(obj) {
	const newObj = {};
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

//#endregion

//#region collectStrings
/**
 * Write a recursive function called
 * @function collectStrings
 * which accepts an object and returns an array of all the values in the object
 * that have a typeof string
 *
 * @example
 *
 * const obj = {
 *   stuff: "foo",
 *   data: {
 *      val: {
 *           thing: {
 *               info: "bar",
 *               moreInfo: {
 *                   evenMoreInfo: {
 *                       weMadeIt: "baz"
 *                    }
 *                }
 *           }
 *        }
 *    }
 * }
 *
 * collectStrings(obj) // ["foo", "bar", "baz"])
 *
 * @param {Object} obj
 * @returns {Array}
 */

function collectStrings(obj, arr = []) {
	for (let key in obj) {
		if (typeof obj[key] === 'string') {
			arr.push(obj[key]);
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			collectStrings(obj[key], arr);
		}
	}
	return arr;
}

// Helper Method Recursion Version

function collectStrings(obj) {
	var stringsArr = [];

	function gatherStrings(o) {
		for (var key in o) {
			if (typeof o[key] === 'string') {
				stringsArr.push(o[key]);
			} else if (typeof o[key] === 'object') {
				return gatherStrings(o[key]);
			}
		}
	}
	gatherStrings(obj);
	return stringsArr;
}

// Pure Recursion Version

function collectStrings(obj) {
	var stringsArr = [];
	for (var key in obj) {
		if (typeof obj[key] === 'string') {
			stringsArr.push(obj[key]);
		} else if (typeof obj[key] === 'object') {
			stringsArr = stringsArr.concat(collectStrings(obj[key]));
		}
	}

	return stringsArr;
}

//#endregion
