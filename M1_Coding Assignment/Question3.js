let arr = [3, 7, 1, 2, 8, 4, 5];
let N = 8;

function findMissingNumber(arr, N){
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  let sumOfN = N*(N+1)/2;
  let missingNum = sumOfN - sum;
  console.log(missingNum);
  return;
}
findMissingNumber(arr, N)