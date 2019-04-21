import { zodiacSign, normolized, uniq, isSorted } from "./lib.js";
console.log('задание 1');
const date = 19;
const month = 2
console.log('date is ' + date + ' month is ' + month)
console.log(zodiacSign(date,month));

////////////////////////////////////
console.log('задание 2');
const data = [2,15,28,100,2,0,15,1];
console.log('data is ' + data);
console.log(normolized(data, 2));

console.log('задание 3');
const data2 = [7,12,15,28,100,2,0,12,15,1];
console.log('data is ' + data2);
console.log(uniq(data2));

console.log('задание 4');
const data3 = [1, 8, 18, 50, 150 , 200 , 205, 1200];
console.log('data is ' + data3);
console.log(isSorted(data3));