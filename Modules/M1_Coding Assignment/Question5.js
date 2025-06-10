let arr = [10, 20, 30, 40, 50];

function secondLargest(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
      if(arr[j]<arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr[1];
}
console.log(secondLargest(arr));
