import { ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";

interface Props {
  children: ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  // useEffect for this to run once
  useEffect(() => {
    // return a fn in useEffect --> called Clean Up Function:
    return auth.onAuthStateChanged((newUser) => {
      // console.log("user changed");
      setUser(newUser);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user: user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
