function movie(title, year){
    const movieObj={
        title:title,
        year: year,
        genre: 'Action, Sci-fi, Thriller',
        cast:["Robert Downey Jr. , Chris Evans"],
        getDetails: function(){
            console.log(`Title: ${movie.title}\nYear: ${movie.year}`)
        }
    }
    return movieObj;
}
const movie1=movie("Jawan",2023);
console.log(movie1);


//Constructor function
function Movie(title, year){
    this.title=title;
    this.year=year;
    
    this.getDetails=function() {
        console.log(`Title: ${movie.title}\n
        Year: ${movie.year}`);
    }
}

//new keyword
const movie3= new Movie("Vaccine War", 2023);
console.log(movie3);