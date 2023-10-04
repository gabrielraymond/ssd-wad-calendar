import React, { useState } from "react";
import { convertTo12HourFormat } from "../../../../shared/helpers/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = ({ event, onDelete, handleUpdate }: any) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      className={`m-1 p-1 w-[250px] text-white ${event.color} flex justify-between`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      //   key={index}
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
  );
};

export default Card;
