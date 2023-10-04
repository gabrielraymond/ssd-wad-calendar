import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  status: "purple" | "grey" | "red" | "orange" | "blue" | "green";
}

const Chip = ({ children, status }: Props) => {
  const statusStyle = `${
    status === "green"
      ? "bg-[#E9F5EE] text-[#249F5D]"
      : status === "orange"
      ? "bg-[#FFF6E5] text-[#ED9418]"
      : status === "grey"
      ? "bg-[#EDEFF1] text-[#6D788D]"
      : status === "red"
      ? "bg-[#FFE9E9] text-[#DC3545]"
      : status === "blue"
      ? "bg-[#E5F8FE] text-[#26C6F9]"
      : status === "purple" && "bg-[#EDE6F1] text-[#67348D]"
  }`;

  return (
    <span className={`px-4 py-2 ${statusStyle} rounded font-medium `}>
      {children}
    </span>
  );
};

export default Chip;
