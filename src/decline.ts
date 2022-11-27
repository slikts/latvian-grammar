// https://en.wikipedia.org/wiki/Latvian_declension

import { Gender } from "./util";

/**
 * 
 */
const decline = (word: string, gender: Gender = Gender.Masculine) => {
  const suffix1 = word.slice(-1);
  const suffix2 = word.slice(-2);

  if (gender === Gender.Masculine) {
    // Handle exceptions
    if (masculineExceptions2.includes(word)) {
      return Declension(2, "s", true);
    }
    if (word === "ļaudis") {
      return Declension(6, "is", true);
    }
  }

  const genderSuffixes =
    gender === Gender.Masculine ? masculineSuffixes : feminineSuffixes;
  const suffix = genderSuffixes[suffix2] ? suffix2 : suffix1;
  const declension = genderSuffixes[suffix];
  if (!declension) {
    throw Error(`invalid word: ${word}`);
  }
  return Declension(genderSuffixes[suffix], suffix);
};

export default decline;

export const Declension = (declensionCase: number, suffix: string, exception = false) => ({
  declensionCase,
  suffix,
  exception,
});

export type DeclensionType = ReturnType<typeof Declension>

// TODO: remove Record
export const masculineSuffixes: Record<string, number> = {
  s: 1,
  š: 1,
  is: 2,
  us: 3,
  a: 4,
  e: 5,
};
export const feminineSuffixes: Record<string, number> = {
  a: 4,
  e: 5,
  s: 6,
};

export const masculineExceptions2 = [
  "mēness",
  "akmens",
  "asmens",
  "ūdens",
  "rudens",
  "zibens",
  "suns",
  "sāls",
];
