import { IHeadlineProps, IPostProps } from "../../@types/Posts";
import { getInformation } from "../../services/Posts";
import { getOneUser } from "../Users";

async function getComments(id: number) {
  const url = `/posts/${id}/comments`;
  return await getInformation(url);
}

export const getAllPost = async () => {
  const url = `/posts`;
  const data = await getInformation(url);
  const postObj: IHeadlineProps[] = data.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      body: item.body,
      userId: item.userId,
      img: "",
    };
  });
  return postObj;
};

export const getInformationsOfPost = async (paramId: undefined | string) => {
  const allPosts = await getAllPost();
  const postFiltered = allPosts.find((item) => item.id === Number(paramId));

  if (postFiltered) {
    const comments = await getComments(Number(postFiltered?.id));
    const user = await getOneUser(Number(postFiltered?.userId));
    const obj: IPostProps = {
      id: postFiltered?.id,
      title: postFiltered?.title,
      body: postFiltered?.body,
      qtdComments: [...comments].length,
      comments: comments,
      userName: user.name,
      userId: user.id,
    };
    return obj;
  }
  return null;
};
