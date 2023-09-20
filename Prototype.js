//Prototype
function Movie(title){
    this.title=title;
}
const movie1= new Movie('The Avengers');
movie1.year=2022;// adding a property of Object
console.log(movie1);

const movie2= new Movie('The number 1 mistry');
console.log(movie2.__proto__); //__proto__ to find out what is the prototype of the object

//Adding prototype 
Movie.prototype.getDetails  =function(){
    console.log(`Title:${this.title}`);
}
console.log(movie1.getDetails);