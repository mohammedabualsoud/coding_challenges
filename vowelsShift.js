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

  for (let idx = 0; idx < vowelsList.length; idx++) {
    const vowelPos = vowelsList[idx];

    if (idx + 1 < vowelsList.length) {
      const nextVowelIdx = vowelsList[idx + 1];

      shiftedChars[nextVowelIdx] = message[vowelPos];
    } else {
      shiftedChars[vowelsList[0]] = message[vowelPos];
    }
  }

  return shiftedChars.join("");
}

console.log(solution("codesignal") === "cadosegnil");
