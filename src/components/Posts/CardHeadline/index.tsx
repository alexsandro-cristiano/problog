import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IHeadlineProps } from "../../../data/@types/Posts";
import { IUsersProps } from "../../../data/@types/Users";
import { getOneUser } from "../../../data/business/Users";

import { Avatar } from "../../Avatar";
import styles from "./CardHeadline.module.css";

export function CardHeadline({ userId, id, img, title, body }: IHeadlineProps) {
  const [user, setUser] = useState<IUsersProps | null>(null);

  async function getDataUser() {
    const data = await getOneUser(Number(userId));
    setUser(data);
  }
  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <div className={styles.card}>
      <Link to={`/post/${id}`} className={styles.boxImage}>
        {img !== "" ? (
          <img src={img} />
        ) : (
          <span className={styles.tagInfo}>ProBlog Image</span>
        )}
      </Link>
      <section className={styles.wrapperText}>
        <Link to={`/post/${id}`}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <p className={styles.body}>{body}</p>
        <Link to={`/users/${user?.id}`} className={styles.author}>
          <Avatar size={48} />
          <p>{user?.userName}</p>
        </Link>
      </section>
    </div>
  );
}
