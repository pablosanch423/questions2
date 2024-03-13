const removeDupes = (array) => {
    let newArray = [];
    array.forEach(number => {
        let check = false;
        for (let i = 0; i < newArray.length; i++) {
            if (number === newArray[i]) {
                check = true;
                break;
            }
        }
        if (!check) {
            newArray.push(number);
        }
    });
    console.log(newArray);
}

removeDupes([1, 2, 2, 3, 4, 4, 5]);
