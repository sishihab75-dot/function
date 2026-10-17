//  Inc to feet 

function incetofeet(inc){
    console.log("The gavin ince is :", inc);
    const feetconveart = inc / 12;
    const feetnumber = parseInt(feetconveart);
    // const feetnumber = Math.floor(feetconveart);
    // const feetnumber = Math.trunc(feetconveart);
    const incremaining = inc % 12;
    const result = feetnumber + " feet " + incremaining + " inc ";
    return result;
}

const shihab = incetofeet(66);
console.log(shihab);