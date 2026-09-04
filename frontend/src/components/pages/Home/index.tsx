import { useNavigate } from "react-router";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const goToPlanCreate = () => {
    navigate("/plan/create", { state: { from: "home" } });
  };

  return (
    <div className="home">
      <div className="home__container container">
        <div className="home__brand">Planit.</div>
        <div className="home__description">
          Organize. Suggest. Hang out. Make Plans.
        </div>
        <div className="home__button">
          <button onClick={goToPlanCreate}>Planit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
