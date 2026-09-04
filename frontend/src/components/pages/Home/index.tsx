import { useNavigate } from "react-router";
import "./Home.scss";
import usePlanCreateWidgetsStore from "../../../store/planCreateWidgets";
import WidgetSelectModal from "../../widgets/WidgetSelectModal";

const Home = () => {
  const navigate = useNavigate();

  const selectedWidgets = usePlanCreateWidgetsStore((state) => state.widgets);
  const addWidget = usePlanCreateWidgetsStore((state) => state.addWidget);

  const goToPlanCreate = () => {
    navigate("/plan/create", { state: { from: "home" } });
    addWidget({
      id: 1,
      header: "Time Widget",
      content: <>Time Widget 19:56</>,
    });
  };
  console.log(selectedWidgets);

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
      <WidgetSelectModal />
    </div>
  );
};

export default Home;
