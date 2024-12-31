import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Info from "./info";
import UserInfo from "./userInfo";
import PackageInfo from "./packageInfo";
import { IGigDetail } from "../../types";
import BreadCrumb from "./bread-crumb";
const Detail = () => {
  const { id } = useParams();
  const { isLoading, error, data, refetch } = useQuery<IGigDetail>({
    queryKey: ["gig"],
    queryFn: () =>
      api
        .get(`/gigs/${id}`)
        .then((res) => res.data.gig)
        .catch((err) => console.log("detaill", err)),
  });
  return (
    <div>
      {isLoading ? (
        <Loader designs="my-20 size-8" />
      ) : error ? (
        <Error info={error.message} refetch={refetch} />
      ) : (
        data && (
          <div className="flex flex-col lg:flex-row gap-10 lg:justify-around">
            <div className="ml-5 ">
              <BreadCrumb category={data.category} />
              <Info gig={data} />
              <UserInfo user={data.user} />
            </div>
            <PackageInfo data={data} />
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
