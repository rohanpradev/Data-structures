/**
 * @fileoverview Hash Tables
 * @author Colt_Steele Udemy
 **/

//#region DEFINITION

/**
 * @definition
 * Hash tables are used to store key-value pairs.
 *
 * They are like arrays, but the keys are not ordered.
 *
 * Unlike arrays, hash tables are fast for finding values, adding new values, and removing values!
 *
 * HASH TABLES IN THE WILD
 * Python has Dictionaries.
 * JS has Objects and Maps*
 * Java, Go and Scala have Maps
 * Ruby has...Hashes
 *
 */

//#endregion

//#region DESCRIPTION

/**
 * Imagine we want to store some colors, we could just use an array/list.
 *
 *         [   "#ff69b4",  "#ff4500",  "#00ffff"   ]
 *     Not super readable, What do these colors correspond to?
 *
 * It would be nice if instead of using indices to access the colors,
 * we could use more human-readable keys
 *
 *     pink -------------> #ff69b4
 *     orangered --------> #ff4500
 *     cyan -------------> #00ffff
 *
 *     colors["cyan"] is way better than colors[2]

 * To implement a hash table we'll be using an array.
 * In order to lookup values by key, we need a way to convert keys into valid array indices.
 *
 * A function that performs this task is called a hash function
 * 
 *            0    1    2    3    4    5    6    7    8    9  
 *          __________________________________________________
 *         |____|____|____|____|____|____|____|____|____|____|               ^                   ^   
 *           ⬆             🔺                  ⬆ 
 *   ["pink","#ff69b4"]    ⬆             ["orangered","#ff4500"] 
 *                    ["cyan", "#00ffff"]
 **/

//#endregion

//#region HASH FUNCTIONS

/** 🌟 What makes a good Hash?(Not cryptographically)
 *
 *      ✳ Fast (i.e constant time)
 *
 *      ✳ Doesn't cluster outputs at specific indices, but distributes uniformly.
 *
 *      ✳ Deterministic(same input yields same output)
 *
 */

/**
 * @function hash
 * which returns a hashed value of the input
 * @param {string} key
 * @param {number} arrLen
 * @returns {number} hashed value!
 */

function hash(key, arrLen) {
	let total = 0;
	for (let char of key) {
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrLen;
	}
	return total;
}

// 🐛 TESTING VALUES

hash('pink', 10); // 0
hash('orangered', 10); // 7
hash('cyan', 10); // 3

/** 🌟 Refining our Hash
 *
 *      ✳ Only hashes strings (we wont worry about this)
 *
 *      ✳ Not Constant time - linear in key length
 *
 *      ✳ Could be a little more random
 *
 *
 * Prime numbers:
 *
 *      ✳ The prime numbers in hash is hepful in spreading out the keys more uniformly.
 *
 *      ✳ Its also helpful in an array that your putting values into has a prime length
 *
 *
 */

function hash(str, arrLen) {
	let total = 0;
	const WIERD_PRIME = 19;

	for (let i = 0; i < Math.min(str.length, 100); i++) {
		let value = str[i].charCodeAt(0) - 96;
		total = (total + WIERD_PRIME + value) % arrLen;
	}
	return total;
}

//#endregion

//#region DEALING WITH COLLISSIONS

/**💥
 * Even with a large array and a great hash function, collissions are inevitable.
 *
 * There are many strategies for dealing with collissions, but we'll focus on two:
 *
 *      ✳ Separate Chaining
 *
 *      ✳ Linear Probing
 */

/** ⛓ Separate Chaining
 *
 * With separate chaining,at each index in our array we store values in a more sophisticated data
 * structure(e.g.  an array or a linked list)
 *
 * @example
 *             0    1    2    3    4    5    6    7    8    9
 *          __________________________________________________
 *         |____|____|____|____|____|____|____|____|____|____|               ^                   ^
 *                              🔺
 *                              ⬆
 *                [   [ "darkblue",    "#00008b"   ],
 *                    [ "salmon",    "#fa8072"   ]   ]                                 ]
 *
 *             darkblue -------------> 4
 *             salmon ---------------> 4
 *
 */

/** 🐳  Linear Probing
 *
 * With linae probing, when we find a collision,
 * we search throught the array to find the next empty slot
 *
 * Unlike with separate chaining, this allows us to store a single key-value at each index.
 * @example
 *             0    1    2    3    4    5    6    7    8    9
 *          __________________________________________________
 *         |____|____|____|____|____|____|____|____|____|____|               ^                   ^
 *                              🔺   🔺   🔺
 *                              ⬆     ⬆   ["tomato", "#ff6347"]
 *                              ⬆  ["salmon", "#fa8072"]
 *                ["darkblue", "#00008b"]
 *
 *             darkblue -------------> 4
 *             salmon ---------------> 4
 *             tomato ---------------> 4
 *
 */

//#endregion

//#region HASH TABLE

class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WIERD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WIERD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	/** @method set
	 * Accepts a key and value
	 * Hashes the key
	 * Stores the key-value pair in the hash table array via separate chaining ⛓
	 *
	 * @param {*} key
	 * @param {*} value
	 */

	set(key, value) {
		const index = this._hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
		return this.keyMap[index];
	}

	/** @method get
	 * Fetches the value associated with the given key
	 *
	 * @param {string} key
	 * @returns {any} the values associated with the key
	 */

	get(key) {
		const index = this._hash(key);
		if (this.keyMap[index]) {
			for (let arr of this.keyMap[index]) {
				if (arr[0] === key) return arr[1];
			}
		}
		return undefined;
	}

	/** @method values
	 *	fethes all the values in the hash map
	 * @returns {Array<any>} the values in the hash map
	 */

	values() {
		const valuesArr = [];
		for (let elem of this.keyMap) {
			if (elem) {
				for (let value of elem) {
					// check for duplicates
					if (!valuesArr.includes(value[1])) {
						valuesArr.push(value[1]);
					}
				}
			}
		}
		return valuesArr;
	}

	/** @method keys
	 *	fethes all the keys in the hash map
	 * @returns {Array<any>} the keys in the hash map
	 */

	keys() {
		const keysArr = [];
		for (let elem of this.keyMap) {
			if (elem) {
				for (let key of elem) {
					// check for duplicates
					if (!keysArr.includes(key[0])) {
						keysArr.push(key[0]);
					}
				}
			}
		}
		return keysArr;
	}
}

// 🐛 TESTING VALUES

let ht = new HashTable();
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

//#endregion
