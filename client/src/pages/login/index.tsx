import { FormEvent, useContext } from "react";
import CustomInput from "../../components/input";
import { Link } from "react-router-dom";
import { ILoginUser } from "../../types";
import AuthContext from "../../context/authContext";

const Login = (user: ILoginUser) => {
  const { login } = useContext(AuthContext);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const user = Object.fromEntries(formData.entries());
    login(user as unknown as ILoginUser);
    //console.log("LoginPage===>User", user);
  };
  return (
    <div className="pt-20 max-w-[700px] mx-auto sm:min-w-[400px] max-sm:w-full">
      <h1 className="text-2xl md:text-3xl text-gray-500 font-bold mb-10">
        Login Your Acount
      </h1>
      <form onSubmit={handleSubmit}>
        <CustomInput label="Username" name="username" required />
        <CustomInput label="Password" name="password" required />
        <div className="w-full  items-center justify-center text-center">
          <button className="text-white font-semibold text-lg bg-GREEN rounded-md w-full hover:rounded-full border hover:bg-green-50 hover:text-green-500 hover:border-green-500 py-3">
            Login
          </button>
          <p className="mt-3 text-gray-500">
            Don't have an account?
            <Link to="/register" className="text-green-500 hover:underline ml-1">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
