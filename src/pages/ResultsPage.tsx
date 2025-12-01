import { useNavigate } from "react-router-dom";
import { useGameResults } from "../hooks/useGameResults";

const ResultsPage = () => {
  const { results } = useGameResults();
  const navigate = useNavigate();

  return (
    <div
      className="game-table"
      style={{
        backgroundImage: 'url(/src/assets/background/main-background.png)',
        backgroundSize: 'cover',
      }}
    >
      <div className="result-table">
        {results.length === 0 ? (
          <div className="table-item">Немає результатів</div>
        ) : (
          <table className="table-item">
            <thead>
              <tr>
                <th>ID</th>
                <th>Гравець</th>
                <th>Дилер</th>
                <th>Результат</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, index) => (
                <tr key={index}>
                  <td>{r.id}</td>
                  <td>{r.playerScore}</td>
                  <td>{r.dealerScore}</td>
                  <td>{r.result}</td>
                  <td>{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div
        className="spec-btn"
        style={{ position: "absolute", bottom: 0, marginBottom: "60px" }}
        onClick={() => navigate("/")}
      >
        Back to MENU
      </div>
    </div>
  );
};

export default ResultsPage;
