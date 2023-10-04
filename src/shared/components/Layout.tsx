import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.component";
import Header from "./Header.component";
import Cookies from "js-cookie";
import { CheckIsAuthRoute, CheckIsPrivateRoute } from "../helpers/route";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loading.component";

type Props = {
  children: React.ReactElement;
  isShow: boolean;
};

const LayoutComponents = ({ children, isShow }: Props) => {
  const [showSidebar, setShowSidebar] = useState<string>("hidden");

  useEffect(() => {
    if (isShow) {
      return setShowSidebar("");
    } else {
      return setShowSidebar("hidden");
    }
  }, [isShow]);

  const routes = useRouter();
  let route = routes.asPath
    .slice(1)
    .split("/")
    .filter((d) => d !== "dashboard");

  return (
    <div className="layout flex">
      {/* <Loading /> */}
      <div className={showSidebar}>
        <Sidebar />
      </div>
      <div className="w-full ">
        <div className={showSidebar}>
          <Header text={route[0] || "Dashboard"} />
        </div>

        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default LayoutComponents;
