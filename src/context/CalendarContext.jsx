import { createContext, useContext } from 'react';
import useCalendar from '../hooks/useCalendar';

export const CalendarContext = createContext();

// eslint-disable-next-line react/prop-types
export const CalendarProvider = ({ children }) => {
  const calendar = useCalendar();
  return (
    <CalendarContext.Provider value={calendar}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContextApi = () => {
  return useContext(CalendarContext);
};
