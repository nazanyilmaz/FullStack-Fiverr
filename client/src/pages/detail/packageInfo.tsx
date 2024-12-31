import { IGigDetail } from "../../types";
import { IoMdCheckmark, IoIosArrowDown } from "react-icons/io";
import { FaRegClock, FaArrowRight } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";

type Props = {
  data: IGigDetail;
};

const PackageInfo = ({ data }: Props) => {
  return (
    <div className="h-fit flex flex-col gap-8 border shadow rounded-md p-5 mt-20 md:sticky top-28">
      <div className="flex justify-between">
        <h2 className="font-semibold text-2xl">{data.package_title}</h2>
        <p className="text-lg font-bold">$ {data.package_price.toLocaleString()}</p>
      </div>
      <p className="font-semibold text-lg text-gray-600">{data.package_description}</p>
      <div className="flex gap-10 whitespace-nowrap">
        <p className="flex items-center gap-2 font-semibold">
          {" "}
          <FaRegClock size={25} /> {data.package_duration}-day delivery
        </p>
        <p className="flex items-center gap-2 font-semibold">
          {" "}
          <GiRecycle size={25} />
          {data.package_revisions} Revisions
        </p>
      </div>
      <ul>
        {data.package_features.map((i) => (
          <li className="flex gap-2 items-center">
            <IoMdCheckmark size={20} className="text-black font-bold" />
            <span className="text-lg text-gary-600">{i}</span>
          </li>
        ))}
      </ul>
      <button className="flex bg-black text-white p-3 rounded-md hover:bg-zinc-700 hover:rounded-full items-center">
        <span className="flex-1 font-semibold">Continue</span> <FaArrowRight size={20} />
      </button>
      <button className="flex justify-center gap-2 border p-3 rounded-md  hover:bg-zinc-300 hover:rounded-full items-center">
        <span className=" font-semibold">Contact Us</span> <IoIosArrowDown size={20} />
      </button>
    </div>
  );
};

export default PackageInfo;
