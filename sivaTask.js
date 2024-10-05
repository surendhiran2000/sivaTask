//1st task
const a=10;
const b=20;
const c=30
let d = a+b+c;
console.log(d)

//2nd task
const prompt=require('prompt-sync')();
const a =prompt('enter the number:')
const b =prompt('enter the number:')
const c =prompt('enter the number:')
let d = a*b*c;
console.log('multiple value is:'+d)

//3rd task
const prompt=require('prompt-sync')();
const a =prompt('enter the number:')
const b =prompt('enter the number:')
let c = a/b;
console.log('division value is:'+c);

//4th task
const prompt = require('prompt-sync')();
const kilometer=prompt('kilometers');
let miles=kilometer * 0.621371;
console.log('miles:'+miles)

//5th task
const prompt = require('prompt-sync')();
const celsius=prompt('celsius');
let fahrenheit=celsius * 1.8+32;
console.log('fahrenheit:'+fahrenheit)

//6th task
let a=10;
let b=20;
if (a>b){
    console.log('10 greater than 20')
}
else{
    console.log('20 greater than 10')
}

//7th task
for ( num=5; num<=10;num++){
    console.log(num)
}

//8th task
for ( let num=1; num<=10; num++){
    if (num % 2===0){
        console.log(num);
    }
   
}

//9th task


for ( let num=1; num<=10; num++){
    
        console.log(num *2);
}
 for (num=-10;num<=-1;num++){
     console.log(num);
}
for (num=10;num>=1;num--){
    console.log(num);
}

//10th task
 
 let array = [2, 4, 5, 6, 3, 7, 3, 6, 3, 7, 6, 3];
 let countOf3 = 0;

 for (let i = 0; i < array.length; i++) {
  if (array[i] === 3) {
    countOf3++;
    console.log("Count of 3:", countOf3);
  }
 }
//task
let input= [45, 4, 9, 16, 25];
let output=[]
for (i=0; i<input.length;i++){
    output.push(input[i] + 1)
}
console.log(output)

//new task
let array = [2, 4, 5, 6, 3, 7, 3, 6, 3, 7, 6, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 3) {
    array[i] = 10;
  }
}

console.log(array);

