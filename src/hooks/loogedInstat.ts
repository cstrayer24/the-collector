"use client";
import { cookies } from "next/headers";

function useLoggedInstat() {
  if (typeof window !== "undefined") {
    if (
      document.cookie
        .split(";")
        .find((v) => {
          v.startsWith("isLoggedIn");
        })
        ?.split("=")[0] === "1"
    ) {
      return true;
    } else {
      return false;
    }
  }
}
export default useLoggedInstat;
