// https://en.wikipedia.org/wiki/Latvian_declension

import { genders } from "./util";

const decline = (word, gender = genders.masculine) => {
  const suffix1 = word.substr(-1);
  const suffix2 = word.substr(-2);

  if (gender === genders.masculine) {
    // Handle exceptions
    if (masculineExceptions2.includes(word)) {
      return Declension(2, "s", true);
    }
    if (word === "ļaudis") {
      return Declension(6, "is", true);
    }
  }

  const genderSuffixes =
    gender === genders.masculine ? masculineSuffixes : feminineSuffixes;
  const suffix = genderSuffixes[suffix2] ? suffix2 : suffix1;
  const declension = genderSuffixes[suffix];
  if (!declension) {
    throw Error(`invalid word: ${word}`);
  }
  return Declension(genderSuffixes[suffix], suffix);
};

export default decline;

export const Declension = (declensionCase, suffix, exception = false) => ({
  declensionCase,
  suffix,
  exception,
});

export const masculineSuffixes = {
  s: 1,
  š: 1,
  is: 2,
  us: 3,
  a: 4,
  e: 5,
};
export const feminineSuffixes = {
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
