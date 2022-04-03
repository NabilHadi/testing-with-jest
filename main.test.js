import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  wrapNumber,
  analyzeArray,
} from "./main.js";

test("return first character capitalized", () => {
  expect(capitalize("hello world")).toEqual("Hello world");
  expect(capitalize("hello")).toEqual("Hello");
  expect(capitalize("w")).toEqual("W");
});

test("reverses String", () => {
  expect(reverseString("Hello")).toEqual("olleH");
  expect(reverseString("world")).toEqual("dlrow");
  expect(reverseString("w")).toEqual("w");
});

test("calculator object", () => {
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.add(3, 5)).toEqual(8);
  expect(calculator.subtract(5, 2)).toEqual(3);
  expect(calculator.subtract(10, 4)).toEqual(6);
  expect(calculator.divide(10, 2)).toEqual(5);
  expect(calculator.divide(20, 10)).toEqual(2);
  expect(calculator.multiply(20, 2)).toEqual(40);
  expect(calculator.multiply(100, 2)).toEqual(200);
});

test("wrap number function", () => {
  expect(wrapNumber(3, 6, 8)).toEqual(4);
  expect(wrapNumber(3, 6, 9)).toEqual(5);
  expect(wrapNumber(3, 6, 3)).toEqual(3);
  expect(wrapNumber(3, 6, 6)).toEqual(6);
  expect(wrapNumber(3, 6, 5)).toEqual(5);
  expect(wrapNumber(3, 6, 11)).toEqual(3);
  expect(wrapNumber(3, 6, 13)).toEqual(5);
  expect(wrapNumber(3, 6, 2)).toEqual("error");
  expect(wrapNumber(3, 6, 1)).toEqual("error");
  expect(wrapNumber(65, 90, 70)).toEqual(70);
  expect(wrapNumber(65, 90, 91)).toEqual(65);
  expect(wrapNumber(65, 90, 93)).toEqual(67);
});

test("caesar cipher function", () => {
  expect(caesarCipher("Hello world", 1)).toEqual("Ifmmp xpsme");
  expect(caesarCipher("javaScript", 1)).toEqual("kbwbTdsjqu");
  expect(caesarCipher("hello, world!", 1)).toEqual("ifmmp, xpsme!");
  expect(caesarCipher("z", 1)).toEqual("a");
  expect(caesarCipher("z", 2)).toEqual("b");
  expect(caesarCipher("z", 3)).toEqual("c");
  expect(caesarCipher("a", 3)).toEqual("d");
  expect(caesarCipher("Hi my name is Aaaa", 13)).toEqual("Uv zl anzr vf Nnnn");
});

test("analyze array function", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toEqual(1);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toEqual(8);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toEqual(6);
});
