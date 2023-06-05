import styles from "./Avatar.module.css";

interface IAvatarProps {
  size?: number;
}

export function Avatar({ size = 24 }: IAvatarProps) {
  return (
    <div
      className={styles.fakeAvatar}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div className={styles.avatar}></div>
    </div>
  );
}
