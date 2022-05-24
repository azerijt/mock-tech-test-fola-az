import fizzbuzz from "./skeleton";

test("should list numbers up to 2", () => {
  expect(fizzbuzz(2)).toStrictEqual([1, 2]);
});

test("should list numbers up to 3, replacing 3 with Fizz", () => {
  expect(fizzbuzz(3)).toStrictEqual([1, 2, "Fizz"]);
});

test("should list numbers up to 5, replacing 3 with Fizz and 5 with Buzz", () => {
  expect(fizzbuzz(5)).toStrictEqual([1, 2, "Fizz", 4, "Buzz"]);
});

test("should list numbers up to 15, replacing 3 with Fizz and 5 with Buzz and 15 with FizzBuzz", () => {
  expect(fizzbuzz(15)).toStrictEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
});
