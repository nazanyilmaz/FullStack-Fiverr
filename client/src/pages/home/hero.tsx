import React, { FormEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = (e.currentTarget[0] as HTMLInputElement).value;
    navigate(`/search?query=${text}`);
  };
  return (
    <div>
      <section className="bg-GREEN max-md:m-[-20px] h-[40vh] px-6 py-5 md:px-12 md:py-10 md:rounded-md flex flex-col justify-center items-center">
        <div className="max-w-[600px] md:text-5xl font-light md:text-center">
          <h1 className="text-4xl md:text-5xl font-light md:text-center text-white">
            Scale your proffessional workforce with{" "}
            <span className=" font-serif">freelancers</span>{" "}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-md w-full flex gap-5 mt-10 "
          >
            <input
              type="text"
              className="flex-1 p-2 rounded-md text-black outline-none"
              placeholder="Search gig"
            />
            <button className="bg-GREEN m-1 px-2 py-3 rounded-md  hover:bg-opacity-70 transition text-white">
              <IoSearch />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;
