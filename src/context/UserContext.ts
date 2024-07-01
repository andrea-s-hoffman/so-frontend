import { User } from "firebase/auth";
import { createContext } from "react";

interface UserContextModel {
  user: null | User;
}

const defaultValues: UserContextModel = {
  user: null,
};

const UserContext = createContext(defaultValues);

export default UserContext;
