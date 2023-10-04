import {
  faHouse,
  faUser,
  faBed,
  faCreditCard,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { DASHBOARD_LOGIN } from "../constants/Path";

const Items = (props: any) => {
  const { currentRoute, url, icon, minified, title } = props;
  return (
    <Link
      href={url}
      className={`flex py-[8px]  mb-[10px] rounded-[8px] duration-200 ${
        currentRoute === url ? "text-[#152951] drop-shadow-xl bg-[#DAE1E7]" : ""
      } ${
        minified ? "gap-[0px] px-[8px] justify-center" : "gap-[15px] px-[16px]"
      }`}
    >
      <div>
        <FontAwesomeIcon icon={icon} style={{ width: "20px" }} />
      </div>
      <div className={` ${minified ? "hidden" : ""}`}>
        <h1 className={`w-[200px] text-base font-bold `}>{title}</h1>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const [minified, setMinified] = useState<boolean>(false);
  const [currentRoute, setCurrentRoute] = useState("/");
  const active = true;

  const route = useRouter();
  useEffect(() => {
    console.log(route);
    setCurrentRoute(route.asPath);
  }, [route]);
  const handleLogout = () => {
    const cookies = Cookies.get();
    Cookies.remove("token");

    for (const cookieName in cookies) {
      Cookies.remove(cookieName, { path: "/" });
    }
    route.replace(DASHBOARD_LOGIN);
  };

  const Menus = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: faHouse,
    },
    {
      title: "Customer List",
      url: "/dashboard/customer",
      icon: faUser,
    },
    {
      title: "Rooms",
      url: "/dashboard/rooms",
      icon: faBed,
    },
    {
      title: "Payment and Bill",
      url: "/dashboard/payment",
      icon: faCreditCard,
    },
    {
      title: "User Management",
      url: "/dashboard/user-management",
      icon: faUser,
    },
  ];

  return (
    <div
      className={`h-[100vh] bg-[#284A6E] text-[#DBE4EE] ease-in-out duration-300 relative shadow-[0px_4px_25px_rgba(255,255,255,0.25);] ${
        minified ? "w-20" : "w-72"
      }`}
    >
      <div
        className="px-[20px] py-[14px] flex items-center gap-[10px] cursor-pointer hover:text-[#DBE4EE] border-b-[1px] border-white"
        onClick={() => setMinified(!minified)}
      >
        <div className="px-[10px] py-[5px] bg-[#01909E] rounded-[8px] ">
          <h1 className="text-2xl text-white">m</h1>
        </div>

        <div className={`w-[200px]  ${minified ? "hidden" : ""}`}>
          <h1 className="w-[200px] text-lg font-bold">Kost Management</h1>
        </div>
      </div>

      <div className="px-[16px] py-[20px] ">
        {Menus.map((menu: any, i: number) => {
          return (
            <Items
              title={menu.title}
              currentRoute={currentRoute}
              url={menu.url}
              minified={minified}
              icon={menu.icon}
              key={i}
            />
          );
        })}
      </div>
      <div className="px-[16px] py-[20px] absolute" style={{ bottom: "0px" }}>
        <div
          className={`flex py-[8px]  mb-[10px] rounded-[8px] duration-200 cursor-pointer  ${
            minified
              ? "gap-[0px] px-[8px] justify-center"
              : "gap-[15px] px-[16px]"
          }`}
          onClick={handleLogout}
        >
          <div>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              style={{ width: "20px" }}
            />
          </div>
          <div className={` ${minified ? "hidden" : ""}`}>
            <h1 className={`w-[200px] text-base font-bold `}>Logout</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
