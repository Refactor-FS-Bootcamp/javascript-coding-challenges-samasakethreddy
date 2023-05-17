function exe(arr1,arr2){
    let ans = new Array();
    for (let i = 0; i < arr1.length; i++) {
        let j;
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]){
                break;
        }
        if (j==arr2.length-1){
            ans.push(arr1[i]);
        }
    }
}
return ans;
}
console.log(exe([1,2,3,4],[2,3]));