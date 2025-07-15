"use server";

import { GET } from "@/utils";
import { POST_LIST_ENPOINT } from "@/constants";

const getAllPostsAction = async () => {
  const response = await GET(POST_LIST_ENPOINT);
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

export { getAllPostsAction };
