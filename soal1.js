function countChars(str) {
    let charCounts = {};
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCounts[char]) {
        charCounts[char]++;
      } else {
        charCounts[char] = 1;
      }
    }
    for (let char in charCounts) {
      console.log(char + " = " + charCounts[char]);
    }
    return;
  }
  
  countChars("HELLO WORLD!");