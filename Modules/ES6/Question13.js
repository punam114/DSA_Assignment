const names = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

let freq = names.reduce((ele,index)=>{
    ele[index] = (ele[index] || 0)+1;
    return ele;
},{})

console.log(freq)
