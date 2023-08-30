"use client";
import { FormEvent, useState } from "react";

function SignUpModal({
  onClick,
  onFinished,
}: {
  onClick: Function;
  onFinished: Function;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const req = await fetch("/api/make-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (req.ok) {
      onFinished();
    }
  }
  return (
    <div className=" h-screen w-screen grid place-items-center bg-gradient-to-tr from-tc-darkpurple to-tc-lightpurple absolute top-0 left-0 ">
      <div className=" w-[50rem] h-[30rem] mt-7 bg-tc-darkpurple rounded-md border-tcWhite grid border border-dotted border-spacing-4 text-tcWhite">
        <div className="w-full h-12 text-tcWhite text text-2xl">
          <button
            className="block ml-7 mt-7 rounded-full"
            onClick={(e) => onClick()}
          >
            X
          </button>

          <h1 className=" text-center">start collecting</h1>
        </div>
        <form
          action=""
          className="text-tcWhite flex flex-col  gap-8 w-full justify-items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center">
            <label htmlFor="name-input">name:</label>
            <input
              type="text"
              name="name-input"
              className=" ml-3 text-tc-darkpurple bg-tc-lightpurple outline-tc-pink rounded-md px-5"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center">
            <label htmlFor="email-input">email:</label>
            <input
              type="email"
              className=" ml-3 text-tc-darkpurple bg-tc-lightpurple outline-tc-pink rounded-md px-5"
              name="email-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center ">
            <label htmlFor="password-input">password:</label>
            <input
              type="password"
              className=" ml-2 text-tc-darkpurple bg-tc-lightpurple outline-tc-pink rounded-md px-5 "
              name="password-input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button> submit</button>
        </form>
      </div>
    </div>
  );
}
export default SignUpModal;
