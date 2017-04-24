const people = new Set();
people.add("Logan");
people.add("Eliza");
//Delete element from set
people.delete("Logan")

//clear whole set
people.clear

//se is always has uniq data, and it is always array


 const people = new Set();
  people.add('Wes');
  people.add('Snickers');
  people.add('Kait');
  for (const person of  people) {
    console.log(person);
  }
  const students = new Set(['Wes', 'Kara', 'Tony']);
  const dogs = ['Snickers', 'Sunny'];
  const dogSet = new Set(dogs);


//WeakSet  can contain only object, we cannot loop, iterator on weakset

let one = "logan";
let two = "two";

const weak_set = new WeakSet([one, two]); //weak set accept only object and it will clear the element from the set whenever the object is reomved from the code (i.e Garbagecollerctor)