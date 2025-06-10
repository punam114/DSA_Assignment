let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (let i = 0; i < arr.length; i++) {
    let bag =""
    for (let j = 0; j < arr[i].length; j++) {
      let sum = i+j;
        let sumChar=''+sum
        bag+=sumChar+" "
    }
    console.log(bag);
}