function friend(friends){
    //your code here
    
    let realFriends = []
    
    for(i=0; i < friends.length; i++){
      let friend = friends[i]
      
      if(friend.length === 4){
        realFriends.push(friend)
      }
      
    }
    return realFriends;
    
  }
  
  /*
  explanation 
  i have input friends which is a array of strings 
  i need to access each of the element of the friend list 
  if that friends.length is 4 i should return his name since he is a friend 
  
  Psydo 
  empty array to put filtered list of friends 
  iterate through the friends array 
  save each friend variable 
  do a if else statement 
  push the correct size friend in empty array 
  return the new array with filtered friends 
  
  */