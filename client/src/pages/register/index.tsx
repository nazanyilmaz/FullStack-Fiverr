import { useContext, useState } from "react";
import CustomInput from "../../components/input";
import Toggle from "../../components/input/toggle";
import { Link } from "react-router-dom";
import { IFormUser } from "../../types";
import AuthContext from "../../context/authContext";

const Register = (user: IFormUser) => {
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const { register } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const newUser = Object.fromEntries(formData.entries());
    (newUser as unknown as IFormUser).isSeller = isSeller;
    register(newUser as unknown as IFormUser);
    console.log("RegisterPAge==>>newUser", newUser);
  };
  return (
    <div className="max-w-[900px] mx-auto">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 md:gap-20 md:pt-24">
        <div>
          <h1 className="text-2xl md:text-3xl text-gray-500 font-bold mb-5">
            Create a New Account
          </h1>
          <CustomInput
            label="Username"
            required={true}
            name="username"
            placeholder="Type your name"
          />
          <CustomInput
            label="Email"
            required={true}
            name="email"
            type="email"
            placeholder="Type your email"
          />
          <CustomInput label="Photos" required={true} name="photo" type="file" />
          <CustomInput
            label="Country"
            required={true}
            name="country"
            placeholder="Type your country"
          />
          <CustomInput
            label="Password"
            required={true}
            name="password"
            placeholder="Type your password"
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl text-gray-500 font-bold mb-5">
            Become a Seller
          </h1>
          <Toggle setIsSeller={setIsSeller} />
          <CustomInput
            label="Phone"
            type="number"
            name="phone"
            disable={!isSeller}
            required={isSeller}
          />
          <CustomInput
            label="Description"
            type="textarea"
            name="desc"
            disable={!isSeller}
            required={isSeller}
          />
        </div>
        <div className="w-full  items-center justify-center text-center">
          <button className="text-white font-semibold text-lg bg-GREEN rounded-md w-full hover:rounded-full border hover:bg-green-50 hover:text-green-500 hover:border-green-500 py-3">
            Register
          </button>
          <p className="mt-3 text-gray-500">
            Do you have an account?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
