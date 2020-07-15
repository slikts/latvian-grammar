import React, { useCallback, useRef, useState } from "react";
import { genders, countSyllables } from "latvian-grammar";

import Inflect from "./Inflect";

const App = () => {
  const [word, setWord] = useState("lācis");
  const [gender, setGender] = useState(genders.masculine);
  const handleWordChange = useCallback(
    ({ target: { value } }) =>
      void setWord(value.replace(/[^a-zA-Zā-žĀ-Ž]/g, ""))
  );
  const handleGenderChange = useCallback(
    ({ target: { value } }) => void setGender(genders[value])
  );
  let syllables;
  try {
    syllables = countSyllables(word);
  } catch (e) {
    syllables = "?";
  }

  return (
    <div className="App">
      <h3>
        <code>latvian-grammar</code> demo
      </h3>
      <div>
        <div class="input">
          <input value={word} type="text" onChange={handleWordChange} />
          <div>
            <label>
              Masculine
              <input
                type="radio"
                checked={gender === genders.masculine}
                value="masculine"
                onChange={handleGenderChange}
              />
            </label>
            <label>
              Feminine
              <input
                type="radio"
                checked={gender === genders.feminine}
                value="feminine"
                onChange={handleGenderChange}
              />
            </label>
          </div>
        </div>
        <Inflect gender={gender} word={word} />
        <p>Syllables: {syllables}</p>
      </div>
      <p>
        <a href="https://github.com/slikts/latvian-grammar">
          github.com/slikts/latvian-grammar
        </a>
      </p>
    </div>
  );
};

export default App;
