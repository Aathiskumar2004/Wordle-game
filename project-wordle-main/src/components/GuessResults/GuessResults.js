import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const GuessResults = ({ guesses, answer }) => {
  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map((numb) => (
        <Guess
          key={numb}
          guess={guesses[numb] ? guesses[numb].value : undefined}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default GuessResults;
