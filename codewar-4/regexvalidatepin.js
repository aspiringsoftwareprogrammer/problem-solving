function validatePIN(pin) {
    // Check if pin consists only of digits - 
    if (!/^\d+$/.test(pin)) {
      return false; // If it contains non-digits, return false
    }
    // Check if pin length is either 4 or 6
    if (pin.length === 4 || pin.length === 6) {
      return true; // If length is 4 or 6, return true
    } else {
      return false; // Otherwise, return false
    }
  }
    
  /*
  Explanation 
  pin is a string data type
  need to check length of string to ensure it is valid (4 or 6 only)
  also check string does not contain letters - need to then return false 
  
  Psydo Code
  https://pandaquests.medium.com/5-easy-ways-to-check-if-a-string-contains-only-numbers-in-javascript-305db38625e8#:~:text=The%20RegExp%20pattern%20%2F%5E%5Cd,the%20string%20and%20false%20otherwise. 
  /^\d+$/ - to check for numbers only 
  test method - 
  https://www.w3schools.com/jsref/jsref_regexp_test.asp 
  RegExpObject.test(string) 
  === for strict equality
  iterate over string - use for loop 
  if else statement to check conditions 
  return boolean values 
  
  */