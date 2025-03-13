let str = "racecar";

function firstUniqueChar(str){
  let obj = {};
  for(let i=0;i<str.length;i++){
    if(obj[str[i]]){
      obj[str[i]]++;
    }
    else{
      obj[str[i]] = 1;
    }
  }
  for(let i=0;i<str.length;i++){
    if(obj[str[i]]==1){
      console.log(str[i]);
    }
  }
  return null;
}

firstUniqueChar(str)