export const isVowel = (letter: string) => vowels.includes(letter);

export const vowels = "aAāĀeEēĒiIīĪoOōŌuUūŪ";

export const isConsonant = (letter: string) => consonants.includes(letter);

export const consonants = "bBcCčČdDfFgGģĢhHjJkKķĶlLļĻmMnNņŅpPrRŗŖsSšŠtTvVzZžŽ";

export const genders = {
  masculine: "masculine",
  feminine: "feminine",
  // neuter: Symbol("neuter")
};
