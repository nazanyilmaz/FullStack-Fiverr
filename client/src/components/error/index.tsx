type Props = {
  error?: Error;

  refetch?: () => void;
};

const Error = ({ error, refetch }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center my-20 bg-red-500/80 py-10 px-5 rounded-lg text-white">
      <p>{error?.response?.data.message || "Sorry there is an Error "}</p>

      <p>Please Try Later</p>

      {refetch && (
        <button
          className="border py-1 px-3 rounded-md shadow-lg hover:bg-gray-200/20 transition hover:rounded-full"
          onClick={refetch}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;
