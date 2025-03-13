let arr =[2, 4, 6, 8, 10, 3];

function findOutlier(arr){
   let oddCount = "";
   let evenCount = "";
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      evenCount+=arr[i];
    }
    else{
      oddCount+=arr[i];
    }
  }
  console.log(Math.min(oddCount,evenCount));
  return;
}

findOutlier(arr)
