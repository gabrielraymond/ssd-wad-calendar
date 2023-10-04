import Image from "next/image";
import React from "react";

const Header = (props: any) => {
  const { text } = props;
  return (
    <div className="w-full h-[70px] p-5  bg-[#152951] flex justify-between items-center">
      <div>
        <div className="bg-white rounded-[8px] h-[38px]  w-[340px] px-[28px] py-[10px] flex items-center gap-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px] h-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            name="search"
            placeholder="Search here..."
            className="text-[14px] focus:outline-none "
          />
        </div>
      </div>
      <div className="flex gap-[1rem]">
        <div className="bg-white w-[52px] h-[52px] rounded-[8px] flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>
        <div className="bg-white w-[200px] h-[52px] rounded-[8px] flex items-center px-[8px] py-[6px] justify-between">
          <div className="flex gap-[10px]">
            <Image
              alt="profil"
              src="/images/users/profil.jpg"
              width={40}
              height={40}
              className="rounded-[8px]"
            />
            <div>
              <h4 className="font-semibold">Gabriel</h4>
              <p className="text-xs">Admin</p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
