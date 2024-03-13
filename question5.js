const capitalizeLetters = (s) => {
    let words = s.split(' '); 
    let newArray = []; 
    words.forEach(word => {
        newArray.push(word[0].toUpperCase() + word.slice(1)); 
    })
    console.log(newArray.join(" "));
}

capitalizeLetters("hello sir how are you");
