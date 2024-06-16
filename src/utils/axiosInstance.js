import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://www.course-api.com",
});
