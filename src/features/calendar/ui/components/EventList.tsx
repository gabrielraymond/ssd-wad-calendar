// components/EventList.tsx
import React, { useState } from "react";
import { convertTo12HourFormat } from "../../../../shared/helpers/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import UpdateEvents from "./UpdateEvents";

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
          <div
            className={`m-1 p-1 w-[250px] text-white ${event.color} flex justify-between`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            key={index}
          >
            <div>
              <p>{event.name}</p>
              <p>{event?.email}</p>
              <p>{convertTo12HourFormat(event?.time)}</p>
            </div>

            {isHovering && (
              <div className="flex">
                <div
                  onClick={() => onDelete(event)}
                  className="w-[28px] h-[28px] flex items-center justify-center bg-[rgba(0,0,0,0.4)] cursor-pointer hover:bg-[rgba(0,0,0,0.8)]"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
                <div
                  onClick={() => handleUpdate(event)}
                  className="w-[28px] h-[28px] flex items-center justify-center bg-[rgba(0,0,0,0.4)] cursor-pointer hover:bg-[rgba(0,0,0,0.8)]"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </div>
              </div>
            )}
          </div>
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
