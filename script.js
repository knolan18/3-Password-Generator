// generate random password
var generateBtn = document.querySelector("#generate");

// create arrays for {characterType}
var lowercase = `abcdefghijklmnopqrstuvwxyz`.split('');
var uppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('');
var numbers = `0123456789`.split('');
var specialCharacters = `!@#$%^&*`.split('');
var options = [];

function generatePassword() {
  var result = []
// prompt for length
  var pwLength = window.parseInt(prompt('How many characters would you like your password?'))
// check that length fulfills length requirement 8-128 characters
   if (pwLength < 8 || pwLength > 128) {
    window.alert("Password must contain between 8-128 charactors")
    return;
   };
 
// prompt for character type options
    var confirmUppercase =   window.confirm("Would you like to have uppercase characters in your password?");
    console.log(confirmUppercase);
    if(confirmUppercase === true) {
      options = options.concat(uppercase);
    }
    var confirmLowercase = window.confirm("Would you like to have lowercase characters in your password?");
    console.log(confirmLowercase);
    if(confirmLowercase === true) {
      options = options.concat(lowercase);
    }
    var confirmNumbers = window.confirm("Would you like to have numeric characters in your password?")
    console.log(confirmNumbers);
    if(confirmNumbers === true) {
      options = options.concat(numbers);
    }
    var confirmSpecialCharacters = window.confirm("Would you like to have special characters in your password?");
    console.log(confirmSpecialCharacters);
    if(confirmSpecialCharacters === true) {
      options = options.concat(specialCharacters);
    }
// alert if no character types are selected
    if(confirmUppercase === false
      && confirmLowercase === false
      && confirmNumbers ===false
      && confirmSpecialCharacters === false) {
        window.alert('Please select at least one character option to generate a password');
        return 'Invalid Character Choices';
    }
// generate a character and push to string that meets pwLength requirements
    for(var i = 0; i<pwLength; i++) {
      var character = randomNum(options);
      result.push(character);
    }
    console.log(result.join(''));
    return result.join('')
}
// randomize the character array
function randomNum(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var arrayIndex = arr[randomIndex];
  return arrayIndex;
}
// generate password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);