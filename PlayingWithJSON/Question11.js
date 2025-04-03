let arr = [15, 30, 45, 60, 75, 90];

function extractAndReverse(arr) {
    let rev = [];
    
    for (let i = 0; i < arr.length; i++) {
        let arr1 = [];
        
        for (let j = i; j < arr.length; j++) {
            arr1.push(arr[j]);
            if (arr1.length >= 4) {
                let newarr = arr1.slice(3, 5).reverse(); 
                if (newarr.length > 0) {
                    rev.push(newarr);
                }
            }
        }
    }
    console.log(rev);
}

extractAndReverse(arr);