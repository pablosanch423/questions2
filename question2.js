const checkPalindrome = (s) => {
    if (s.split("").join("") === s.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(checkPalindrome("racecar")); 
  