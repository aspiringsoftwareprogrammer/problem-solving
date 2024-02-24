String.prototype.toJadenCase = function () {
    //...
    let words = this.split(" ")// this refers to the specific string on which we are calling .toJadenCase
    //console.log(words)
    for(i=0; i< words.length; i++){
      if(words[i][0].toLowerCase()){
        let capital = words[i][0].toUpperCase() // capitalises first letter
        words[i] = capital + words[i].slice(1) // replace capitalised value to rest of array
        
      }
    }
     return words.join(" ");
    
  };
  
  
  /*
  Explanation 
  you are given string value - sentence to be exact 
  need to return string with updated values 
  we want each word to have its beginning character capitalised 
  
  Psydo code 
  we want to create a variable that will stand as the input variable for our method 
  to do that we need to use the this keyword 
  the split method turns the string to an array - it is easier to iterate through
  use if else statement - if words[i] is lowercase then do the following
  we want to grab each word and capitalise the first letter 
  reasign each word[i] with the capital letter plus rest of the word
  return the string with all the changes combined - aka word.join("")
  
  */