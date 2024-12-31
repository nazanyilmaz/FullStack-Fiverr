import { PiStarFourFill } from "react-icons/pi";
import { ISellerUser, IUser } from "../../types";
import Rating from "../../components/rating";
import moment from "moment";

type Props = {
  user: ISellerUser;
};

const UserInfo = ({ user }: Props) => {
  return (
    <div>
      <h1 className=" font-bold text-lg mt-10 mb-3">Get to know {user.username}</h1>

      <div className="flex flex-col items-center gap-2">
        <img src={user.photo} className="size-28 rounded-full object-cover" />
        <h4 className=" font-semibold">{user.username}</h4>
        <p className="text-gray-600 font-[300] text-center">{user.desc}</p>
        <div className="flex gap-5">
          <Rating rating={4.5} reviews={"1k"} designs="font-semibold text-lg " />
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold">Level 2 </span>
            <PiStarFourFill />
            <PiStarFourFill />
            <PiStarFourFill className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className=" flex gap-8 mt-5">
        <button className="py-2 px-5 border rounded-md hover:rounded-full">
          Contact me
        </button>
        <button className="py-2 px-5 border rounded-md hover:rounded-full">
          Book a consultation
        </button>
      </div>
      <div className="border my-10 p-5 grid md:grid-cols-2 gap-5">
        <Field label="From" value={user.country} />
        <Field label="Member since" value={moment(user.createdAt).fromNow()} />
        <Field label="Phone" value={user.phone} />
        <Field label="Email" value={user.email} />
      </div>
    </div>
  );
};
type FieldProps = {
  label: string;
  value: string | undefined;
};
const Field = ({ label, value }: FieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">{label}</span>
      <span className="text-zinc-700 font-semibold">{value}</span>
    </div>
  );
};

export default UserInfo;
