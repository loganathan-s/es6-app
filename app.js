import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
//Becauste of Default export we renamed 'apiKey' to 'renamedKey' while importing and it will work without any error
//import renamedKey from './src/config';
import {apiKey as renamedKey, url, sayHi, names, sex } from './src/config.js';
// Importing default export and named exports in single line
import User, { createUrl, gravatar } from './src/user.js';


const ages = [1,1,4,52,12,4];
sayHi("Logan");
console.log(uniq(ages)); 
console.log(renamedKey); 
console.log(names); 
console.log(sex); 


const logan = new User("logan", "loganathan.ms@gmail.com", "railsshopping.com");
console.log(logan);
const profile = createUrl(logan.name);
const image = gravatar(logan.email);