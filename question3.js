const checkLongestWord = (s) => {
    let newArray = s.split(' '); 
    let longest; 
    newArray.forEach((word)=> {
        if (!longest || word.length > longest.length) {
            longest = word; 
        }
    })
    return longest;
}

console.log(checkLongestWord("hello man how you doing"));
