import BasePage from "../../components/BasePage/BasePage";
import Button from "../../components/Button/Button";
import bg from "../../assets/background/main-background.png";
import { useNavigate } from "react-router-dom";
import { useGameResults } from "../../hooks/useGameResults";
import styles from './ResultPage.module.css';

const ResultsPage = () => {
  const { results } = useGameResults();
  const navigate = useNavigate();

  return (
    <BasePage background={bg}>
      <div className={styles["result-table"]}>
        {results.length === 0 ? (
          <div className="table-item">Немає результатів</div>
        ) : (
          <table className={styles["table-item"]}>
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

      <div className="btn-panel">
        <Button onClick={() => navigate("/")}>Back to MENU</Button>
      </div>
    </BasePage>
  );
};

export default ResultsPage;
