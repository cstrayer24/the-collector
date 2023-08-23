"use client";
import useLoggedInstat from "@/hooks/loogedInstat";
import SigninBtn from "./SigninBtn";
import LoggedOutComponent from "./LoggedOut";
import LoggedInComponent from "./LoggedIn";

function ActionHub() {
  const stat = useLoggedInstat();
  console.log(stat);
  // console.log(stat);
  return (
    <>
      {!stat && <LoggedOutComponent />}

      {stat && <LoggedInComponent />}
    </>
  );
}
export default ActionHub;
