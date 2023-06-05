import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { BsBalloonHeart } from "react-icons/bs";
import { Avatar } from "../../Avatar";

import styles from "./Comment.module.css";

interface ICommentProps {
  name: string;
  email: string;
  content: string;
}

export function Comment({ content, name, email }: ICommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }
  return (
    <div className={`${styles.comment}`}>
      <Avatar size={38} />
      <div className={styles.commentBox}>
        <div className={`${styles.genericBox} ${styles.commentContent}`}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{name}</strong>
              <span>{email}</span>
            </div>

            <button
              onClick={() => console.log("click")}
              title="Deletar comentário - em teste"
              aria-label="icone delete"
              disabled
            >
              <FiTrash2 size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <BsBalloonHeart size={20} />
            Da Hora <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
