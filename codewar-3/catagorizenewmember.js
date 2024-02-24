function openOrSenior(data){
    let result = []
    
    for(i = 0; i < data.length; i++){
      if(data[i][0] >= 55 && data[i][1] > 7){
        result.push("Senior")
      }else{
        result.push("Open")
      }
    }
    return result;
  }
  
  
  /*
  Explanation
  senior - 55 age + handicap > 7
  handicap value can be -2 till 26
  
  Psydo code 
  data is a array of arrays - first value is age + second value is person's handicap
  return value is array of strings 
  need to create a empty array that will have the string values 
  need to iterate through the array 
  do if else statemenet to check senior and open eligibility
  push value to empty array
  
  */