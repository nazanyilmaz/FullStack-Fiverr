import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IGig } from "../../types";
import api from "../../api";

type Props = {
  item: IGig;
};

const Buttons = ({ item }: Props) => {
  const client = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => api.delete(`/gigs/${item._id}`),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["my-gigs"] });
    },
  });
  return (
    <div className="flex justify-end mx-5">
      <button
        onClick={() => {
          if (confirm("Are you sure?")) mutate();
        }}
        disabled={isPending}
        className=" border rounded-md bg-red-500 px-3 py-2 flex justify-center items-center text-white font-bold hover:bg-red-400  hover:rounded-full"
      >
        Delete
      </button>
    </div>
  );
};

export default Buttons;
