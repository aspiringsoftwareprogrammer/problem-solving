function isTriangle(a,b,c){

    // Check if sum of any two sides is greater than the third side
     if (a + b > c && a + c > b && b + c >a ) {
       return true;
     } else {
       return false;
     }
     
   }
   
   
   
   /*
   explanation - a b c are numbers 
   by some form of calculation - we will get a value 
   
   
   */