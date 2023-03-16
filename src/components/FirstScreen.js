import styles from "./FirstScreen.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";

const FirstScreen = () => {
  return (
    <div className={styles.containerFirstPage}>
      <div className={styles.subContainer}>
        <h1>Olá, me chamo Felipe.</h1>
        <h2>Sou um Desenvolvedor Front-End</h2>
        <div className={styles.icon}>
          <AiOutlineArrowDown color="white" size={35} />
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
