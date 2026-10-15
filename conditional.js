function iseven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

console.log(iseven(20));
console.log(iseven(19)); 


function stringsize(str){
    
    console.log("the string is :", str);
    const size = str.length;
    if( size % 2 == 0 ){
        console.log("this is a even size :");
        
    }
    else
    {
        console.log("this is not even size :");
        

    }
    return size;
}
const valu = stringsize("shihab is a bad man  ");
console.log("the string size is :", valu);

