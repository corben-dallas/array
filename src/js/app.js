import { ZodiacSign, normolized } from "./lib.js";
const person = new ZodiacSign(20, 1);
console.log(person.showZodiacSign(person));
const data = [12,3,0,234,45,33,4,5,4,65,12];
console.log(normolized(data, 2));