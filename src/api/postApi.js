import apiClient from "./instance";

export const getAllPost = () => {
  const response = apiClient.get("posts");

  return response;
};
