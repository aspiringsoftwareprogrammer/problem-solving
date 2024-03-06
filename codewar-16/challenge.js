function stray(numbers) {
 
    let counts = {};
    
      // Count occurrences of each number
      for (let num of numbers) {
        if (counts[num]) {
          counts[num]++;
        } else {
          counts[num] = 1;
        }
      }
     //console.log(counts)
      
      // get the value of 1 from counts
      for (let val in counts){
        if(counts[val] == 1){
          
          return parseInt(val);
        }
      }}