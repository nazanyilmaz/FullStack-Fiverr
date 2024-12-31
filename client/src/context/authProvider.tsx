import { useEffect, useState } from "react";
import { IFormUser, ILoginUser, IUser } from "../types";
import api from "../api";
import AuthContext from "./authContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);
  console.log(isLoading);
  const navigate = useNavigate();

  //her sayfa yenilendiginde elimizdeki tokeni kullanarak api'den verileri iste
  useEffect(() => {
    //token yoksa calismasin
    const token = localStorage.getItem("token") || document.cookie;
    if (!token) return setIsLoading(false);
    setIsLoading(true);
    api
      .get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setUser(res.data.user))
      .catch((err) => {
        localStorage.removeItem("token");
        toast.info("Token in valid. Please Login");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const register = (user: IFormUser) => {
    api
      .post("/auth/register", user, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.info("Registered successfuly");
        navigate("/login");
        console.log("RegisterData", res.data);
      })
      .catch((err) => toast.error(err.response?.data?.message));
  };

  const login = (user: ILoginUser) => {
    setIsLoading(true);
    api
      .post("/auth/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        toast.success("Login successfuly");
        navigate("/");
        console.log("LoginData", res.data);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
      })
      .finally(() => setIsLoading(false));
  };
  const logout = () => {
    api
      .post("/auth/logout")
      .then(() => {
        setUser(null);
        localStorage.removeItem("token");
        toast.info("Logout successfuly");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
