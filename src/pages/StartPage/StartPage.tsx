import BasePage from "../../components/BasePage/BasePage";
import Button from "../../components/Button/Button";
import bg from "../../assets/background/main-background.png";
import { useNavigate, useParams } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  return (
    <BasePage background={bg}>
      <>
        <Button onClick={() => navigate(`/${userId}/game`)}>START</Button>
        <Button onClick={() => navigate(`/${userId}/settings`)}>SETTINGS</Button>
        <Button onClick={() => navigate(`/${userId}/results`)}>RESULTS</Button>
      </>
    </BasePage>
  );
};

export default StartPage;
