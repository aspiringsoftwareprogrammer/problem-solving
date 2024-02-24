function solution(string) {

    let result = ""
    
    for(i=0; i < string.length; i++){
      let letter = string[i];
      if(letter === letter.toUpperCase()){
        result += " " + letter
      }else{
        result+=letter
      }
      
    }
    return result
  
  }
  
  
  
  
  
  
  
  /*
  explanation 
  we are given a string value
  we need to return new string value 
  check that the string contains capital letters
  if it does we need to add space to that part of the string - hence making it camel cased
  
  psydo code 
  we need a new variable to store changed string in
  need to iterate through each element in string 
  if - letter is capitalised then we should add space there 
  else keep everything as it was 
  return the modified array
  
  
  
  
  
  */