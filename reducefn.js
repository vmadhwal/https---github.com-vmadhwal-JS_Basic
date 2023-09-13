//reduce(redfn, initial value)
//function(accumulator, currentValue, currentIndex, arr)
const input=[2,3,4,6,3,27,7];
const sum=  input.reduce((total, num)=>{
return total+num;
}, 0)