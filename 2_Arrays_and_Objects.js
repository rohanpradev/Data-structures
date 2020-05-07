/**
 * @fileoverview Performance of Objects and Arrays
 * This section deals with performance of Objects and Arrays
 * @license Colt_Steele Udemy
 * **/

//#region Big O of Objects and Arrays

/**
 * @description Big O of Objects
 * Insertion = O(1)
 * Removal = O(1)
 * Searching = O(n)
 * Access = O(1)
 * When you dont need ordering objects are an excellent choice!
 *
 * @see
 * Big O Object Methods
 * Object.keys = O(n)
 * Object.values = O(n)
 * Object.entries = O(n)
 * Object.hasOwnProperty = O(1)
 *
 * @description Big O of Arrays
 * Insertion = It depends...
 * Removal = It depends...
 * Searching = O(n)
 * Access = O(1)
 *
 * @note Insertion at the beginning of the array is expensive
 * @example below
 **/

let names = ['Michael', 'Melissa', 'Andrea'];
//              0           1          2

// Incase we add a value at the beginning Eg. raj

names = ['Raj', 'Michael', 'Melissa', 'Andrea'];
//         0        1          2          3

/**
 * Adding a new name Raj at the beginning messes up the indices
 * So we have to re index every single element of the array
 * Same applies to Removal at the beginning
 **/

/**
 * @see
 * Big O of Array Operations
 * push = O(1)
 * pop = O(1)
 * shift = O(n)
 * unshift = O(n)
 * concat = O(n)
 * slice = O(n)
 * sort = O(n * log n)
 * forEach/map/filter/reduce/etc. = O(n)
 */
//#endregion
