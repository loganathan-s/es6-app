//convetional way
// If function starts with Caps, then it's a constructor
function DogOne(name, breed){
	this.name = name;
	this.breed = breed;
}

// Add method to DogOne class
DogOne.prototype.bark = function(){
	console.log(`Bark Bark`);
}

const snickersOne = new DogOne("snickers", "King Charles");


//New way:

class Dog {

 constructor(name, breed){
    this.name = name;
	this.breed = breed;
 }

 // Instance methods/Prototype methods
 bark(){
 	console.log(`Bark Bark I'm ${this.name}`);
 }
// Instance methods/Prototype methods
 cuddle(){
  console.log(`I love you Ownner!`);	
 }

 // Static Method are exactly similar to class methods
 static info(){
 	console.log(`A dog is better than cat`)
 }
 //Getter method starts with prefix 'get'
 get description(){
 	return `${this.name} is coming from getter method, starts with key 'get'`
 }


 //Setter method starts with prefix 'set'
 set nickname(value){
 	this.nick = value; //return `${this.name} is coming from seter method, starts with key 'set'`
 }

 get nickname(){
 	return this.nick;
 }
}

const snickers = new Dog("snickers", "King Charles");
snickers.description
snickers.bark
//or 

//const Dog = class {

//}