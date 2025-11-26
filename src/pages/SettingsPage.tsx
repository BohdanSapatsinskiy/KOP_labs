import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSettings } from "../context/SettingsContext";
import Button from "../components/Button";

const SettingsSchema = Yup.object().shape({
  difficulty: Yup.string().oneOf(["normal", "hard"]).required(),
  volume: Yup.number().min(0).max(100).required(),
});

export default function SettingsPage() {
  const { difficulty, volume, setDifficulty, setVolume } = useSettings();

  return (
    <div>
      <h1>Game Settings</h1>

      <Formik
        initialValues={{ difficulty, volume }}
        validationSchema={SettingsSchema}
        onSubmit={(values) => {
          setDifficulty(values.difficulty as "normal" | "hard");
          setVolume(values.volume);
        }}
      >
        {({ values }) => (
          <Form>

            {/* Difficulty */}
            <div>
              <p>Рівень складності:</p>

              <label>
                <Field type="radio" name="difficulty" value="normal" />
                Normal
              </label>

              <label>
                <Field type="radio" name="difficulty" value="hard" />
                Hard
              </label>
            </div>

            {/* Volume */}
            <div>
              <p>Гучність: {values.volume}</p>
              <Field type="range" name="volume" min="0" max="100" />
            </div>

            <Button type="submit">
              Зберегти
            </Button>

          </Form>
        )}
      </Formik>
    </div>
  );
}

