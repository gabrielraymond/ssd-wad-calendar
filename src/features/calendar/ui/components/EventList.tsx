// components/EventList.tsx
import React, { useState } from "react";
import { convertTo12HourFormat } from "../../../../shared/helpers/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import UpdateEvents from "./UpdateEvents";
import Card from "./Card";

interface EventListProps {
  events: any;
  date: any;
  dayEvents: any;
  setEvents: any;
}

const EventList: React.FC<EventListProps> = ({
  dayEvents,
  events,
  date,
  setEvents,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [eventDetail, setEventDetail] = useState(false);

  const saveEventsToLocalStorage = (updatedEvents: {
    [key: string]: any[];
  }) => {
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const onDelete = (event: any) => {
    console.log("before delete", events);
    const eventDate = date.toISOString().split("T")[0];
    const updatedEvents = { ...events };

    // console.log('date', updatedEvents[eventDate])

    const index = updatedEvents[eventDate].filter(
      (data: any) => data !== event
    );
    updatedEvents[eventDate] = index;
    console.log("after delete", index);

    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
  };

  const handleUpdate = (data: any) => {
    setEventDetail(data);
    setIsUpdate(true);
  };

  if (events.length === 0) {
    return <div></div>;
  }

  return (
    <div>
      <ul>
        {dayEvents.map((event: any, index: any) => (
          <Card event={event} onDelete={onDelete} handleUpdate={handleUpdate} />
        ))}
      </ul>

      <UpdateEvents
        show={isUpdate}
        onClose={() => setIsUpdate(false)}
        data={eventDetail}
        date={date}
        events={events}
        setEvents={setEvents}
      />
    </div>
  );
};

export default EventList;
