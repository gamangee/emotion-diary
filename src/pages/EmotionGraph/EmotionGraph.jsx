import { useCalendarContextApi } from '../../context/CalendarContext';
import { useScoreContextApi } from '../../context/ScoreContext';
import DayEmotion from './components/DayEmotion';
import { css } from '@emotion/react';

const header = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px 0;
  position: relative;
  > h1 {
    font-size: 24px;
  }
`;

const headerBtn = css`
  outline: none;
  border: none;
  padding: 10px 20px;
  background-color: #e1e1e1;
  border-radius: 10px;
  cursor: pointer;
`;

const nowBtn = css`
  ${headerBtn};
  position: absolute;
  top: 0;
  left: 55%;
`;

const dayScore = css`
  display: flex;
  justify-content: space-evenly;
  position: relative;
`;

const rowLines = css`
  position: absolute;
  top: 0;

  width: 100%;
  height: 1px;
  background-color: green;
`;

export default function EmotionGraph() {
  const calendar = useCalendarContextApi();
  const { daysFromMonth, getFormattedMonth } = calendar;
  const score = useScoreContextApi();

  return (
    <div>
      <div css={header}>
        <button css={headerBtn} onClick={calendar.goToPreviousMonth}>
          prev
        </button>
        <h1>{getFormattedMonth()}</h1>
        <button css={headerBtn} onClick={calendar.goToNextMonth}>
          next
        </button>
        <button css={nowBtn} onClick={calendar.goToCurrentMonth}>
          now
        </button>
      </div>
      <div css={dayScore}>
        {daysFromMonth.map((day) => (
          <div key={day}>
            <DayEmotion calendar={calendar} score={score} day={day} />
          </div>
        ))}
      </div>
    </div>
  );
}
