function testPositive(arr){
    return arr.filter((num)=>num>0);
}
console.log(testPositive([-1,-2,3,4,5,9,-6,7]));