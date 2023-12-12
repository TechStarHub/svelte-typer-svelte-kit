// time to string
export function timeToString(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes / 10 < 1 ? `0${minutes}` : minutes}:${
    seconds / 10 < 1 ? `0${seconds}` : seconds
  }`;
}

// wpm calculating function
export function calculateWpm() {
  const words = typedText.split(" ").length;
  const minutes = timeElapsed / 60;
  const wpm = Math.floor(words / minutes);
  return wpm;
}

// create an array of letter objects from the givenText
/* @params text : string */
export function createLetters(text) {
  const letters = text.split("");
  const result = [];
  letters.forEach((letter, index) => {
    result.push({ letter: letter, isCorrect: undefined, idx: index });
  });
  return result;
}
