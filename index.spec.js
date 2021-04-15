const { happyBirthday, sum, product, oddChecker, evenChecker, vowelsChecker, fizzBuzz} = require('./index.js')

describe("Testing console log of happyBirthday function", () => {
  test("happyBirthday function", () => {
    console.log = jest.fn();
    happyBirthday(3);
    expect(console.log).toHaveBeenCalledWith("Happy Birthday!");
    expect(console.log).toHaveBeenCalledTimes(3);
  })
})

describe("Testing return of sum function", () => {
  test("sum function", () => {
      expect(sum([1,2])).toBe(3);
  })
})

describe("Testing return of product function", () => {
  test("product function", () => {
      expect(product([1,2])).toBe(2);
  })
})

describe("Testing return of oddChecker function", () => {
  test("oddChecker function", () => {
      expect(oddChecker([1,2])).toBe(1);
  })
})

describe("Testing return of evenChecker function", () => {
  test("evenChecker function", () => {
      expect(evenChecker([1,2])).toBe(1);
  })
})

describe("Testing return of vowelsChecker function", () => {
  test("vowelsChecker function", () => {
      expect(vowelsChecker('abc')).toBe(1);
  })
})

describe("Testing return value of fizzBuzz function", () => {
  test("fizzBuzz function", () => {
    const expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz', 'Buzz'];
    expect(fizzBuzz(0,10)).toEqual(expected); 
  })
})
