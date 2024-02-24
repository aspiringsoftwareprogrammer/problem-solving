const binaryArrayToNumber = arr => {
    // your code
    console.log(arr.join("").split(" "))
    let newArr = arr.join("").split(" ")
    return parseInt(newArr, 2)
    
    
  };
  
  /*
  explanation 
  arr is my input that has binary number 
  need to convert it to its numerical value 
  return said value 
  
  psydo code 
  going to iterate over the array
  make each num a string value 
  then use the parsemethod 
  return value
  
  join method removed the commas -- join(" ")
  .split converts numbers to array of string 
  parseInt expects a string of binary values hence the above conversion 
  
  
  
  
  
  */