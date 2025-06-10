let n=197;
let bag = "";
let rem;
while(n>0){
  rem = n%10;
  n= Math.floor(n/10)
bag+=rem
}
console.log(bag)