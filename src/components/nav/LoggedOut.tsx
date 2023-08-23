"use client";
import React, { useState } from "react";
import SignUpModal from "../auth/SignUpModal";
import SignUpBtn from "./SignUpBtn";
import SigninBtn from "./SigninBtn";
import SignInModal from "../auth/SignInModal";
import { useRouter } from "next/navigation";
function LoggedOutComponent() {
  const [signUpState, setSignUpState] = useState(false);
  const [signInState, SetSignInState] = useState(false);

  return (
    <>
      {signUpState && (
        <SignUpModal
          onClick={() => {
            setSignUpState(false);
          }}
          onFinished={() => setSignUpState(false)}
        />
      )}
      {signInState && (
        <SignInModal
          onClick={() => {
            SetSignInState(false);
          }}
          onFinished={() => {
            SetSignInState(false);

            useRouter().push("/");
          }}
        />
      )}
      <div className=" flex gap-5 mt-5 mr-5 ">
        <SigninBtn
          onclick={() => {
            SetSignInState(true);
          }}
        />
        <SignUpBtn
          onclick={() => {
            setSignUpState(true);
            console.log("hi");
          }}
        />
      </div>
    </>
  );
}
export default LoggedOutComponent;
