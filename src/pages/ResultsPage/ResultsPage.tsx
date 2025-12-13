import Button from "../../components/Button/Button";

const ResultsPage = () => {
  return (
    <div>
      <section>
        <h2>Game Results</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Player</th>
              <th>Dealer</th>
              <th>Result</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div>
        <Button>Back to menu</Button>
      </div>
    </div>
  );
};

export default ResultsPage;
