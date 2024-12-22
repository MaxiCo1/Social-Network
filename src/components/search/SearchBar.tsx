"use client";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  query: string;
};
type SearchBarProps = {
  initialQuery?: string;
};

const SearchBar = ({ initialQuery }: SearchBarProps) => {
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      query: initialQuery,
    },
  });
  const onSubmit = (data: FormData) => {
    console.log(JSON.stringify(data));
    if (data.query){
      router.push(`/?query=${data.query ?? ""}&type=hash`);
    } else{
      router.push(`/`);
    }
    
  };

  useEffect(() => {
    setValue("query", initialQuery ?? "");
  }, [initialQuery, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full mb-4">
      <input
        {...register("query")}
        type="text"
        placeholder={"Buscar por #"}
        className="flex-grow p-4 w-full rounded-full bg-transparent border border-gray-600 text-white"
      />
      {/*<button className="button-primary">Buscar</button>*/}
    </form>
  );
};

export default SearchBar;
