import axios from "axios";

export const APIJSON = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
