function capitalize(str) {
  const characters = str.split("");
  characters[0] = characters[0].toUpperCase();
  return characters.join("");
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = (function () {
  return {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    divide(a, b) {
      return a / b;
    },
    multiply(a, b) {
      return a * b;
    },
  };
})();

function isCapitalLetter(char) {
  const charCode = char.charCodeAt(0);
  return charCode >= 65 && charCode <= 90;
}

function isSmallLetter(char) {
  const charCode = char.charCodeAt(0);
  return charCode >= 97 && charCode <= 122;
}

function wrapNumber(start, end, current) {
  if (current < start) return "error";
  if (current <= end && current >= start) return current;

  const length = end - start + 1;
  let newCurr = current - length;
  while (newCurr > end) {
    newCurr = newCurr - length;
  }
  return newCurr;
}

function shiftCharacterBy(char, shiftBy) {
  const isCapital = isCapitalLetter(char);
  if (!isCapital && !isSmallLetter(char)) return char;

  // Array with numbers 65 to 90 representing Char codes for capital letters
  const capitalLetters = Array.from({ length: 26 }, (v, i) => i + 65);
  // Array with numbers 97 to 122 representing Char codes for small letters
  const smallLetters = Array.from({ length: 26 }, (v, i) => i + 97);

  const charCode = char.charCodeAt(0);
  let newCharCode = charCode + shiftBy;
  if (isCapital) {
    newCharCode = wrapNumber(
      capitalLetters[0],
      capitalLetters[capitalLetters.length - 1],
      newCharCode
    );
  } else {
    newCharCode = wrapNumber(
      smallLetters[0],
      smallLetters[smallLetters.length - 1],
      newCharCode
    );
  }
  return String.fromCharCode(newCharCode);
}

function caesarCipher(str, shiftBy) {
  return str
    .trim()
    .split("")
    .map((value) => {
      if (!value.match(/[a-zA-Z]/gi)) return value;
      return shiftCharacterBy(value, shiftBy);
    })
    .join("");
}

function analyzeArray(arr) {
  return {
    get average() {
      return (
        arr.reduce((sum, next) => {
          return sum + next;
        }) / arr.length
      );
    },
    get min() {
      return arr.reduce((smallest, next) => {
        return smallest > next ? next : smallest;
      });
    },
    get max() {
      return arr.reduce((biggest, next) => {
        return biggest < next ? next : biggest;
      });
    },
    get length() {
      return arr.length;
    },
  };
}

export {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  wrapNumber,
  analyzeArray,
};
