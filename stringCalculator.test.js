const add = require("./stringCalculator");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself if input is a single number", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});
