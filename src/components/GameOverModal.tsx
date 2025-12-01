import ReactDOM from "react-dom";
import Button from "./Button";

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
    <div className="modal-overlay">
        <div className="diller-block">
          <img className="diller" src="/src/assets/diller.png" alt="Дилер" />
          <div className="diller-message">
            <div className="message-text">
              <p>{message}</p>
              <p>Ваш рахунок: {playerScore}</p>
              <p>Мій рахунок: {dealerScore}</p>
            </div>
              <Button className="spec-btn" onClick={onRestart}>Restart</Button>
          </div>
        </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default GameOverModal;
