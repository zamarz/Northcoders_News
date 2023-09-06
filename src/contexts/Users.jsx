import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  return (
    <UserContext.Provider value={{ username: "tickle122" }}>
      {props.children}
    </UserContext.Provider>
  );
};
