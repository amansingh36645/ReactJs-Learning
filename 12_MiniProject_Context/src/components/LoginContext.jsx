import  {React, createContext, useState } from "react";

export const pfpContext = createContext();

const LoginContext = (props) => {
  const [user, setUser] = useState("");

  return (
    <pfpContext.Provider value={[user, setUser]}>
      {props.children}
    </pfpContext.Provider>
  );
};

export default LoginContext;
