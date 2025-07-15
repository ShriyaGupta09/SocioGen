// POST, GET, PUT, DELETE
import { API_URL } from "@/constants";

const GET = async (url: string) => {
  const response = await fetch(`${API_URL}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    return {
      data: null,
      status: "error",
      error: response.statusText,
    };
  }
  const responseData = await response.json();

  return {
    data: responseData,
    status: "success",
  };
};

const POST = async (url: string, body: object) => {
  const response = await fetch(`${API_URL}${url}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  if (!response.ok) {
    return {
      data: null,
      status: "error",
      error: response.statusText,
    };
  }
  const responseData = await response.json();

  return {
    data: responseData,
    status: "success",
  };
};

const PUT = async (url: string, body: object) => {
  const response = await fetch(`${API_URL}${url}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  if (!response.ok) {
    return {
      data: null,
      status: "error",
      error: response.statusText,
    };
  }
  const responseData = await response.json();

  return {
    data: responseData,
    status: "success",
  };
};

const DELETE = async (url: string) => {
  const response = await fetch(`${API_URL}${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  if (!response.ok) {
    return {
      data: null,
      status: "error",
      error: response.statusText,
    };
  }
  const responseData = await response.json();

  return {
    data: responseData,
    status: "success",
  };
};

export { GET, POST, DELETE, PUT };
