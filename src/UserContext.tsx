import React, { createContext, useState, useContext } from "react";

// Create a context for user data
const UserContext = createContext(null);

// Provider component to wrap your app
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook to access user data anywhere in the app
export function useUser() {
  return useContext(UserContext);
}
