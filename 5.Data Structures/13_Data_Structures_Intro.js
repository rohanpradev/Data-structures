/**
 * @fileoverview Data Structures Introduction
 * @author Colt_Steele Udemy
 * **/

/**
 * @definition
 *
 * Data Structures are collection of values, the relationships among them,
 * and the functions or operations that can be applied to the data
 *
 */

//#region ES2015 Class in JavaScript

/**
 * @definition
 *
 * A class is a blueprint for creating objects with pre-defined methods and properties
 *
 * The method to create new objects must be called a constructor
 *
 * The class keyword creates a new constant, so you cannot redefine it
 *
 */

//  Example

class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

// Creating objects from classes (we use the new keyword)
let firstStudent = new Student('David', 'Gilmour');

// Instance methods

class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

let firstStudent = new Student('David', 'Gilmour');
firstStudent.getFullName();

// Class Methods

/**
 * The static keyword defines a static method for a class.
 * Static methods aren't called on instances of the class.
 * Instead, they're called on the class itself.
 * These are often utility functions, such as functions to create or clone objects.
 */

class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	static enrollStudents(...students) {
		// maybe send an email here
	}
}

let firstStudent = new Student('David', 'Gilmour');
let secondStudent = new Student('Roger', 'Waters');

Student.enrollStudents(firstStudent, secondStudent);

// More Realistic example

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static distance(a, b) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		return Math.hypot(dx, dy);
	}
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

Point.distance(p1, p2);

//#endregion
