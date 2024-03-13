const SecondLargest = (array) => {
    const sorted = array.sort((a, b) => a - b); 
    return sorted[sorted.length - 2];
}

console.log(SecondLargest([1, 2, 3, 4])); 
