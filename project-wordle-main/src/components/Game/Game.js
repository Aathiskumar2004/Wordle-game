import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GamerOverBanner from "../GameOverBanner/GamerOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [guesses, setGuesses] = React.useState([
    // {
    //   id: "12q3enie",
    //   value: "donut",
    // },
    // {
    //   id: "12swqwqq3enie",
    //   value: "water",
    // },
    // {
    //   id: "12swsasaqwqq3enie",
    //   value: "wafer",
    // },
  ]);

  // console.log(guesses);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = {
      id: `${tentativeGuess}-${Math.random()}`,
      value: tentativeGuess,
    };

    let nextGuessArray = [...guesses, nextGuess];
    setGuesses(nextGuessArray);

    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (nextGuessArray.length >= 6) {
      setGameStatus("lost");
    }
  }

  // console.log(guesses);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus !== "running" && (
        <GamerOverBanner
          gameStatus={gameStatus}
          answer={answer}
          guessesLength={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
