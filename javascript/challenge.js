function solution(numbers) {
    // create a empty array
    let zigzagResults = []

    for(let i = 0; i <numbers.length-2; i++){
        let a = numbers[i];
        let b = numbers[i + 1];
        let c = numbers[i + 2];
        
        if((a<b && b > c) || (a > b && b < c )){
            zigzagResults.push(1);
        }else{
            zigzagResults.push(0)
        }
    
    }
    return zigzagResults;

}

/**
 * Explanation 
 * I am given an array of numbers and i am supposed to focus on only the three first numbers of said array + determine if they are a zigzag
 * this is the zigzag ()a < b > c) or ()a > b < c).
 * if they form a zigzag note it down as 1
 * if they don't form a zigzag note it down as 0
 * need to keep doing this till we reach the end of the array
 * push these new values onto a new array and return that value
 * 
 */