const VOWELS = ["a", "e", "i", "o", "u", "y"];

function solution(message) {
  const shiftedChars = message.split("");
  const vowelsList = [];

  // Note: find all vowels with their positions
  for (let i = 0; i < message.length; i++) {
    if (VOWELS.includes(message[i])) {
      vowelsList.push(i);
    }
  }

  // Note: calculate vowels correct position after shift
  const vowelsMap = new Map();
  for (let idx = 0; idx < vowelsList.length; idx++) {
    const vowelPos = vowelsList[idx];
    if (idx + 1 < vowelsList.length) {
      vowelsMap.set(message[vowelPos], vowelsList[idx + 1]);
    } else {
      vowelsMap.set(message[vowelPos], vowelsList[0]);
    }
  }
  // Note: do the  shift
  for (let i = 0; i < message.length; i++) {
    if (VOWELS.includes(message[i])) {
      const nextVowelIdx = vowelsMap.get(message[i]);
      shiftedChars[nextVowelIdx] = message[i];
    }
  }

  return shiftedChars.join("");
}

console.log(solution("codesignal"));
