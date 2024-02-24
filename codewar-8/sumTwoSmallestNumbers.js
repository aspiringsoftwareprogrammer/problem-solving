function sumTwoSmallestNumbers(numbers) {  
    //Code here
    //console.log(numbers.sort().slice(-2))
    
    // capture last two elements 
    let lowNum = numbers.sort((a, b) => a -b)
    // add last two elements
    let sum = lowNum[0] + lowNum[1]
    //console.log(sum)
    return sum
    //return sum
    
  }
  
  
  /*
  explanation - array of numbers as input 
  find two lowest positive number
  add those two numbers 
  psydo code 
  sort out the array in order and capture the first two elements 
  
  */