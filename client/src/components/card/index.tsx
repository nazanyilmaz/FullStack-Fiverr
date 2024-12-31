import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IGig } from "../../types";
import Rating from "../rating";
import Buttons from "./buttons";

type Props = {
  item: IGig;
  key?: string;
  expand?: boolean;
};

const Card = ({ item, expand }: Props) => {
  return (
    <div className="border shadow">
      {expand && <Buttons item={item} />}
      <Link
        to={`/detail/${item._id}`}
        className="p-2 mx-4 rounded-md cursor-pointer flex flex-col gap-2 group"
      >
        <img
          src={item?.coverImage}
          className="h-full w-full object-cover rounded-md max-h-[200px] "
        />

        <div className="flex gap-2 items-center">
          <img src={item?.user?.photo} className="size-10 rounded-full mx-2" />
          <p>
            <span className="text-gray-500">ad by </span>
            <span className="font-semibold">{item?.user?.username} </span>
          </p>
        </div>

        <h3 className="line-clamp-2 group-hover:underline m-2 font-bold">
          {item?.title}
        </h3>

        <Rating rating={4.5} reviews={"1k+"} designs="font-semibold text-lg mx-2" />

        <p className="font-semibold mx-2">
          <span>
            {" "}
            <span className="font-bold text-lg">From </span>${" "}
            {item.package_price.toLocaleString("en")}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Card;
