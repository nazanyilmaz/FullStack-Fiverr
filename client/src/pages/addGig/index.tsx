import { categories, inputs } from "../../utils/consttants";
import CustomInput from "../../components/input";
import Select from "../../components/input/select";
import { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

//useMutation kullanici bir yere tikladiginda apiye istek atilacaksa kullaniyoruz
const AddGig = () => {
  const navigate = useNavigate();
  //get istegi disindaki tum isteklerde useMutaion Hook kullanilir
  //tanStack/react-query kullanarak api istegini atiyoruz
  const { isPending, mutate } = useMutation({
    mutationFn: (data: FormData) =>
      api.post("/gigs", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (res) => {
      toast.success("New Gig Added successfuly");
      //console.log("neww giggg", data);
      navigate(`/detail/${res.data.gig._id}`);
    },
    onError: (err) => {
      toast.error("New Gig is not add. This is faild");
    },
  });
  //form gonderme
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //inputdaki verileri al
    const data = new FormData(e.currentTarget);
    //servera post istegi atalim
    mutate(data);
  };
  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-gray-500 font-bold mb-5 px-12 ">
        Create a New Gig
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 px-12">
          {inputs.map((props, key) => (
            <CustomInput key={key} {...props} />
          ))}
          <Select label="Categories" options={categories} name="category" />
        </div>
        <div className="flex md:justify-center my-5">
          <button
            disabled={isPending}
            className="bg-green-500  py-2 rounded-md text-white hover:bg-green-600 max-md:w-full w-1/2 flex justify-center disabled:opacity-80"
          >
            {isPending ? <Loader /> : " Create New Gig"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGig;
