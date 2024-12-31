import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Link to="/login" className="transition hover:text-green-500">
        Login
      </Link>
      <Link
        to="/register"
        className=" transition border rounded border-green-500 hover:text-green-500 hover:rounded-full p-2"
      >
        Register
      </Link>
    </>
  );
};

export default Links;
