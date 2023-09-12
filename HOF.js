const arr= [1,2,4,32,7,8,5,65,43,24];
function square(num){
    const sqr=[];
for (let input of num){
    sqr.push(input*input);
}
return sqr;
}
console.log(square(arr));

function cube(num){
    const cb=[];
    for(input of num){
        cb.push(num*num*num);
    }
    return cb;
}
console.log(cube(arr));
