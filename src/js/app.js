import { zodiacSign, normolized, uniq, isSorted } from "./lib.js";
console.log(zodiacSign(4,12));
const data = [2,15,28,100,2,0,15,1];
console.log(normolized(data, 2));
console.log('data is ' + data);

const data2 = [2,15,28,100,2,0,15,1];
console.log(uniq(data2));
console.log(data2);
const data3 = [1, 8, 18, 50, 150 , 200 , 205, 1200];
console.log(isSorted(data3));