import { useCalendarContextApi } from '../context/CalendarContext';
import { css } from '@emotion/react';

const day = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const header = css`
  display: flex;
  justify-content: space-evenly;
  margin: 50px 0 10px;
`;

const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #414751;
  color: #ffffff;
  position: relative;
`;

const Calendar = () => {
  const calendar = useCalendarContextApi();
  const formattedMonth = calendar.getFormattedMonth();

  return (
    <div>
      <div css={header}>
        <button onClick={calendar.goToPreviousMonth}>prev</button>
        <div>{formattedMonth}</div>
        <button onClick={calendar.goToNextMonth}>next</button>
      </div>

      <button onClick={calendar.goToCurrentMonth}>now</button>

      <div css={day}>
        {calendar.daysFromMonth.map((day) => (
          <div key={day}>
            <div css={button}>{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
