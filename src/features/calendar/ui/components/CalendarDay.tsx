// components/CalendarDay.tsx
import React from "react";

interface CalendarDayProps {
  date: Date;
  onClick: () => void;
  events: JSX.Element;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date, onClick, events }) => {
  return (
    <td
      className="border-2 w-[250px] align-top cursor-pointer"
      onClick={onClick}
    >
      <div className={` pb-2 h-14`}>
        <p>{date.getDate()}</p>
      </div>
      <div onClick={(e) => e.stopPropagation()}>{events}</div>
    </td>
  );
};

export default CalendarDay;
