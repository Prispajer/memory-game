import { GameDifficulty } from "../types/enum";
import { loadGameHistory } from "../utils/localStorage";

export const GameVictoryModal = ({
  movesCount,
  mistakesCount,
  timeElapsed,
  selectedDifficulty,
  stopGame,
  startGame,
}: {
  movesCount: number;
  mistakesCount: number;
  timeElapsed: number;
  selectedDifficulty: GameDifficulty | null;
  stopGame: () => void;
  startGame: () => void;
}) => {
    const history = loadGameHistory();
    const lastHistoryRecord = history.length ? history[history.length - 1] : null;

  return (
    <>
      <div className="game-victory-backdrop"></div>
      <div className="game-victory-modal">
        <h1>Congratulations! You won!</h1>
        <h2>Your statistics:</h2>
        <ul>
          {history.length > 0 ? (
            <>
              <li>Moves: {lastHistoryRecord.moves}</li>
              <li>Mistakes: {lastHistoryRecord.mistakes}</li>
              <li>Time: {lastHistoryRecord.time} seconds</li>
              <li>
                Difficulty: {GameDifficulty[lastHistoryRecord.difficulty]}
              </li>
            </>
          ) : (
            <>
              <li>Moves: {movesCount}</li>
              <li>Mistakes: {mistakesCount}</li>
              <li>Time: {timeElapsed} seconds</li>
              <li>
                Difficulty:
                {selectedDifficulty
                  ? GameDifficulty[selectedDifficulty]
                  : "Unknown"}
              </li>
            </>
          )}
        </ul>
        <button onClick={startGame} className="game-victory-modal__button">
          Play again
        </button>
        <button onClick={stopGame} className="game-victory-modal__button">
          Back to menu
        </button>
      </div>
    </>
  );
};
