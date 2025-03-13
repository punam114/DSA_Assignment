function longestCommonPrefix(arr) {

    let prefix = arr[0];//flower

    for (let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (!prefix) return "";
        }
    }

    return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))