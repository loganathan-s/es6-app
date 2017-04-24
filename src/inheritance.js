// Simple Animal Class
class Animal {
	constructor(){
		this.name = name;
		this.thirst = 100;
		this.belly = [];

	}

	drink(){
		this.thirst = 10;
		return this.thirst;
	}

	eat(food){
		this.belly.push(food);
		return this.belly;
	}


}
const rhino = new Animal('Rhiney');
rhino.eat('leaves');

// Dog Class inherits Animal
class Dog extends Animal {
	constructor(name, breed){
		// We need to create Animal instance before creating Dog instance, so it is mandatory to use super keyword which calls parent class 
		super(name);
		this.breed = breed;
	}

	bark(){
		consol.log(`bark bark`);
	}

	ea
}

const rhino = new Dog('Snickers', 'King Charles');
