"use client";
import useLoggedInstat from "@/hooks/loogedInstat";
import SigninBtn from "./SigninBtn";
import LoggedOutComponent from "./LoggedOut";

function ActionHub() {
  const stat = useLoggedInstat();
  console.log(stat);
  // console.log(stat);
  return <>{!stat && <LoggedOutComponent />}</>;
}
export default ActionHub;
