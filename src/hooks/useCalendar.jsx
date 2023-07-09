import { useEffect, useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getYear,
  getMonth,
} from 'date-fns';

export default function useCalendar() {
  const [calendarState, setCalendarState] = useState([
    {
      year: getYear(new Date()),
      months: [
        {
          month: getMonth(new Date()) + 1,
          daysFromMonth: [],
        },
      ],
    },
  ]);

  const { year } = calendarState[0];
  const { month } = calendarState[0].months[0];

  useEffect(() => {
    const calendarDate = new Date(year, month - 1);
    updateDaysFromMonth(calendarDate);
  }, [month, year]);

  const updateDaysFromMonth = (date) => {
    const startOfMonthDate = startOfMonth(date);
    const endOfMonthDate = endOfMonth(date);

    const daysOfMonth = eachDayOfInterval({
      start: startOfMonthDate,
      end: endOfMonthDate,
    });

    const formattedDaysOfMonth = daysOfMonth.map((day) =>
      parseInt(format(day, 'd'))
    );

    setCalendarState((prevCalendarState) => [
      {
        ...prevCalendarState[0],
        months: [
          {
            ...prevCalendarState[0].months[0],
            daysFromMonth: formattedDaysOfMonth,
          },
        ],
      },
    ]);
  };

  const goToPreviousMonth = () => {
    setCalendarState((prevCalendarState) => {
      let newYear = prevCalendarState[0].year;
      let newMonth = prevCalendarState[0].months[0].month - 1;

      if (newMonth < 1) {
        newYear--;
        newMonth = 12;
      }

      return [
        {
          ...prevCalendarState[0],
          year: newYear,
          months: [
            {
              ...prevCalendarState[0].months[0],
              month: newMonth,
            },
          ],
        },
      ];
    });
  };

  const goToNextMonth = () => {
    setCalendarState((prevCalendarState) => {
      let newYear = prevCalendarState[0].year;
      let newMonth = prevCalendarState[0].months[0].month + 1;

      if (newMonth > 12) {
        newYear++;
        newMonth = 1;
      }

      return [
        {
          ...prevCalendarState[0],
          year: newYear,
          months: [
            {
              ...prevCalendarState[0].months[0],
              month: newMonth,
            },
          ],
        },
      ];
    });
  };

  const goToCurrentMonth = () => {
    setCalendarState((prevCalendarState) => {
      const currentYear = getYear(new Date());
      const currentMonth = getMonth(new Date()) + 1;

      return [
        {
          ...prevCalendarState[0],
          year: currentYear,
          months: [
            {
              ...prevCalendarState[0].months[0],
              month: currentMonth,
            },
          ],
        },
      ];
    });
  };

  const getFormattedMonth = () => {
    const { year, months } = calendarState[0];

    const calendarDate = new Date(year, months[0].month - 1);
    return format(calendarDate, 'yyyy년 MM월');
  };

  return {
    year: calendarState[0].year,
    month: calendarState[0].months[0].month,
    daysFromMonth: calendarState[0].months[0].daysFromMonth,
    goToPreviousMonth,
    goToNextMonth,
    goToCurrentMonth,
    getFormattedMonth,
  };
}
