import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([
    {
      number: "01875925975",
      password: "1234",
      isAdmin: true,
    },
    {
      number: "01875925976",
      password: "12345",
      isAdmin: false,
    },
    {
      number: "01875925978",
      password: "123456",
      isAdmin: false,
    },
    {
      number: "01875925979",
      password: "123456",
      isAdmin: false,
    },
  ]);

  

  const setNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const setIsloggedin = (val) => {
    setIsLoggedIn(val)
    console.log(isLoggedIn);
  };

  const setUser = () => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.pop();
      return updatedUsers;
    });
  };
  
  return (
    <UserContext.Provider value={{ users, setNewUser, isLoggedIn,setIsloggedin,setUser }}>
      {children}
    </UserContext.Provider>
  );
};
