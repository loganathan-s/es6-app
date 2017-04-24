//Proxy are used to override default behaviour of an object

const person = {name: "Logan", age: 28};
//Proxy takes two things, 1st target(for which you're going to proxy), 2nd handler -operation required to re write
const personProxy = new Proxy(person, {

 get(target, name){
 	console.log("someone is asking for ", target, name); //where target is original object i.e person here
 	return 'nana'
 }	

});
//The process of proxying the property call Trap
personProxy.name = "Loganathan";

// proxy
 const phoneHandler = {
    set(target, name, value) {
      target[name] = value.match(/[0-9]/g).join('');
    },
    get(target, name) {
      return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
    }
  }
  //Here Target object is empty one.
  const phoneNumbers = new Proxy({}, phoneHandler);


//Proxy to throw error for invalid object property keys
const safeHandler = {
    set(target, name, value) {
      const likeKey = Object.keys(target).find(k => k.toLowerCase() === name.toLowerCase());
      if (!(name in target) && likeKey) {
        throw new Error(`Oops! Looks like like we already have a(n) ${name} property but with the case of ${likeKey}.`);
      }
      target[name] = value;
    }
  };
  const saftey = new Proxy({ id: 100 }, safeHandler);
  saftey.ID = 200;
