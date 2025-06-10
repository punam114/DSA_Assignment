const people = [
    { name: "Alice", 
      address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
    { name: "Bob", 
    address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } }
    ];
   
   let arr = []
  for(let i=0;i<people.length;i++){
    let {name,address:{city,street:{name:streetName ,number}}} = people[i]
    
    arr.push(`${name} lives in ${city}, ${streetName}`)
  }

console.log(arr)

let {name,address:{city,street:{name:streetName ,number}}} = people[0]

console.log(`${name} lives in ${city}, ${streetName}`)