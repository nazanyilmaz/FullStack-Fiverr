import { Link } from "react-router-dom";
import { IUser } from "../../types";

type Props = {
  data: IUser;
  logout: () => void;
};

const User = ({ data, logout }: Props) => {
  return (
    <div className="flex items-center">
      <img src={data.photo} className=" size-[60px] rounded-full object-cover mr-3" />
      <span className="font-bold text-lg">{data.username}</span>
      <div className="w-[150px] text-[13px] flex-col absolute top-[60px] left-0 transition duration-500  rounded-md hidden group-hover:flex text-center bg-white z-50">
        {data.isSeller && (
          <>
            <Link
              to="/my-gigs"
              className="px-5 py-2 hover:bg-gray-50 text-nowrap text-md font-semibold"
            >
              My Gigs
            </Link>
            <Link
              to="/add-gig"
              className="px-5 py-2 hover:bg-gray-50 text-nowrap text-md font-semibold"
            >
              Add Gig
            </Link>
          </>
        )}
        <Link
          to="/"
          className="px-5 py-2 hover:bg-gray-50 text-nowrap text-md font-semibold"
        >
          Order
        </Link>
        <Link
          to="/"
          className="px-5 py-2 hover:bg-gray-50 text-nowrap text-md font-semibold"
        >
          Message
        </Link>
        <button
          onClick={logout}
          className="px-5 py-2 hover:bg-gray-50 text-nowrap text-md font-semibold text-green-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
