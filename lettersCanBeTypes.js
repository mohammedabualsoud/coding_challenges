const canBeType = (word, letters) => {
  let typedLetters = 0;

  for (char of word) {
    if (/[a-z]/i.test(char)) {
      if (letters.includes(char.toLowerCase())) {
        typedLetters++;
      } else return false;
    } else {
      typedLetters++;
    }
  }

  return typedLetters === word.length;
};

function solution(text, letters) {
  const wordList = text.split(" ");
  let wordCount = 0;

  for (word of wordList) {
    if (canBeType(word, letters)) wordCount++;
  }

  return wordCount;
}
