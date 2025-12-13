import ReactDOM from "react-dom";
import Button from "../Button/Button";
import styles from './GameOverModal.module.css';


type Props = {
  isOpen: boolean;
  onRestart: () => void;
  playerScore: number;
  dealerScore: number;
  message: string;
};

const GameOverModal = ({ isOpen, onRestart, playerScore, dealerScore, message }: Props) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(    
    <div className={styles["modal-overlay"]}>
        <div className={styles["diller-block"]}>
          <img className={styles["diller"]} src="/src/assets/diller.png" alt="Дилер" />
          <div className={styles["diller-message"]}>
            <div className={styles["message-text"]}>
              <p>{message}</p>
              <p>Ваш рахунок: {playerScore}</p>
              <p>Мій рахунок: {dealerScore}</p>
            </div>
              <Button onClick={onRestart}>Restart</Button>
          </div>
        </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default GameOverModal;