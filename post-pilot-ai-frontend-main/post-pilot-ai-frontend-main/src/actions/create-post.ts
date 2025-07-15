"use server";

import { POST } from "@/utils";
import { POST_CREATE_ENPOINT } from "@/constants";
import { AiFormSchema } from "@/types";

const createPostAction = async (payload: Partial<AiFormSchema>) => {
  const response = await POST(POST_CREATE_ENPOINT, payload);
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

export { createPostAction };
