type Props = {
  label: string;
  name: string;
  disable?: boolean;
  required?: boolean;
  type?: "text" | "number" | "file" | "textarea" | "email" | "password";
  placeholder?: string;
  min?: number;
  max?: number;
  multiple?: boolean;
};

const CustomInput = ({
  label,
  name,
  placeholder,
  disable = false,
  type = "text",
  required = false,
  max,
  min,
  multiple,
}: Props) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="mb-2 text-md font-semibold text-gray-900">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="bg-gray-50 border border-gray-300  rounded-lg text-sm  block w-full p-2.5 text-black min-h-[100px] max-h-[250] disabled:bg-gray-200"
          required
          name={name}
          disabled={disable}
          id={name}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={name}
          disabled={disable}
          name={name}
          type={type}
          placeholder={placeholder}
          min={min}
          max={max}
          required={required}
          multiple={multiple}
          className="bg-gray-50 border border-gray-300  rounded-lg text-md  block w-full p-2.5 text-black disabled:bg-gray-200"
        />
      )}
    </div>
  );
};

export default CustomInput;
