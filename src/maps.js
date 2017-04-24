const peoplew = new Map(); //Map is similar to Set, only difference is that it has only object.
			//KEY	//Value
peoplew.set("Logan", 1);
peoplew.set("Eliza", 2);
//Map(2) {"Logan" => 1, "Eliza" => 2}


 const dogs = new Map();
  dogs.set('Snickers', 3);
  dogs.set('Sunny', 2);
  dogs.set('Hugo', 10);
  dogs.forEach((val, key) => console.log(val, key));
  for (const [key, val] of dogs) {
    console.log(key, val);
  }

//Weak Map avaoids memory leak similar to weak set. memory leak -> having object ref which is no longer exists
 let dog1 = { name: 'Snickers' };
  let dog2 = { name: 'Sunny' };
  const strong = new Map();
  const weak = new WeakMap();
  strong.set(dog1, 'Snickers is the best!');
  weak.set(dog2, 'Sunny is the 2nd best!');
  dog1 = null;
  dog2 = null;