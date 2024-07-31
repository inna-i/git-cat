import React, { createContext } from "react";
import { useFetch } from "../hook/fetchHook";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [user] = useFetch('user');

  return (
    <UserContext.Provider value={{ user }}>
      {user ? props.children : null}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
