function longest(s1, s2) {
    // your code
    let s1arr = s1.split("");
    let s2arr = s2.split("");
    let arr = s1arr.concat(s2arr)
    let unique = [...new Set(arr)];
    return unique.sort().join("");
    console.log(unique)
  }
  
  
  /*
  explanation 
  we have two input strings and we need to return our own string 
  our returned string needs to be sorted alphabetically 
  this returned string needs to have unique letters from st1 and st2
  
  psydo code
  combine s1 and s2 values into an array 
  remove duplicate values in said array 
  use the sort method on that array
  
  
  
  
  
  */