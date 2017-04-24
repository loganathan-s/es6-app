import slug from 'slug';
import { url } from './config';
import base64 from 'base-64';

//Deafult export
export default function User(name, email, website){
	return { name, email, website };
}
//Named export
export function createUrl(name){
	return `${url}/users/${slug(name)}`;
}

//Named export
export function gravatar(email){
   const hash = base64.encode(email);
   const photoURL = 'https://www.gravatar.com/avatar/${hash}';
   return photoURL;
}