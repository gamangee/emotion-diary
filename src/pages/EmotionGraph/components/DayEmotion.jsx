/* eslint-disable react/prop-types */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const dayScoreBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #414751;
  color: #ffffff;
`;

const btnAlign = css`
  display: flex;
  flex-direction: column;
`;

const dayBtnAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 3px 0;
  position: relative;
`;

const dayBtn = (color, isActive) => css`
  width: 20px;
  height: 20px;
  background-color: ${isActive ? color : '#ffffff'};
  border: 4px solid ${color};
  border-radius: 50%;
  cursor: pointer;
`;

const colLine = (color) => css`
  width: 2px;
  height: 60px;
  background-color: ${color};
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
`;

const rowLine = (color, isLastDay) => css`
  width: 30px;
  height: 2px;
  background-color: ${color};
  position: absolute;
  top: 18px;
  left: 30px;
  z-index: -1;
  display: ${isLastDay ? 'none' : 'block'};
`;

export default function DayEmotion({ calendar, score, day }) {
  const { year, month, daysFromMonth } = calendar;
  const { saveDailyScore, scoreColors, dailyScore } = score;

  const savedScore =
    dailyScore
      .find((item) => item.year === year)
      ?.months.find((item) => item.month === month)
      ?.dailyScore.find((item) => item.day === day)?.score || 0;
  const [activeScore, setActiveScore] = useState(savedScore);

  useEffect(() => {
    setActiveScore(savedScore);
  }, [savedScore]);

  console.log('dailyScore', dailyScore);

  const clickToSaveDailyScore = (score) => {
    const newScore = activeScore === score ? 0 : score;
    setActiveScore(newScore);
    saveDailyScore(year, month, day, newScore);
  };

  const isLastDay = daysFromMonth.length === day;

  return (
    <div>
      <div css={dayScoreBtn}>{day}</div>
      <div css={btnAlign}>
        {scoreColors?.map((color, index) => (
          <div key={index} css={dayBtnAlign}>
            <button
              id={-5 + index}
              css={dayBtn(color, activeScore === -5 + index)}
              onClick={() => clickToSaveDailyScore(-5 + index)}
            />
            <div css={colLine(color)}></div>
            <div css={rowLine(color, isLastDay)}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
