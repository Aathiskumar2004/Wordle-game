import React from "react";

import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import Cell from "../Cell/Cell";

const Guess = ({ guess, answer }) => {
  const result = checkGuess(guess, answer);
  // console.log(result);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letters={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
};
export default Guess;
