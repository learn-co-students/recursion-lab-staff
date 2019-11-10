// Code your solution here!

function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let subString = string.substring(1, string.length);
    printString(subString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(string) {
  let length = string.length;
  if (length < 2) {
    return true;
  } else if (string[0] === string[length - 1]) {
    return isPalindrome(string.substring(1, length - 1));
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, index - 1) : array[index];
}

function maxOf(array) {
  return array.length === 1 ? array[0] : Math.max(array.pop(), maxOf(array));
}

function includesNumber(array, number) {
  if (!array.length) {
    return false;
  } else if (array[0] === number) {
    return true;
  } else {
    return includesNumber(array.slice(1), number);
  }
}
