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
    router.push(`/?query=${data.query ?? ""}&type=hash`);
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
        className="flex-grow  mr-4 p-4 w-full rounded bg-gray-50 border border-gray-200"
      />
      <button className="button-primary">Buscar</button>
    </form>
  );
};

export default SearchBar;
