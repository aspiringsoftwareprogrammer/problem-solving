function squareDigits(num){
    let result = [];
    let numArr = num.toString().split('');
    for(i=0; i< numArr.length; i++){
      numArr[i] = parseInt(numArr[i]) // changes string to number
      let sqr =  numArr[i] * numArr[i]; // square root value of each number
      result.push(sqr)// convert value to array of numbers
      console.log(result) // issue square rooting string not number
      
    }
    let int =  parseInt(result.join(''));// convert array to num
    return int;
    
  }
  
  /*
  explanation - input num is series of numbers 
  need to output each num in nums squared value
  
  psydo code
  empty array to add sqaure root values in
  convert num to array to make it easier to iterate through each value 
  https://stackoverflow.com/questions/19182266/how-to-convert-an-integer-into-an-array-of-digits
  num.toString().split('');
  
  for loop to go through each num in array of numbers
  change numberarray[] to square root value 
  push value to new empty array value 
  convert array back to integer values and 
  https://www.designcise.com/web/tutorial/how-to-convert-an-array-of-digits-to-an-integer-in-javascript 
  const digits = [1, 2, 3, 4, 5];
  const int = digits.reduce((accum, digit) => (accum * 10) + digit, 0);
  
  console.log(int); // 12345
  
  return said value 
  
  
  
  */