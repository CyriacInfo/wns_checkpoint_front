import Continents from "../components/Continents";
import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeTitle">Continents</h1>
      <Continents />
    </div>
  );
};

export default Home;
