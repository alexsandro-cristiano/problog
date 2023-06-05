interface ICommentsProps {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IHeadlineProps {
  id: number;
  title: string;
  body?: string;
  userId?: number;
  img?: string;
}

export interface IPostProps extends IHeadlineProps {
  comments: ICommentsProps[];
  qtdComments?: number;
  userId: number;
  userName: string;
}
