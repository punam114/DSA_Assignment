//filter//
function filterEvenNumbers(arr){
  
    let newArr = arr.filter(e => e%2==0);
    return newArr;
    
 }
 console.log(filterEvenNumbers([1,4,5,3,6,8]));
 
 //reduce//
 function sumOfArray(arr){
   
   let newArr = arr.reduce((acc,cur) => acc+cur);
   return newArr;
   
 }
 console.log(sumOfArray([1,2,3,4,5]));
 
 //sort-concate
 function sortAndConcat(arr1, arr2){
   
   let newArr = ([...arr1,...arr2]).sort();
   return newArr;
   
 }
 console.log(sortAndConcat([1,2,5,7,3,9],[9,8,3,1,4,2]))