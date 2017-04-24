class MovieCollection extends Array {
	              //.. rest function
 constructor(name, ...items){
 	// spread function
 	super(...items)
 	this.name = name;
 }

 add(movie){
 	this.push(movie);
 }

 allMovies(){
 	// for..of only loops the iterator object, so it will pick only array not name property
 	for (const movie of movies){
 		console.log(movie);
 	}
 }
}

const movies = new MovieCollection('My Fav Movies', {name: 'X-men', stars: 9, name: 'BatMan', stars: 10});