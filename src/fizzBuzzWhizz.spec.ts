import { game } from "./fizzBuzzWhizz";

describe('FizzBuzzWhizz Game', () => {
  
  // Base cases: numbers that do not match any rule
  test('Input 1 should return 1', () => {
    expect(game(1)).toEqual(1);
  });

  test('Input 4 should return 4', () => {
    expect(game(4)).toEqual(4);
  });

  // Prime numbers (Bonus rule)
  test('Input 2 should return Whizz (Bonus: prime number)', () => {
    expect(game(2)).toEqual('Whizz');
  });

  // Combinations with prime numbers
  test('Input 3 should return FizzWhizz (Divisible by 3 and prime)', () => {
    expect(game(3)).toEqual('FizzWhizz');
  });

  test('Input 5 should return BuzzWhizz (Divisible by 5 and prime)', () => {
    expect(game(5)).toEqual('BuzzWhizz');
  });

  // Divisible by 3 only (Not prime)
  test('Input 6 should return Fizz', () => {
    expect(game(6)).toEqual('Fizz');
  });

  test('Input 9 should return Fizz', () => {
    expect(game(9)).toEqual('Fizz');
  });

  // Divisible by 5 only (Not prime)
  test('Input 10 should return Buzz', () => {
    expect(game(10)).toEqual('Buzz');
  });

  test('Input 20 should return Buzz', () => {
    expect(game(20)).toEqual('Buzz');
  });

  // Combinations: Divisible by both 3 and 5
  test('Input 15 should return FizzBuzz', () => {
    expect(game(15)).toEqual('FizzBuzz');
  });

  test('Input 30 should return FizzBuzz', () => {
    expect(game(30)).toEqual('FizzBuzz');
  });

  test('Input 75 should return FizzBuzz', () => {
    expect(game(75)).toEqual('FizzBuzz');
  });
});