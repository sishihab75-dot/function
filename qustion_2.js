//  create function that will return only the even numbers 

function returneven(number){
    console.log("The number is : ", number);
    let sum = 0;
    for(const num of number){
        if( num % 2 == 0 ){
            console.log("Evan number :", num);
        }
        else{
            console.log("Odd number :", num);
        }

        sum = sum + num;
      
    }
    console.log("total sum is :",sum);
      if(sum % 2 == 0){
            console.log("even");
        }
        else{
            console.log("odd");
        }
    return sum;

}

let valu = [1,2,3,4,5,6,7,8,9];
const result = returneven(valu);
console.log( result );