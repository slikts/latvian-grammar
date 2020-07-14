import React, { useCallback, useRef, useState } from "react";
import { genders } from "latvian-grammar";

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
  return (
    <div>
      <h3>
        <code>latvian-grammar</code> demo
      </h3>
      <div>
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
        <Inflect gender={gender} word={word} />
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
