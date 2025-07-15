"use server";

import { POST } from "@/utils";
import { GENERATE_AI_POST_ENPOINT } from "@/constants";
import { AiFormSchema } from "@/types";

const generatePostAction = async (payload: Partial<AiFormSchema>) => {
  const response = await POST(GENERATE_AI_POST_ENPOINT, payload);
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

export { generatePostAction };
