// #region Execution Contexts and Environments

var a = 'Hello World!';

function b() {
	console.log('Called b');
}

b();
console.log(a);

if (a === undefined) {
	console.log('a is undefined');
} else {
	console.log('a is defined');
}

function b() {
	// console.log('In function b BEFORE: ', myvar);
	// var myvar;
	console.log('In function b: ', myvar);
}

function a() {
	var myvar = 2;
	console.log('In function a: ', myvar);
	b();
	return (function c() {
		console.log('In function c: ', myvar);
	})();
}
var myvar = 1;

a();
console.log('Global: ', myvar);

if (true) {
	console.log(c);
	let c = true;
	// var c = true;
}

function waitThreeSeconds() {
	const waitTime = 3000 + new Date().getTime();
	while (new Date() < waitTime) {}
	console.log('Finished function');
}

function clickHandler() {
	console.log('Click Handler called');
}

// document.addEventListener('click', clickHandler);
document.getElementById('btn').addEventListener('click', clickHandler);
waitThreeSeconds();
console.log('Finished execution');

let a = 10,
	b = 20,
	c = b;
// console.log('a', typeof a);
// console.log('b', typeof b);
// console.log('c', typeof c);
a = 0;
b = false;

// if (Object.is(a, b)) {
if (a === b) {
	console.log('Both are equal...');
} else {
	console.log('Nope they are not equal...');
}

function greet(name = '') {
	console.log('Hello ', name);
}
greet();

console.log(libraryName);
const person = new Object();

person['firstName'] = 'Rohan';
person['lastName'] = 'Pradev';
person['age'] = 25;

console.log(person);

let english = {
	greet: 'Hello',
};

let spanish = {
	greet: 'Hola!',
};

let toggle = true;
document.getElementById('btn').textContent = 'English';

function toggleLang() {
	toggle = !toggle;
	document.querySelector('#btn').textContent = toggle ? 'English' : 'Spanish';
	document.querySelector('#greeting').textContent = toggle
		? english.greet
		: spanish.greet;
}

document.getElementById('btn').addEventListener('click', toggleLang);

function greet() {
	console.log('Hi');
}

greet.language = 'English';

console.log(greet);

anonymous();

var anonymous = () => console.log('Hi');

function log(a) {
	if (typeof a !== 'function') console.log(a);
	else console.log(a());
}

log(3);
log({ greeting: 'Hello' });
log(() => 'Hello from function');

// Pass by value

var a = 3;
var b = a;

a = 4;
console.log(a);
console.log(b);

// Pass by reference
var person = {
	name: 'Rohan',
};

// var changeName = (personCopy) => {
// 	personCopy.name = 'Rahul';
// 	return personCopy;
// };

// var person2 = changeName(person);
// var person2 = {...person}; // Deepcopy
person2.name = 'Rahul';

console.log(person.name);
console.log(person2.name);

console.log(this);
function a() {
	console.log(this);
}

// arrow function

const a = () => console.log(this);
a();
document.querySelector('#btn').addEventListener('click', a);

var c = {
	name: 'The c object',
	log: function () {
		let self = this;
		let name = 'Inside function';
		// console.log(this);
		// console.log('Just name:', name);
		// console.log('This name:', this.name);

		var setname = function (name) {
			self.name = name;
		};
		setname('Updated again!');
		console.log(self);
	},
};

c.log();

function logArgs(...args) {
	for (arg of args) {
		console.log(arg);
	}
}
logArgs();
logArgs('hi', false, 'with args');

// Immendiate invoked Function expression(IIFE)
var greetRohan = (function greet(name = '') {
	return 'Hello ' + name;
})('Rohan');

console.log(greetRohan);

var myname = 'Rohan';
var yourname = 'Rahul';
(function (global, name = '') {
	console.log('Hello ' + name);
	global.myname = 'Ron';
})(window, myname);

console.log('----------');
console.log(myname);

// #endregion

// #region CLOSURES

function greet(whattosay) {
	return function (name) {
		console.log(whattosay + ' ' + name);
	};
}

const sayHi = greet('Hi');

sayHi('Rohan');

