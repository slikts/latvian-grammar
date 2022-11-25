import { isVowel } from "./util";

const countSyllables = (word: string) => {
  const letters = [...word].map(isVowel);
  let count = letters[0] ? 1 : 0;
  void letters.reduce((a, b) => {
    if (!a && b) {
      count += 1;
    }
    return b;
  });
  return count;
};

export default countSyllables;
