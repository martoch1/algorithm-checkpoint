function exerciseCheckpoint(consonant) {
    let length = 0; // Variable to count the length of the consonant
    let wordCount = 0; // Variable to count the number of words in the consonant
    let vowelCount = 0; // Variable to count the number of vowels in the consonant
  
    for (let i = 0; i < consonant.length; i++) {
      let character = consonant[i];
  
      if (character === ".") {
        length--;
  
        if (character !== " ") {
          length++;
          break;
        }
  
        if (isVowel(character)) {
          vowelCount++;
        }
      } else if (length >= 0) {
        wordCount++;
      }
    }
  
    console.log("Word Count:", wordCount + 1);
    console.log("Vowel Count:", vowelCount);
    console.log("consonant Length:", length);
  }
  
  function isVowel(character) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(character.toLowerCase());
  }
  
  const consonant = "algorithm checkpoint.";
  exerciseCheckpoint(consonant);