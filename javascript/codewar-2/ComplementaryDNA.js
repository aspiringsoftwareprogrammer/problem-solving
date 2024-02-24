function dnaStrand(dna){
    let string = ""
     for(let i = 0; i< dna.length; i++){
       if(dna[i] === "A"){
         string += "T"
       }else if(dna[i] === "T"){
           string += "A"
       } else if (dna[i] === "C"){
          string += "G"
       }else if (dna[i] === "G"){
         string += "C"
       }
     }
    return string;
  }
  /*
  Explanation 
  dna is a string with a combination of values of A T C G
  what we need to do is replace values of A with T and T with A
  we need to replace the values of C with G and G with C
  we need to return the new version of string
  Psydo code 
  we need to iterate through the dna string - to get access to each value 
  we can create a if else statement that captures a value and changes it according to the rule 
  we need to 
  
  the replace method does not actually update the dna string
  
  */