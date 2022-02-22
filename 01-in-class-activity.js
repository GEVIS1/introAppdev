/**
 * ES6 Basics 1
 */

console.log("Hello, World!")

/**
 * Problem 1
 * 
 * Declare two immutable variables called name & age with the values Jane & 45.
 * Use the two variables & string interpolation to display the expected output.
 * 
 *  Expected output:
 *  Hello my name is Jane & I am 45 years old.
 */

const name = "Jane", age = 45;
console.log(`Hello my name is ${name} & I am ${age} years old.`)

/**
 * Problem 2
 * 
 * Calculate the sum of the given integers & use string interpolation to display the expected output.
 * 
 *  const x = 1957458
 *  const y = 2975653
 * 
 *  Expected output:
 *  The sum of 1957458 & 2975653 is 4933087
 */

const x = 1957452
const y = 2975635
const result = x + y

console.log(`The sum of ${x} & ${y} is ${result}`)

/**
 * Problem 3
 * 
 * Calculate the average of the given array of doubles called nums & use string interpolation to display the expected output.
 * 
 *  const nums = [45.3, 67.5, -45.6, 20.34, -33.0, 45.6]
 * 
 *  Expected output:
 *  Average : 16.69
 */

const nums = [45.3, 67.5, -45.6, 20.34, -33.0, 45.6]
const average = nums.reduce((total, currentValue) => total + currentValue, 0) / nums.length

console.log(`Average: ${average.toFixed(2)}`)