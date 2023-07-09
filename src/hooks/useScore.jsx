import { useEffect, useState } from 'react';

export default function useScore() {
  const [dailyScore, setDailyScore] = useState([]);

  useEffect(() => {
    const storedScore = localStorage.getItem('dailyScore');
    if (storedScore) {
      setDailyScore(JSON.parse(storedScore));
    }
  }, []);

  const saveDailyScore = (year, month, day, score) => {
    setDailyScore((prevScores) => {
      const updatedScores = [...prevScores];
      const yearIndex = updatedScores.findIndex((item) => item.year === year);

      if (yearIndex !== -1) {
        const yearObj = updatedScores[yearIndex];
        const monthIndex = yearObj.months.findIndex(
          (item) => item.month === month
        );

        if (monthIndex !== -1) {
          const monthObj = yearObj.months[monthIndex];
          const dayIndex = monthObj.dailyScore.findIndex(
            (item) => item.day === day
          );

          if (dayIndex !== -1) {
            monthObj.dailyScore.splice(dayIndex, 1);
          }

          monthObj.dailyScore.push({ day, score });
          monthObj.dailyScore.sort((a, b) => a.day - b.day);
        } else {
          yearObj.months.push({
            month,
            dailyScore: [{ day, score }],
          });
        }
        yearObj.months.sort((a, b) => a.month - b.month);
      } else {
        updatedScores.push({
          year,
          months: [
            {
              month,
              dailyScore: [{ day, score }],
            },
          ],
        });
      }
      updatedScores.sort((a, b) => a.year - b.year);
      localStorage.setItem('dailyScore', JSON.stringify(updatedScores));
      return updatedScores;
    });
  };

  const scoreColors = [
    '#e55261',
    '#f26a4f',
    '#f6c752',
    '#9bcd64',
    '#45c7a8',
    '#4bbae0',
    '#2d77d8',
    '#a78de5',
    '#7153bc',
    '#e582b9',
    '#d2398d',
  ];

  return {
    dailyScore,
    saveDailyScore,
    scoreColors,
  };
}
