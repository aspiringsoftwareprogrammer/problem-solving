function isIsogram(str) {
    let seenLetters = {}; // Empty object to store seen letters
    
    // Convert the string to lowercase
    let lowerCaseStr = str.toLowerCase();
    
    // Loop through each letter
    for (let i = 0; i < lowerCaseStr.length; i++) {
      let letter = lowerCaseStr[i];
      
      // If we've seen this letter before, it's not an isogram
      if (seenLetters[letter]) {
        return false;
      }
      
      // Mark this letter as "seen" by adding it to the object
      seenLetters[letter] = true;
    }
    
    // If we finish the loop without finding repeats, it's an isogram
    return true;
  }
  
  /*
  Explanation 
  str has no repeating letters - true 
  str has no same consecutive letters - true (aka same letter repeated close - moose)
  str has no same non consecutive letters - true (aka same letter repeated not close - aba)
  
  Psydo code
  an empty object to keep track of whether there are repeated strings
  covert string to lower case 
  iterate through the string - save each letter in variable 
  
  */