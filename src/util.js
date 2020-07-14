export const isVowel = letter => vowels.includes(letter);

export const vowels = "aAāĀeEēĒiIīĪoOōŌuUūŪ";

export const isConsonant = letter => consonants.includes(letter);

export const consonants = "bBcCčČdDfFgGģĢhHjJkKķĶlLļĻmMnNņŅpPrRŗŖsSšŠtTvVzZžŽ";

export const genders = {
  masculine: Symbol("masculine"),
  feminine: Symbol("feminine")
  // neuter: Symbol("neuter")
};
