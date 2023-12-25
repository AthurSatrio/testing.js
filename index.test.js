// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  }); 

  test("should return an empty string for an empty input", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });

  test("should handle already capitalized string", () => {
    const result = capitalize("WORLD");
    expect(result).toBe("WORLD");
  });

  test("should capitalize a single character string", () => {
    const result = capitalize("z");
    expect(result).toBe("Z");
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4] for an array containing odd and even numbers", () => {
    const result = filterOddNumber([1, 2, 3, 4, 5]);
    expect(result).toEqual([2, 4]);
  });

  it("should return an empty array for an array containing all odd numbers", () => {
    const result = filterOddNumber([1, 3, 5, 7, 9]);
    expect(result).toEqual([]);
  });

  it("should return the same array for an array containing all even numbers", () => {
    const result = filterOddNumber([2, 4, 6, 8, 10]);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it("should return only even numbers for an array containing a mix of odd and even numbers", () => {
    const result = filterOddNumber([11, 22, 33, 44, 55]);
    expect(result).toEqual([22, 44]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    const result = epochDateToUTC(0);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  test("should handle future epoch time", () => {
    const result = epochDateToUTC(1633056000);
    expect(result).toBe("Mon, 01 Oct 2021 00:00:00 GMT");
  });

  test("should handle negative epoch time", () => {
    const result = epochDateToUTC(-100000);
    expect(result).toBe("Wed, 31 Dec 1969 23:58:20 GMT");
  });

  test("should return 'Invalid Date' for invalid input", () => {
    const result = epochDateToUTC("invalid");
    expect(result).toBe("Invalid Date");
  });
});

