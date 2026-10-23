/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */


/**
 * Helper function to check if a number is prime.
 * A prime number is only divisible by 1 and itself.
 */
const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  // We only need to check up to the square root of the number for performance
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

/**
 * Main function to play the FizzBuzzWhizz game.
 * Evaluates the rules and returns the corresponding string or the original number.
 */
export const game = (input: number): string | number => {
  let result = "";
  
  // Rule 1: If the number is divisible by 3, add "Fizz"
  if (input % 3 === 0) result += "Fizz";
  
  // Rule 2: If the number is divisible by 5, add "Buzz"
  if (input % 5 === 0) result += "Buzz";
  
  // Bonus Rule: If the number is prime, add "Whizz"
  if (isPrime(input)) result += "Whizz";

  // If no rules were met (result is still empty), return the original number
  return result === "" ? input : result;
};