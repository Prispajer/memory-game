import {GameDifficulty} from "../types/enum";

export const saveGameHistory = (
  movesCount: number,
  mistakesCount: number,
  timeElapsed: number,
  selectedDifficulty: GameDifficulty
) => {
  if (
    movesCount !== undefined &&
    mistakesCount !== undefined &&
    timeElapsed !== undefined &&
    selectedDifficulty !== null
  ) {
    const gameHistory = {
      date: new Date().toISOString(),
      difficulty: selectedDifficulty,
      mistakes: mistakesCount,
      moves: movesCount,
      time: timeElapsed,
    };

    const existingGameHistory = loadGameHistory();
    existingGameHistory.push(gameHistory);
    localStorage.setItem("gameHistory", JSON.stringify(existingGameHistory));
  } else {
    console.error("Game history data is incomplete.");
  }
};

export const loadGameHistory = () => {
    return JSON.parse(
      localStorage.getItem("gameHistory") || "[]"
  );
};