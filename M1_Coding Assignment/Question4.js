let str = "ivicc";

function canFormPalindrome(str){
     let obj = {};
  for(let i=0;i<str.length;i++){
         if(obj[str[i]]){
           obj[str[i]]++;
         }
         else{
           obj[str[i]] = 1;
         }
   }
   let oddCount = 0;
   for(let key in obj){
     if(obj[key]%2!=0){
       oddCount++
     }
    }
  if(oddCount<=1){
    return true;
  }
  else{
   return  false;
  }
  return;
}

console.log(canFormPalindrome(str))
