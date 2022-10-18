// Assignment Code
var generateBtn = document.querySelector("#generate");

//User Input variables
var passwordLength = 0;
var useLowerCase = Boolean;
var useUpperCase = Boolean;
var useNumber = Boolean;
var useSpecialChar = Boolean;
var tempPassword = [];
var userPassword = [];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [
  "@",
  "#",
  "$",
  "%",
  "!",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "=",
  "+",
  "~",
];

function generatePassword() {
  passwordLength = parseInt(
    prompt("Select Password Length between 8-128 characters")
  );
  if (!(passwordLength >= 8 && passwordLength < 129)) {
    alert("Password length requirement not met!");
  } else {
    useLowerCase = confirm("Lowercase Characters?");
    useUpperCase = confirm("Uppercase Characters?");
    useNumber = confirm("Numbers?");
    useSpecialChar = confirm("Special Characters?");
  }
  if (
    useLowerCase === false &&
    useUpperCase === false &&
    useNumber === false &&
    useSpecialChar === false
  ) {
    alert("At least one character type must be chosen!");
  }
  //if statements to form full string charset
  if (useLowerCase) {
    tempPassword = tempPassword.concat(lowerCase);
  }
  if (useNumber) {
    tempPassword = tempPassword.concat(number);
  }
  if (useUpperCase) {
    tempPassword = tempPassword.concat(upperCase);
  }
  if (useSpecialChar) {
    tempPassword = tempPassword.concat(specialChar);
  }
  //function to generate password
  let userPassword = tempPassword;
  userPassword.shuffle();
  return userPassword.slice(0, passwordLength).join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to randomize password
Array.prototype.shuffle = function () {
  let input = this;

  for (let i = 10; i <= tempPassword.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
};
