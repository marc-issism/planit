import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container container">
        <div className="home__brand">Planit.</div>
        <div className="home__description">
          Organize. Suggest. Hang out. Make Plans.
        </div>
        <div className="home__button">
          <button>Planit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
