"use server";

import { DELETE } from "@/utils";
import { POST_DELETE_ENPOINT } from "@/constants";

const deletePostAction = async (id: number) => {
  const response = await DELETE(POST_DELETE_ENPOINT(id));
  if (response.status === "error") {
    return {
      status: "error",
      error: response.error,
    };
  }

  return {
    status: "success",
    data: response.data,
  };
};

export { deletePostAction };
