import { FormEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = (e.currentTarget[0] as HTMLInputElement).value;
    //console.log(text);
    navigate(`/search?query=${text}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-1 rounded border overflow-hidden max-w-[500px]"
    >
      <input
        type="text"
        className="w-full h-full px-3"
        placeholder="search"
        defaultValue={params.get("query") || undefined}
      />
      <button className="bg-GREEN px-3 text-white text-xl max-sm:hidden">
        <IoSearch />
      </button>
    </form>
  );
};

export default Form;
