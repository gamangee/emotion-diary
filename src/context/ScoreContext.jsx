import { createContext, useContext } from 'react';
import useScore from '../hooks/useScore';

export const ScoreContext = createContext();

// eslint-disable-next-line react/prop-types
export const ScoreProvider = ({ children }) => {
  const score = useScore();
  return (
    <ScoreContext.Provider value={score}>{children}</ScoreContext.Provider>
  );
};

export const useScoreContextApi = () => {
  return useContext(ScoreContext);
};
