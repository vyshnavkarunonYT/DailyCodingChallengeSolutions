// The challenge is to debug the following function
// function calculateSum(arr) {
//   var total = 0;
//   for(var i = 0; i <= arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }


// Solution 1: Simply changing <= to < in for loop
function calculateSum(arr) {
    var total = 0;
    for (var i=0; i<arr.length; i++) {
        total+=arr[i];
    }
    return total;
}

// Solution 2: Using of operator
function calculateSum2(arr) {
    var total = 0;
    for(let val of arr) {
        total += val;
    }
    return total;
}

// Solution3 : Using the reduce function
function calculateSum3(arr) {
    return arr.reduce((a,b)=>{return a+b;}, 0);
}


arr = [10,20,30];
console.log(calculateSum(arr));
console.log(calculateSum2(arr));
console.log(calculateSum3(arr));