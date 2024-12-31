import { Link } from "react-router-dom";
import { categories } from "../../utils/consttants";

const Category = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {categories.map((i) => (
          <Link
            to={`/search?category=${i.name}`}
            key={i.name}
            className="border shadow p-4 rounded-md cursor-pointer hover:shadow-xl hover:bg-gray-100"
          >
            <div className=" flex flex-col gap-3 items-center text-center">
              <span className="text-3xl">{i.icon}</span>
              <span className="font-semibold text-sm">{i.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
