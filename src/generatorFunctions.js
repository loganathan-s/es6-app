//Generaly notmal JS will execute the every line of the code until it finds return, Whereas as the Generator function can be passed
//Generator function will keep its variable until it completes all yields
function* listPeople(){
yield 'logan';	
yield 'eliza';	
}

//we can create generator fucntion as below also
function *listSex(){
yield 'male';	
yield 'female';	
}

const ppl = listPeople();
ppl.next // this will call & yield(return) the first yield
ppl.next // this will call & yield(return) the second yield

function* listPeople(){
yield 'logan';	
yield 'eliza';	
}


  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];


function* loop(arr){
	console.log("running")
	for (const item of arr) {
		yield item;
	}
}

  const inventorGen = loop(inventors); // this code wont execute anything
  inventorGen.next // run the function & returns first yield

 function ajax(url) {					//success	//call generator, data will be assigned to const of the calle, for firt call data assigned to beers, second time to wes likewise 		
    fetch(url).then(data => data.json()).then(data => dataGen.next(data))
  }

//We can use Generator fucntion for dependednt ajax calls
function* steps() {
    console.log('fetching beers');
    const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
    console.log(beers);
    console.log('fetching wes');
    const wes = yield ajax('https://api.github.com/users/');
    console.log(wes);
    console.log('fetching fat joe');
    const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
    console.log(fatJoe);
  }


  const dataGen = steps();
  dataGen.next(); // kick it off



  //Looping Generator instead of calling one by one

  function* lyrics() {
    yield `But don't tell my heart`;
    yield `My achy breaky heart`;
    yield `I just don't think he'd understand`;
    yield `And if you tell my heart`;
    yield `My achy breaky heart`;
    yield `He might blow up and kill this man`;
  }
  const achy = lyrics();

   for (const line of achy) {
    console.log(line);
  }