import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

import bg from "../assets/background/main-background.png"

const StartPage = () => {
    const navigate = useNavigate();
    const { userId } = useParams();

    return (
        <div
            className="game-table"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
            }}
        >
            <Button
                className="spec-btn"
                onClick={() => navigate(`/${userId}/game`)}
            >
                START
            </Button>

            <Button
                className="spec-btn"
                onClick={() => navigate(`/${userId}/settings`)}
            >
                SETTINGS
            </Button>

            <Button
                className="spec-btn"
                onClick={() => navigate(`/${userId}/results`)}
            >
                RESULTS
            </Button>
        </div>
    );
};

export default StartPage;

