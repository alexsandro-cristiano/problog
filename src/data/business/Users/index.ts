import { IUsersProps } from "../../@types/Users";
import { getInformation } from "../../services/Users";

export const getOneUser = async (paramId: number) => {
  const url = `/users/${paramId}`;
  const data = await getInformation(url);

  const usersObj: IUsersProps = {
    id: data.id,
    name: data.name,
    userName: data.username,
    email: data.email,
    phone: data.phone,
    website: data.website,
    address: data.address,
    company: data.company,
  };
  return usersObj;
};

export const getAllUsers = async () => {
  const url = `/users`;
  const data = await getInformation(url);
  const usersObj: IUsersProps[] = data.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      userName: item.username,
      email: item.email,
      phone: item.phone,
      website: item.website,
      company: item.company,
    };
  });
  return usersObj;
};