function buildFunctions() {
	const arr = [];
	for (var i = 0; i < 3; i++) {
		arr.push(
			(function () {
				console.log(i);
			})(i)
		);
	}
	return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

function test() {
	const arr = [];

	for (var i = 0; i < 5; i++) {
		arr.push(
			(function (j) {
				return function () {
					console.log(j);
				};
			})(i)
		);
	}
	return arr;
}

executeTest = test();

executeTest[0]();
executeTest[1]();
executeTest[2]();
executeTest[3]();
executeTest[4]();

// #endregion

// #region Building Factories

function makeGreeting(language) {
	return function (firstname, lastname) {
		const greeting = language === 'en' ? 'Hello' : 'Hola';
		console.log(greeting + ' ' + firstname + ' ' + lastname);
	};
}

const greetEnglish = makeGreeting('en');
const greetSpanish = makeGreeting('es');

greetEnglish('Rohan', 'Pradev');
greetSpanish('Rohan', 'Pradev');

Callbacks;

function sayHiLater() {
	var greeting = 'Hi!';
	setTimeout(function () {
		console.log(greeting);
	}, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
	var a = 10000;
	var b = 10000;
	callback();
}

tellMeWhenDone(function () {
	console.log('I am done');
});

tellMeWhenDone(function () {
	alert('All done...');
});

var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullname: function () {
		return this.firstname + ' ' + this.lastname;
	},
};

person.getFullname();

const log = function (lang1, lang2) {
	console.log('Logging: ' + this.getFullname());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('--------------------------');
};

log();
log.call(person, 'english', 'spanish');
log.apply(person, ['en', 'es']);
var logName = log.bind(person);

logName('Italian');

// Function borrowing

var person2 = {
	firstname: 'Jane',
	lastname: 'Doe',
};

console.log(person.getFullname.call(person2, 'en', 'es'));

// Function currying
function multiply(a, b) {
	return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(3));
// #endregion

// #region CALLBACKS
const arr = [1, 2, 3];

const mapForEach = (arr, fn) => {
	const array = [];
	for (let i = 0; i < arr.length; i++) {
		array.push(fn(arr[i]));
	}
	return array;
};

const filterForEach = (arr, fn) => {
	const array = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i])) {
			array.push(arr[i]);
		}
	}
	return array;
};

console.log(
	'Map function: ',
	mapForEach(arr, (item) => item * 2)
);
console.log(
	'Filter odd function: ',
	filterForEach(arr, (item) => item % 2 === 0)
);
console.log(
	'Filter even function: ',
	filterForEach(arr, (item) => item % 2 !== 0)
);

console.log(
	'Filter limit 2 function: ',
	filterForEach(arr, ((limit, item) => item > limit).bind(this, 2))
);
console.log(
	'Filter limit 1 function: ',
	filterForEach(arr, ((limit, item) => item > limit).bind(this, 1))
);

var person = {
	firstName: 'Default',
	lastName: 'Default',
	getFullname: function () {
		return this.firstName + ' ' + this.lastName;
	},
};

var john = {
	firstName: 'John',
	lastName: 'Doe',
};
console.log(person.getFullname());

// Reflection and extending

var john = {
	firstName: 'John',
	lastName: 'Doe',
	getFullname: function () {
		return this.firstName + ' ' + this.lastName;
	},
};

var jane = {
	firstName: 'Jane',
	getFirstName: function () {
		return this.firstName;
	},
};

// _.extend(john, jane);
// _.extendOwn(john, jane);

/**
 * Copy all of the properties in the source objects over to the destination object
 * but do not overwrite if property already exists.
 * @param destination Object to extend all the properties from `source`.
 * @param source Extends `destination` with all properties from these source objects.
 * @return `destination` extended with all the properties from the `sources` objects.
 **/

const myOwnExtend = (source, ...destination) => {
	if (!source || !destination) {
		return;
	}
	for (let eachdest of destination) {
		// get keys of each object in the destination
		const keys = findKeys(eachdest);
		for (let eachKey of keys) {
			// check if source has the destination property or methods already
			if (source.hasOwnProperty(eachKey)) {
				// do not overwrite existing properties or methods
				continue;
			} else {
				// copy new properties or methods to the source object
				source[eachKey] = eachdest[eachKey];
			}
		}
	}
};

const findKeys = (obj) => Object.keys(obj);

myOwnExtend(john, jane);

console.log(john);

// #endregion

// #region CLASSES
class Person {
	constructor(firstname = 'John', lastname = 'Doe') {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	getFullName() {
		return `${this.firstname} ${this.lastname}`;
	}
}

const jane = new Person('Jane', 'Doe');
console.log(jane);
('use strict');
const delayTime = 10000;
const delay = new Date(new Date().getTime() + delayTime);
class User {
	constructor(name, token, userId, expires) {
		this.name = name;
		this._token = token;
		this.userId = userId;
		this.expires = expires;
	}

	/**
	 * Check for token and whether its valid
	 * @return `token` if token is valid or else null
	 **/

	get token() {
		if (new Date() >= this.expires) return null;
		return this._token;
	}
	set token(value) {
		this._token = value;
		this.expires = new Date(new Date().getTime() + 10000);
	}
}
const saila = new User('Sailaja', 'Igirl', '1', delay);
let count = 0;
var interval = setInterval(() => {
	++count;
	if (count > 5) {
		clearInterval(interval);
		console.log('Stopped auto setting of token');
		return;
	}
	console.log('Setting Token for ' + count + ' time');
	saila.token = Math.ceil(Math.random() * 10);
}, delayTime);

// Polyfill
if (!Object.create) {
	Object.create = function (o) {
		if (arguments.length > 1) {
			throw new Error('Object.create implementation accepts only 1 parameter');
		}
		function F() {}
		F.prototype = o;
		return new F();
	};
}

// #endregion
