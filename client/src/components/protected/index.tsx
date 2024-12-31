import { useContext } from "react";
import AuthContext from "../../context/authContext";
import Loader from "../loader";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) return <Loader />;
  if (!user?.isSeller) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default Protected;
