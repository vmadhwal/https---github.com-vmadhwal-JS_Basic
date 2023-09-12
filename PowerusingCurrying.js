function power(a){ // Taking an input for power
    return function(b){
        return b**a;// calculating the power
    }
}
const square= power(2);//This set the power that is for square a
console.log(square(2));// This is the number which will be squared
const cube= cube(3);//Thi will set the power i.e a=3;
console.log(cube(4));//The number would be 4 and it would be cubed
