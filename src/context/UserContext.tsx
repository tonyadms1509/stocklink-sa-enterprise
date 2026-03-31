import { createContext, useContext } from "react";

const UserContext = createContext({ role: "Admin" });


export const useUser = () => useContext(UserContext);

export default UserContext;
