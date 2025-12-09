import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";

import bg from "../../assets/background/main-background.png"

const StartPage = () => {
    const navigate = useNavigate();
    const { userId } = useParams();

    return (
        <div
            className="table"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
            }}
        >
            <Button
                onClick={() => navigate(`/${userId}/game`)}
            >
                START
            </Button>

            <Button
                onClick={() => navigate(`/${userId}/settings`)}
            >
                SETTINGS
            </Button>

            <Button
                onClick={() => navigate(`/${userId}/results`)}
            >
                RESULTS
            </Button>
        </div>
    );
};

export default StartPage;

