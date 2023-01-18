// Declare global varables
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var uppercase;
var numbers;
var specialChar;

// Determine the length of password based on user's input
function checkLength() {
  passwordLength = prompt(
    "Please select your desired password length (between 8-128 characters):"
  );
  if(passwordLength === null){
    alert("Canceled by user.");
    canceled();
  }else if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid number. Please select a number between 8 and 128");
    checkLength();
  } else if (isNaN(passwordLength)) {
    alert("Invalid entry.  Please select a number between 8 - 128");
    checkLength();
  } else {
    alert(
      "The next set of questions will determine what will be included in your password."
    );
  }
  return passwordLength;
}

// Determines if uppercase letters will be used based on user's input
function useUppercase() {
  uppercase = prompt(
    "Would you like uppercase letters in your password? \n(Yes or No)"
  );
  uppercase = uppercase.toLowerCase();

  if (uppercase === "yes" || uppercase === "y") {
    uppercase = true;
    return uppercase;
  } else if (uppercase === "no" || uppercase === "n") {
    uppercase = false;
    return uppercase;
  } else {
    alert("Please answer Yes or No");
    useUppercase();
  }
  return uppercase;
}

//Determines if numbers will be used based on user's input
function useNumbers() {
  numbers = prompt(
    "Would you like to include numbers in your password? \n(Yes or No)"
  );
  numbers = numbers.toLowerCase();

  if (numbers === "yes" || numbers === "y") {
    numbers = true;
    return numbers;
  } else if (numbers === "no" || numbers === "n") {
    numbers = false;
    return numbers;
  } else {
    alert("Please answer Yes or No");
    useNumbers();
  }
  return numbers;
}

//Determines if special charaters will be used based on user's input
function useSpecialChar() {
  specialChar = prompt(
    "Would you like to include special characters in your password? \n(Yes or No)"
  );
  specialChar = specialChar.toLowerCase();

  if (specialChar === "yes" || specialChar === "y") {
    specialChar = true;
    return specialChar;
  } else if (specialChar === "no" || specialChar === "n") {
    specialChar = false;
    return specialChar;
  } else {
    alert("Please answer Yes or No");
    useSpecialChar();
  }
  return specialChar;
}

//Based on user's input; generates password
function generatePassword() {
  checkLength();
  useUppercase();
  useNumbers();
  useSpecialChar();

  var characters = lowercaseChar;
  var password = "";
  if (uppercase && numbers && specialChar) {
    characters += uppercaseChar + numberChar + specialChar;
  } else if (uppercaseChar && numbers) {
    characters += uppercaseChar + numberChar;
  } else if (numbers && specialChar) {
    characters += numberChar + specialChar;
  } else if (uppercase && specialChar) {
    characters += uppercaseChar + specialChar;
  } else if (uppercase) {
    characters += uppercaseChar;
  } else if (numbers) {
    characters += numberChar;
  } else if (specialChar) {
    characters += specialChar;
  } else {
    characters === lowercaseChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  if (password) {
   passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);