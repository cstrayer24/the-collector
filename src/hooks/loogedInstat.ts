"use client";
import { cookies } from "next/headers";

function useLoggedInstat() {
  if (typeof window !== "undefined") {
    const cookieArr = document.cookie.split(";").map((v) => v.trim());

    // console.log(cookieArr.find((v) => v.startsWith("isLoggedIn")));
    const loggedInCookie = cookieArr.find((v) => v.startsWith("isLoggedIn"));

    return loggedInCookie?.split("=")[1] === "1";
  }
}
export default useLoggedInstat;
