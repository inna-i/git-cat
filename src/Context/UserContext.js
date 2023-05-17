import React, { createContext } from "react";
import { useFetch } from "../hook/fetchHook";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [user] = useFetch('user');

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
