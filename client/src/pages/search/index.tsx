import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import api from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import { IGig } from "../../types";

//useQuery sayfa yuklendigi anda apiye istek atmak istiyorsak bunu kullaniyoruz
const Search = () => {
  //url'den parametreleri alalim
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const category = searchParams.get("category");
  console.log("\n \n client query:", category);
  //api/ye gonderilecek paramaetleri olustur
  const params = {
    category,
    search: query,
  };
  // categoryden arattigimda gigs undefined geliyor
  console.log("API params:", params);
  console.log("categry", category);
  console.log("query", query);
  //api'den verileri alalim
  const { isLoading, error, data, refetch } = useQuery<IGig[]>({
    queryKey: ["gigs", params],
    queryFn: () =>
      api
        .get("/gigs", { params })
        .then((res) => res.data.gigs)
        .catch((error) => {
          console.error("API Error:", error);
          return Promise.reject(error);
        }),
  });

  return (
    <div>
      <h1>
        {query ? (
          <p className="text-2xl font-normal">
            Results for
            <span className="text-3xl font-bold text-decoration-underline"> {query}</span>
          </p>
        ) : (
          <p className="text-2xl font-normal">
            Results for <span className="text-3xl font-bold"> {category}</span>
          </p>
        )}
      </h1>

      {isLoading ? (
        <Loader designs="my-20 size-8" />
      ) : error ? (
        <Error error={error} refetch={refetch} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 my-5">
          {data?.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
