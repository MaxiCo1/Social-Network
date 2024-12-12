"use client";
import useMessages from "@/contexts/message.context";
import { UserType } from "@/types/users.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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

  useEffect(() => {
    setFocus("message");
  }, [setFocus]);

  const onSubmit = async (data: FormData) => {
    postMessage(data.message, parentId);

    resetField("message");
    setFocus("message");
  };
  const goToLogin = () => {
    router.push("/login");
    router.refresh();
  };

  if (!currentUser) {
    return (
      <div className="flex items-center flex-col mb-4">
        <h3>Inicia tu sesión para escribir un mensaje</h3>
        <button
          className="button-primary w-fit font-semibold mt-4"
          type="submit"
          onClick={() => goToLogin()}
        >
          Iniciar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 mb-4">
      <div className="w-full h-full mt-1 text-center mb-4 relative col-span-2 flex items-center justify-center">
        <Image
          className="rounded-full"
          src={currentUser.photoUrl}
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
            placeholder="¿Que estas pensando?"
            className="resize-none p-4 w-full mb-4 rounded bg-gray-50 border border-gray-200"
            {...register("message", {
              required: true,
            })}
          />
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
