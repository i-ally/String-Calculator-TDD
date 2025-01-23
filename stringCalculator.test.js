const add = require("./stringCalculator");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself if input is a single number", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});

test("should return the sum of two numbers separated by a comma", () => {
  expect(add("1,2")).toBe(3);
  expect(add("4,5")).toBe(9);
});

test("should return the sum of multiple numbers separated by commas", () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("1,2,3,4,5")).toBe(15);
});

test("should handle new lines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("1\n2\n3")).toBe(6);
});

test("should support custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//#\n2#3#4")).toBe(9);
});

test("should throw an exception for negative numbers", () => {
  expect(() => add("-1,2,-3")).toThrow("negative numbers not allowed: -1, -3");
});
