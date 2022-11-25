import { isVowel, isConsonant } from "./util";

const validate = (word: string) => {
  const letters = [...word];

  const vowelCount = letters
    .map((x) => isVowel(x))
    .map(Number)
    .reduce(sum);
  const consonantCount = letters
    .map((x) => isConsonant(x))
    .map(Number)
    .reduce(sum);
  const otherCount = letters.length - vowelCount - consonantCount;

  let valid = vowelCount !== 0 && consonantCount !== 0;

  if (otherCount > 0) {
    return false;
  }

  if (word.length > 3) {
    if (word.endsWith("ties")) {
      valid = false;
    }
    if (word.endsWith("t")) {
      valid = word.endsWith("mit") || word.endsWith("simt");
    }
  }

  if (word.length < 3) {
    valid = ["tu", "es", "šī", "un", "tā"].includes(word);
  }

  if (invalidSuffixes.some((x) => word.endsWith(x))) {
    return false;
  }
  if (invalidSuffixLetters.includes(word.substring(-1))) {
    return false;
  }

  return valid;
};

export default validate;

const sum = (a: number, b: number) => a + b;

const invalidSuffixLetters = "bBcCčČdDfFgGģĢhHjJkKķĶlLļĻmMnNņŅpPqQrRŗŖtTvVzZžŽ";
const invalidSuffixes = [
  "bt",
  "ēt",
  "gt",
  "īt",
  "kt",
  "lt",
  "nt",
  "mt",
  "ot",
  "pt",
  "rt",
  "st",
  "ūt",
  "vt",
  "zt",
];
