//function to extract substring from string, arguments : (string, beginningIndex, endingIndex) eg.: extractString("gaston",0,1)= "ga"
const extractString = (tag, beg, end) => {
  return tag.substring(beg, end);
};

//function to validate Name and id letters of name, arguments : (name, letters) eg.: verificationName("gaston","GA") all arguments capitalized to avoid matching errors.
const verificationName = (name, nameLetters) => {
  return extractString(name, 0, 2).toUpperCase() === nameLetters.toUpperCase()
    ? true
    : false;
};
//function to validate LastName and id letters of lastname, arguments : (lastName, letters) eg.: verificationName("RODRIGUEZ","RO") all arguments capitalized to avoid matching errors.
const verificationLastName = (lastName, lastNameLetters) => {
  return extractString(lastName, 0, 2).toUpperCase() ===
    lastNameLetters.toUpperCase()
    ? true
    : false;
};
//function to sum all numbers with an even or odd position in the array eg.: (["123456"],true)
const sumNumbers = (numbers, isEven) => {
  //cast strings to array of integers.
  const numbersArray = numbers.split("").map(function (item) {
    return parseInt(item, 10);
  });
  let result = 0;
  let oddResult = 0;
  let evenResult = 0;
  //sum of all even positions
  if (isEven) {
    for (const [i, num] of numbersArray.entries()) {
      i % 2 === 0 ? (evenResult += num) : 0;
      result = evenResult;
    }
    //sum of all odd positions
  } else {
    for (const [i, num] of numbersArray.entries()) {
      i % 2 != 0 ? (oddResult += num) : 0;
      result = oddResult;
    }
  }

  return result;
};
//function to summ all numbers
const sumAllNumbers = numbers => {
  let numbersArray = numbers.split("").map(function (item) {
    return parseInt(item, 10);
  });
  let result = 0;
  for (const [i, num] of numbersArray.entries()) {
    result += num;
  }
  return result;
};
//function to validate order of name and lastname in id tag
const verificationLettersOrder = (name, lastName, id) => {
  const lastNamePart = extractString(id, 0, 2);
  const namePart = extractString(id, 2, 4);
  const nameL = extractString(name, 0, 2);
  const lastNameL = extractString(lastName, 0, 2);
  const letters = lastNameL.toUpperCase().concat(nameL.toUpperCase());
  return letters === lastNamePart.concat(namePart) ? true : false;
};
//function to validate digit in the id tag
const verificationDigit = (numbers, digit) => {
  const s = sumAllNumbers(numbers);
  const o = sumNumbers(numbers, false);
  const e = sumNumbers(numbers, true);
  const x = o * 2 + e * 3 + s;
  const v = x % 10;

  return v === parseInt(digit, 10) ? true : false;
};
//main function to validate employee data and company id
const idValidator = (name, lastName, id) => {
  const nameLetters = extractString(name, 0, 2);
  const lastNameLetters = extractString(lastName, 0, 2);
  const numbers = extractString(id, 4, id.indexOf("-"));
  const digit = extractString(id, id.indexOf("-") + 1, id.length);

  return verificationName(name, nameLetters) &&
    verificationLastName(lastName, lastNameLetters) &&
    verificationLettersOrder(name, lastName, id) &&
    verificationDigit(numbers, digit)
    ? "OK"
    : "NOT VALID";
};

//test scenarios

console.log(
  "Marlon Brandon BRMA20191224-9: ",
  idValidator("Marlon", "Brandon", "BRMA20191224-9")
);

console.log(
  "Jane Sunderland SUJA202132189-1: ",
  idValidator("Jane", "Sunderland", "SUJA202132189-1")
);

console.log(
  "John Cambell CAJO2022091459-2: ",
  idValidator("John", "Cambell", "CAJO2022091459-2")
);

console.log(
  "Margaret Tatcher MATA2022091459-2: ",
  idValidator("Margaret", "Tatcher", "MATA2022091459-2")
);

console.log(
  "Sigmund Freud FRSI2022091459-8: ",
  idValidator("Sigmund", "Freud", "FRSI2022091459-8")
);
