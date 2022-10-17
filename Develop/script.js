// Assignment Code
var generateBtn = document.querySelector("#generate");

//User Input prompts
var passwordLength = '';
var useLowerCase = Boolean
var useUpperCase = Boolean
var useNumber = Boolean
var useSpecialChar = Boolean
var tempPassword = [];
const userPassword = "";
charSet = {
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  specialChar: '!@#$%^&*()_=+~',
}

function generatePassword() {
  passwordLength = parseInt(
    prompt("Select Password Length between 8-128 characters")
  );
  if (!(passwordLength >= 8 && passwordLength < 129)) {
    alert("Password length requirement not met!")
  } else {
    useLowerCase = confirm("Lowercase Characters?");
    useUpperCase = confirm("Uppercase Characters?");
    useNumber = confirm("Numbers?");
    useSpecialChar = confirm("Special Characters?");
  }
    if (useLowerCase === false && useUpperCase === false && useNumber === false && useSpecialChar === false) {
      alert("At least one character type must be chosen!");
    }
  if (useLowerCase) {
    tempPassword = tempPassword.concat(charSet.lowerCase);
  };
  if (useUpperCase) {
    tempPassword = tempPassword.concat(charSet.upperCase);
  };
  if (useNumber) {
    tempPassword = tempPassword.concat(charSet.number);
  };
  if (useSpecialChar) {
    tempPassword = tempPassword.concat(charSet.specialChar);
  };
  console.log(tempPassword);
  let tempPasswordToString = tempPassword.toString();
    for (var i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * tempPassword.length)
    };
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
