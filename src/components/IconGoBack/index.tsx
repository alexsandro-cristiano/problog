import { FiCornerDownLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import styles from "./IconGoBack.module.css";
export function IconGoBack() {
  const navigate = useNavigate();

  return (
    <div className={styles.icon} onClick={() => navigate(-1)}>
      <nav>
        <FiCornerDownLeft title="Voltar" size={24} />
      </nav>
    </div>
  );
}
