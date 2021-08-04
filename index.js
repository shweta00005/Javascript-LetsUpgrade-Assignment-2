// ARRAY- Collection of elements of same type
// Create an Array with five names and print all five in reverse.

let arr= ["Sunday","Monday","Tuesday","Wednesday","Thursday"];

console.log(arr.length);

for (let i=4;i<=arr.length;i--)
{
    console.log(arr[i],i);
}


// CONDITIONS & LOOPS
// Print only the elements which are divisible by 5 from 1 to 50.
 
let a=50;

while(a<=50)
{ 
if(a%5==0){

    console.log(a);
}
    a++;
}

