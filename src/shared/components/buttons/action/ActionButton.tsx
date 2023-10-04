import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  type: "view" | "edit" | "delete";
  onClick?: () => void;
}

const ActionButton = ({ onClick, type }: Props) => {
  return (
    <button
      className="px-2 py-1 bg-portage-50 rounded-lg border-[1px] border-portage-600 leading-none"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={type === "view" ? faEye : type === "edit" ? faPenToSquare : faTrash}
        className="text-[15px] text-portage-600 "
      />
    </button>
  );
};

export default ActionButton;
