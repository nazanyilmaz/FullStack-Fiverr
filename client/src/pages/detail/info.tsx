// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FaStar } from "react-icons/fa";
import { IGigDetail } from "../../types";
import Rating from "../../components/rating";

type Props = {
  gig: IGigDetail;
};

const Info = ({ gig }: Props) => {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <h1 className=" font-bold text-xl md:text-2xl">{gig.title}</h1>
      <div className="flex gap-3 items-center">
        <img src={gig.user.photo} className="size-12 rounded-full" />
        <div>
          <h4 className=" font-bold">{gig.user.username}</h4>
          <Rating rating={4.5} reviews={"1k"} designs="font-semibold text-lg " />
        </div>
      </div>
      <Splide>
        {gig.images.map((url, key) => (
          <SplideSlide key={key}>
            <img src={url} className="h-[30vh] w-full object-cover" />
          </SplideSlide>
        ))}
      </Splide>
      <div>
        <h1 className=" font-bold text-lg mt-5">About this gig</h1>
        <p className="text-gray-600 mb-3">{gig.description}</p>
      </div>
    </div>
  );
};

export default Info;
