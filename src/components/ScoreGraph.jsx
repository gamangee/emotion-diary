import { useState } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { useCalendarContextApi } from '../context/CalendarContext';

const container = css`
  position: relative;
`;

const btnAlign = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const dayBtnAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 10px 0;
  position: relative;
`;

const dayBtn = (selected, color) => css`
  width: 20px;
  height: 20px;
  background-color: ${selected ? color : '#ffffff'};
  border: 2px solid ${color};
  border-radius: 50%;
  cursor: pointer;
`;

const rowLine = (color) => css`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 95%;
  height: 1px;
  background-color: ${color};
  z-index: -1;
`;

const colLine = (color) => css`
  width: 1px;
  height: 60px;
  background-color: ${color};
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
`;

export default function ScoreGraph({ color }) {
  const calendar = useCalendarContextApi();
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div css={container}>
      <div css={btnAlign}>
        {calendar.daysFromMonth.map((day) => (
          <div key={day} css={dayBtnAlign}>
            <button
              css={dayBtn(selectedDay === day, color)}
              key={day}
              onClick={() => handleDayClick(day)}
            />
            <div css={colLine(color)}></div>
          </div>
        ))}
      </div>
      <div css={rowLine(color)}></div>
    </div>
  );
}

ScoreGraph.propTypes = {
  color: PropTypes.string.isRequired,
};
