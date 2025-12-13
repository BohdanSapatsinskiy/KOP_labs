import Hand from "../../components/Hand/Hand";
import Button from "../../components/Button/Button";

const GamePage = () => {
  return (
    <div className="game-page">
      {/* Dealer hand */}
      <section className="game-section">
        <Hand
          cards={[
            { image: "/placeholder-card.png" },
            { image: "/placeholder-card.png" },
          ]}
          hideSecondCard
        />
      </section>

      {/* Player hand */}
      <section className="game-section">
        <Hand
          cards={[
            { image: "/placeholder-card.png" },
            { image: "/placeholder-card.png" },
          ]}
        />
      </section>

      {/* Control panel */}
      <div className="btn-panel">
        <Button>Back to menu</Button>
        <Button>Open</Button>
      </div>
    </div>
  );
};

export default GamePage;

