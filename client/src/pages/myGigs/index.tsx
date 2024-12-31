import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import api from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import { IGig } from "../../types";

const Mygigs = () => {
  interface ApiResponse {
    data: {
      gigs: IGig[];
    };
  }
  const { user } = useContext(AuthContext);
  //console.log("userrrr", user);
  const { isLoading, error, refetch, data } = useQuery<ApiResponse>({
    queryKey: ["my-gigs", user],
    queryFn: () => api.get("gigs", { params: { userID: user?._id } }),
  });
  console.log("dataaaa", data);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-gray-500 font-bold mb-5 px-12 ">
        My Gigs
      </h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error error={error} refetch={refetch} />
        ) : (
          data && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 my-5">
              {data?.data?.gigs?.map((gig: IGig) => (
                <Card item={gig} expand />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Mygigs;
