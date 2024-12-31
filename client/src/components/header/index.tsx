import { Link } from "react-router-dom";
import User from "./user";
import Links from "./links";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import Form from "./form";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="p-5 shadow">
      <div className="max flex justify-between gap-2 md:gap-5">
        <Link to="/">
          <img src="/fiverr.png" alt="fiverr-clone" className="w-[100px]" />
        </Link>
        <Form />
        <div className="flex items-center gap-2  relative group ">
          {user ? <User data={user} logout={logout} /> : <Links />}
        </div>
      </div>
    </header>
  );
};

export default Header;
