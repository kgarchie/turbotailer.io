"use client";

import React, { createContext, useEffect, useState } from "react";

export interface IContext {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<IContext | null>({
  token: null,
  setToken: () => undefined,
});

export const UserProvider = (props: any) => {
  const [token, setToken] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem("turbotailertoken") || ""
      : ""
  );

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + token,
        },
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/users/me",
        requestOptions
      );

      if (!response.ok) {
        setToken("");
      }

      localStorage.setItem("turbotailertoken", token);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {props.children}
    </UserContext.Provider>
  );
};
