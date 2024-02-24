function accum(s) {
	// your code
  let resultArr = [] // add final values to this array 
  // convert s to array 
  let char = s.split("")
  
  char.forEach((char, index)=>{
    let capitalise = char.toUpperCase()
    let repeat = capitalise + char.toLowerCase().repeat(index);
    resultArr.push(repeat)
    
  })
  return resultArr.join("-")
  
}

/*
psydo code
input is of string s 
depending on index of string repeat that string value according to that index
make sure that the first repetition is capitalised 

solution 
create empty string - with the added new value to return 
convert s to array 
iterate through array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join 


*/