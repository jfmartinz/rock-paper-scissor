import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

// Custom hook for easy access to the context
export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [userChoice, setUserChoice] = useState(null); // Rock, Paper, or Scissors
  const [computerChoice, setComputerChoice] = useState(null); // AI move
  const [result, setResult] = useState(''); // Win, Lose, or Draw
  const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

  // Reset scores
  const resetGame = () => {
    setScore({ wins: 0, losses: 0, draws: 0 });
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  return (
    <GameContext.Provider
      value={{
        userChoice,
        setUserChoice,
        computerChoice,
        setComputerChoice,
        result,
        setResult,
        score,
        setScore,
        resetGame,
      }}>
      {children}
    </GameContext.Provider>
  );
};
