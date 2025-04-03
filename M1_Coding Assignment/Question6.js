function longestCommonPrefix(arr) {
    if (!arr.length) return "";

    let ans = "";

    for (let i = 0; i < arr[0].length; i++) {
        let char = arr[0][i]; 

        for (let j = 1; j < arr.length; j++) {
            if (arr[j][i] !== char) return ans; 
        }

        ans += char; 
    }

    return ans;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"