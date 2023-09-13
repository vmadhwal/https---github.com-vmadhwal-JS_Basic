//filter function
const input=[4,5,7,9,-8,4,-4,-9,-56];
const positive= input.filter(noNegative);
// const negative= input.filter(neg);
const negative= input.filter((num)=> num<0);

function noNegative(num){
    return num>=0
}
console.log(positive);

// function neg(num){
//     return num<0;
// }
// console.log(negative);


console.log(negative);