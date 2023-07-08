import { useEffect, useState } from 'react';
import {
  addMonths,
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from 'date-fns';

const useCalendar = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [daysFromMonth, setDaysFromMonth] = useState([]);

  useEffect(() => {
    const startOfMonthDate = startOfMonth(calendarDate);
    const endOfMonthDate = endOfMonth(calendarDate);

    const daysOfMonth = eachDayOfInterval({
      start: startOfMonthDate,
      end: endOfMonthDate,
    });

    const formattedDaysOfMonth = daysOfMonth.map((day) =>
      parseInt(format(day, 'd'))
    );

    setDaysFromMonth(formattedDaysOfMonth);
  }, [calendarDate]);

  const goToPreviousMonth = () => {
    setCalendarDate((prevDate) => addMonths(prevDate, -1));
  };

  const goToNextMonth = () => {
    setCalendarDate((prevDate) => addMonths(prevDate, 1));
  };

  const goToCurrentMonth = () => {
    setCalendarDate(new Date());
  };

  const getFormattedMonth = () => {
    return format(calendarDate, 'yyyy년 MM월');
  };

  return {
    goToPreviousMonth,
    goToNextMonth,
    goToCurrentMonth,
    getFormattedMonth,
    daysFromMonth,
  };
};

export default useCalendar;
