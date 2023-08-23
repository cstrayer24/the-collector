"use client";
import React, { useContext, createContext, useState, useEffect } from "react";

export const ctx = createContext(null as any);
function UserContext({ children }: { children: React.ReactNode }) {
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    (async () => {
      const req = await fetch("/api/get-user");

      setUserObj(await req.json());
    })();
  }, []);

  return (
    <ctx.Provider value={{ userObj, setUserObj }}>{children}</ctx.Provider>
  );
}
export default UserContext;
