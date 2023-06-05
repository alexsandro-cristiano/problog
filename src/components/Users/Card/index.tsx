import { Link } from "react-router-dom";
import { Avatar } from "../../Avatar";
import styles from "./Card.module.css";

interface ICardProps {
  id: number;
  fullName: string;
  companyName: string | undefined;
}

export function Card({ fullName, id, companyName }: ICardProps) {
  return (
    <div className={`${styles.genericBox} ${styles.profile}`}>
      <header>
        <div className={styles.border}>
          <Avatar size={80} />
        </div>
        <strong>{fullName}</strong>
        <span>{companyName}</span>
      </header>
      <Link
        to={`/users/${id}`}
        className={`${styles.genericBox} ${styles.link}`}
      >
        Ver detahes
      </Link>
    </div>
  );
}
