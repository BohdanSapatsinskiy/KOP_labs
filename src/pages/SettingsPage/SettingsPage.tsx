import BasePage from "../../components/BasePage/BasePage";
import Button from "../../components/Button/Button";
import bg from "../../assets/background/main-background.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSettings } from "../../context/SettingsContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SettingsSchema = Yup.object().shape({
  difficulty: Yup.string().oneOf(["normal", "hard"]).required(),
  volume: Yup.number().min(0).max(100).required(),
});

const SettingsPage = () => {
  const { difficulty, volume, setDifficulty, setVolume } = useSettings();
  const navigate = useNavigate();
  const { userId } = useParams();

  return (
    <BasePage background={bg}>
      <Formik
        initialValues={{ difficulty, volume }}
        validationSchema={SettingsSchema}
        onSubmit={(values) => {
          setDifficulty(values.difficulty as "normal" | "hard");
          setVolume(values.volume);
        }}
      >
        {({ values }) => (
          <Form className="result-table">
            <div className="table-item">
              <p>Рівень складності:</p>
              <label>
                <Field type="radio" name="difficulty" value="normal" /> Normal
              </label>
              <label style={{ marginLeft: "60px" }}>
                <Field type="radio" name="difficulty" value="hard" /> Hard
              </label>
            </div>

            <div className="table-item">
              <p>Гучність: {values.volume}</p>
              <Field type="range" name="volume" min="0" max="100" style={{ width: "200px" }} />
            </div>

            <div className="table-item">
              <Button type="submit" style={{ width: "150px", height: "80px" }}>Зберегти</Button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="btn-panel">
        <Button onClick={() => navigate(`/${userId}/`)}>Back to MENU</Button>
      </div>
    </BasePage>
  );
};

export default SettingsPage;

