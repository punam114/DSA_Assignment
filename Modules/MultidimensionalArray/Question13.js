let arr=[
    [1,2,3,4,5],
    [6,7,8,9,1],
    [3,2,5,4,6],
    [7,8,9,1,2]
 ]
 let bag="";
 for(let i=0;i<arr.length;i++){
   if(i%2==0){
    bag+= arr[i].slice().reverse().join(" ")+" "
   }
   else{
     bag+=arr[i].join(" ")+" ";
   }
 }
 console.log(bag)