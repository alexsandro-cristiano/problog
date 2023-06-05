import { APIJSON } from "../api";

export const getInformation = async (url: string) => {
  return await APIJSON.get(`${url}`).then((res) => {
    return res.data;
  });
};
