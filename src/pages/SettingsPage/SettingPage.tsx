import Button from "../../components/Button/Button";

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <section className="settings-section">
        <h2>Settings</h2>

        <form className="settings-form">
          <div className="form-group">
            <p>Difficulty:</p>

            <label>
              <input type="radio" name="difficulty" />
              Normal
            </label>

            <label>
              <input type="radio" name="difficulty" />
              Hard
            </label>
          </div>

          <div className="form-group">
            <p>Volume:</p>
            <input type="range" min="0" max="100" />
          </div>

          <div className="form-group">
            <Button type="button">Save</Button>
          </div>
        </form>
      </section>

      <div className="btn-panel">
        <Button>Back to menu</Button>
      </div>
    </div>
  );
};

export default SettingsPage;
