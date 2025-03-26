const people = [{ name: "Alice", 
    address: { city: "New York",street: { name: "Broadway", number: 123 }}
    }, 
    { name: "Bob", 
    address: { city: "Los Angeles", 
    street: { name: "Sunset Boulevard", number: 456 }}
    }];
    
    let result = []
    for(let i=0;i<people.length;i++){
    let {name,address:{ city,street:{name : streetname}}} = people[i];
    result.push((`${name} Lives in ${city} on ${streetname}`));
    }
    console.log(result)