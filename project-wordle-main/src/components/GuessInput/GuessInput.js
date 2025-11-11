import { useState } from "react";

const GuessInput = ({ gameStatus, handleSubmitGuess }) => {
  const [tentativeGuess, setTentativeGuess] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (tentativeGuess.length !== 5) {
            window.alert("please type exactly 5 characters");
          } else {
            // console.log(tentativeGuess);
            handleSubmitGuess(tentativeGuess);
            setTentativeGuess("");
          }
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          placeholder={
            gameStatus !== "running" ? "Game over" : "Type your guess"
          }
          disabled={gameStatus !== "running" ? true : false}
          value={tentativeGuess}
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
          minLength={5}
          maxLength={5}
          id="guess-input"
          type="text"
        />
      </form>
    </>
  );
};

export default GuessInput;
