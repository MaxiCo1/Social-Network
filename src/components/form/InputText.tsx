import { useFormContext } from "react-hook-form";

type InputTextProps = {
  styles?: string;
  placeholder?: string;
  label: string;
  fieldName: string;
  type: "text" | "password"
};

const InputText = ({
  styles,
  placeholder,
  label,
  fieldName,
  type
}: InputTextProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={`flex flex-col ${styles ?? ""}`}>
      <label className="mb-2 mt-5 text-white">{label}</label>
      <input
        {...register(fieldName)}
        type={type}
        placeholder={placeholder}
        className="p-4 w-full rounded-2xl bg-transparent border border-gray-600 text-white"
      />
      {errors && errors[fieldName] && (
        <div className="text-red-600 mt-1 text-xs">Este campo es obligatorio</div>
      )}
    </div>
  );
};

export default InputText;
