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
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
        <h2>Гра завершена!</h2>
        <p>{message}</p>
        <p>Ваш рахунок: {playerScore}</p>
        <p>Рахунок дилера: {dealerScore}</p>
        <Button onClick={onRestart}>Restart</Button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default GameOverModal;
