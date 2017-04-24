// Scoped to Module
//named export
export const apiKey="abc123";
//named expoorts can be imported only with curly braces as below and the name should match the exports name
//import { apiKey } from './src/config';
// only way to rename the named exports while importing is to use as keyword like below.
//import { apiKey as renamedKey} from './src/config';
//The above can be done even while doing export
//export {names as renamnedNames, sex};
export const url="http://wesbos.com";
// default export can be renamed in to any name while importing, but named export can be exported only by th eexport name
// only one default export is allowed per module, howerver we can have any number of named exports. Module is nothing but a javascript file, h
//export default apiKey;
//Becauste of Default export we renamed 'apiKey' to 'renamedKey' while importing and it will work without any error
//import renamedKey from './src/config';



export function sayHi(name){
	console.log(`Hello there ${name}`)
}

//multiple named exports can be imported with comma as like below

//import {apiKey, url, sayHi } from './src/config.js';

//we can do multiple exports in same line as below

const names = ["Logan", "Eliza"];
const sex = ["Male", "Female"];
export {names, sex};