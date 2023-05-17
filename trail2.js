let arr1 = [1,2,3,4,5,6,7,8,9];
let sum = 0;
arr1.filter((num)=>sum+=num);
let avg = sum/(arr1.length);
console.log( "average of numbers is "+avg);