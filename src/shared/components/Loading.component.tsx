import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CheckIsAuthRoute, CheckIsPrivateRoute } from "../helpers/route";

const Loading = () => {
  const token = Cookies.get("token");
  const [isLoading, setIsLoading] = useState("flex");
  const router = useRouter();
  useEffect(() => {
    setIsLoading("flex");
    if (
      (!token && CheckIsPrivateRoute(router.route)) ||
      (token && CheckIsAuthRoute(router.route))
    ) {
      setIsLoading("flex");
    } else {
      setTimeout(() => setIsLoading("hidden"), 500);
      // return setIsLoading(false);
    }
    console.log("route", router.route);
  }, [token, router]);
  return (
    <div
      className={isLoading}
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eaeaea",
        zIndex: "100",
      }}
    >
      <Image
        src={"/images/loading/Spin-1s-200px (1).svg"}
        width={100}
        height={100}
        alt="loading"
      />
    </div>
  );
};

export default Loading;
