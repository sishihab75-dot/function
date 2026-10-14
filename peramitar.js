
// function calld

function vaatkhao(){
    console.log("hand your wash -- ");
    console.log("tar por khaw --");
}
vaatkhao();

//  function square 

function square (num){
    console.log("Tha valu of the peramitar :", num);
    const borgo = num * num;
    console.log("square of the given number :", borgo);

}

square(10);

//  function add 


function add(num , num1, num2){
    console.log("The number is :", num , num1 , num2);
    const sum = num + num1 + num2;
    console.log("The valu of the number : ", sum);
}
add(10, 10, 10);

// Argugument 

function more(mony){
    const duble = mony*2;
    console.log("The number is : ", mony);
        console.log("Answer is : ", duble);

}

more(20);
console.log("-------------------");
more(30);
console.log("----------------");
more(40);
console.log("-------------");
const hi = 100;
more(hi);
const Output = more(200);
console.log("outpurt is :",Output);

function tentimes(number){
    const result = number*10;
    return result;
}

const output = tentimes(200);
console.log("outpurt is :",output);