import React, { useEffect } from "react";

interface Props {
  children: any;
  onClose: any;
  show: boolean;
  title?: string;
  footer?: any;
  width: any;
}

const Modal = ({ children, onClose, show, title, footer, width }: Props) => {
  if (!show) {
    return null;
  }


  return (
    <div
      className="modal fixed z-10 left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex lg:items-center md:items-start justify-center overflow-y-scroll "
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg  h-fit`}
        style={{ width: width ? width : "fit-content" }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="modalHeader p-[1rem] bg-portage-100 rounded-t-lg">
            <h4 className="modalTtitle text-lg font-bold ">{title}</h4>
          </div>
        )}

        <div className={`modalBody p-[1rem] border-y-[1px] border-solid border-[#eee] ${!title && 'rounded-t-lg'}`}>
          {children}
        </div>
        <div className="modalFooter p-[1rem] bg-portage-100 rounded-b-lg">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
