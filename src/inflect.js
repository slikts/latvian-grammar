import decline from "./decline";
import palatalize from "./palatalize";
import { genders } from "./util";

const inflect = (word, gender = genders.masculine) => {
  const declension = decline(word, gender);
  const { suffix, declensionCase } = declension;
  const base = word.slice(0, -suffix.length);
  const palatalized = palatalize(word, declension);

  const Word = (case_, count, suffix_) => {
    const fullCase = `${case_}-${count}`;
    let base_ = palatalizable[declensionCase].includes(fullCase)
      ? palatalized
      : base;

    if (case_ === "instrumental") {
      base_ = `ar ${base_}`;
    }

    return [case_, `${base_}${suffix_}`];
  };

  const plural = mapObject(
    pluralInflections[declensionCase],
    ([case_, suffix_]) => {
      return Word(case_, "plural", suffix_);
    }
  );
  const singular = mapObject(
    singularInflections[declensionCase],
    ([case_, suffix_]) => {
      return Word(case_, "singular", suffix_);
    }
  );

  return {
    declension,
    inflections: {
      plural,
      singular,
    },
  };
};
export default inflect;

const mapObject = (object, fn) =>
  Object.fromEntries(Object.entries(object).map(fn));

const Suffixes = (
  nominative,
  genitive,
  dative,
  accusative,
  instrumental,
  locative,
  vocative
) => ({
  nominative,
  genitive,
  dative,
  accusative,
  instrumental,
  locative,
  vocative,
});

export const caseKeys = [
  "nominative",
  "genitive",
  "dative",
  "accusative",
  "instrumental",
  "locative",
  "vocative",
];

const palatalizable = {
  2: ["genitive-singular", ...caseKeys.map((x) => `${x}-plural`)],
  5: ["genitive-plural"],
  6: ["genitive-plural"],
};

for (const i of Array.from({ length: 6 }, (_, i) => i + 1)) {
  if (!palatalizable[i]) {
    palatalizable[i] = [];
  }
}

const singularInflections = {
  1: Suffixes("s", "a", "am", "u", "u", "ā", "s"),
  2: Suffixes("is", "a", "im", "i", "i", "ī", "i"),
  3: Suffixes("us", "us", "um", "u", "u", "ū", "us"),
  4: Suffixes("a", "as", "ai", "u", "u", "ā", "a"),
  5: Suffixes("e", "es", "ei", "i", "i", "ē", "e"),
  6: Suffixes("s", "s", "ij", "i", "i", "ī", "s"),
};

const pluralMasculine = Suffixes("i", "u", "iem", "us", "iem", "os", "i");
const pluralInflections = {
  1: pluralMasculine,
  2: pluralMasculine,
  3: pluralMasculine,
  4: Suffixes("as", "u", "ām", "as", "ām", "ās", "as"),
  5: Suffixes("es", "u", "ēm", "es", "ēm", "ēs", "es"),
  6: Suffixes("is", "u", "īm", "is", "īm", "īs", "is"),
};
