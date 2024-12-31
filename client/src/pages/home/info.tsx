import { BsFillPatchCheckFill } from "react-icons/bs";
import { items } from "../../utils/consttants";

const Info = () => {
  return (
    <section className="my-10 bg-green-100 bg-opacity-70 roundedn-md p-4 sm:p-6">
      <h1 className="text-3xl">
        <span className="font-extrabold">fiverr</span>
        <span>.pro</span>
      </h1>

      <p className="text-4xl font-normal my-6 sm:my-8">
        The <span className="text-green-400">premium</span> freelance solution for
        businesses
      </p>
      <div className="grid lg:grid-cols-2 gap-5">
        {items.map((item) => (
          <div>
            <h5 className="font-semibold text-xl flex items-center gap-3">
              <BsFillPatchCheckFill />
              {item.title}
            </h5>
            <p className="text-lg">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-6 sm:my-8">
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-600 hover:rounded-full">
          Try Now
        </button>
      </div>
    </section>
  );
};

export default Info;
