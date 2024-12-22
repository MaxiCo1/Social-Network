"use client";
import useMessages from "@/contexts/message.context";
import { UserType } from "@/types/users.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type MessagePostFormType = {
  parentId?: string;
  currentUser?: UserType;
};

type FormData = {
  message: string;
};

const MessagePostForm = ({ parentId, currentUser }: MessagePostFormType) => {
  const router = useRouter();
  const { postMessage } = useMessages();

  const { register, handleSubmit, resetField, setFocus } = useForm<FormData>();
  const [charCount, setCharCount] = useState(0);
  const maxChars = 150;

  useEffect(() => {
    setFocus("message");
  }, [setFocus]);

  const onSubmit = async (data: FormData) => {
    postMessage(data.message, parentId);

    resetField("message");
    setCharCount(0);
    setFocus("message");
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(event.target.value.length);
  };

  const goToLink = (href: string) => {
    router.push(href);
    router.refresh();
  };

  if (!currentUser) {
    return (
      <div className="flex items-center flex-col mb-4 border-b border-gray-600 py-8 text-white">
        <h3>Inicia sesión o registrate para escribir un mensaje</h3>
        <div className="flex w-full justify-evenly mt-4">
          <button
            className="button-primary w-1/4"
            type="submit"
            onClick={() => goToLink("/login")}
          >
            Iniciar sesión
          </button>
          <button
            className="button-primary font-semibold w-1/4"
            type="submit"
            onClick={() => goToLink("/register")}
          >
            Registrarse
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 border-b border-gray-600 mt-2 px-20 pb-6">
      <div className="text-center mb-4 relative col-span-2 flex items-center justify-center">
        <Image
          className="rounded-full"
          src={currentUser.photoUrl}
          style={{ height: 60 }}
          alt={"img"}
          width={60}
          height={60}
          priority //prioriza la carga de la imagen
        />
      </div>

      <div className="flex flex-col ml-4 mt-2 col-span-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            rows={4}
            placeholder="¿Qué estás pensando?"
            maxLength={maxChars}
            className="resize-none p-4 w-full mb-2 rounded bg-transparent border border-gray-600 text-white"
            {...register("message", {
              required: true,
            })}
            onChange={handleTextareaChange}
          />
          <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
            <span>{charCount}/{maxChars} caracteres</span>
          </div>
          <div className="flex justify-end">
            <button
              className="button-primary w-fit font-semibold"
              type="submit"
            >
              Postear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessagePostForm;
