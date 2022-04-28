var arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
for(let number = 1; number <= 15; number++){
    number = arr.push(Math.floor(Math.random()*100));
}  
console.log(arr);


