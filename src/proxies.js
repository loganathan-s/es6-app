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