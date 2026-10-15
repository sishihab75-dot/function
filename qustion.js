

//  QUSTION : write a number a function to give me the sum of all numbers in  an array 


function sumofnumber(number){
    console.log("the number is :",number);
    let sum =0;
    for(let i=0; i<number.length; i++){
        sum = sum + number[i];

    }
    return sum;
    
}

const result = sumofnumber([10,20,30]);
console.log("the number is :", result);
