import React, { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarDay from "./CalendarDay";
import EventList from "./EventList";
import CreateEvents from "./CreateEvents";

const daysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

const CalendarWithEvents: React.FC = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Date>(today);
  const [events, setEvents] = useState<{ [key: string]: any[] }>({});
  const [dateEvent, setDateEvent] = useState();

  const [isCreateShow, setIsCreateShow] = useState(false);

  const handleCreateEvent = (date: any, dayEvents: any) => {
    console.log("lol", dayEvents);
    if (dayEvents.length < 3) {
      setDateEvent(date);
      setIsCreateShow(true);
    } else {
      alert('only 3 events are permitted')
    }
  };

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "{}");
    setEvents(storedEvents);
  }, []);

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const calendar: JSX.Element[] = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week: JSX.Element[] = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<></>);
        } else if (day <= days) {
          const date = new Date(year, month, day);
          const dayEvents = events[date.toISOString().split("T")[0]] || [];

          week.push(
            <CalendarDay
              key={j}
              date={date}
              // onClick={() => addEvent(date)}
              onClick={() => {
                handleCreateEvent(date, dayEvents);
              }}
              events={
                <EventList
                  dayEvents={dayEvents}
                  events={events}
                  date={date}
                  setEvents={setEvents}
                />
              }
            />
          );
          day++;
        }
      }

      calendar.push(<tr key={i}>{week}</tr>);
    }

    return calendar;
  };

  return (
    <div className="container mx-auto">
      <CalendarHeader
        currentDate={currentDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <table className="table-auto w-full">
        <thead className="bg-black text-white">
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>

      <CreateEvents
        show={isCreateShow}
        onClose={() => setIsCreateShow(false)}
        date={dateEvent}
        events={events}
        setEvents={setEvents}
      />
    </div>
  );
};

export default CalendarWithEvents;
