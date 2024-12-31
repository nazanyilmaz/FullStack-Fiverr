import { createContext, useState } from "react";
import { IFormUser, ILoginUser, IUser } from "../types";

type ContextType = {
  user: IUser | null;
  isLoading: boolean;
  register: (user: IFormUser) => void;
  login: (user: ILoginUser) => void;
  logout: () => void;
};

const AuthContext = createContext<ContextType>({
  user: null,
  isLoading: true,
  register: () => {},
  login: () => {},
  logout: () => {},
});

export default AuthContext;
