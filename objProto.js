const car ={
    getDetails(name){
        console.log(`Your car is ${name}`);
    }
}

const car1= Object.create(car);

console.log(car1);
car1.getDetails("Audi");


//Three ways to create object 
// 1.Object literal
// 2. Create an object using constructor function
// 3. Using Object.Create where only the prototype will get linked no property will be copied 
