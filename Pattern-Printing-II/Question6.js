let n=5;

for(let i=1;i<n;i++){
  let bag = "";
  for(let j=n-1;j>=i;j--){
    bag+=" ";
  }
  for(let j=1;j<=2*i-1;j++){
    bag+="*";
  }
  console.log(bag);
}