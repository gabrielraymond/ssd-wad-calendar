// components/CalendarHeader.tsx
import React from 'react';

interface CalendarHeaderProps {
  currentDate: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentDate, prevMonth, nextMonth }) => {
  return (
    <div className="flex justify-between mb-4">
      <button onClick={prevMonth}>Previous Month</button>
      <h1 className="text-2xl font-bold">
        {currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
      </h1>
      <button onClick={nextMonth}>Next Month</button>
    </div>
  );
};

export default CalendarHeader;
