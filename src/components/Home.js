import Feed from "./Feed";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <Feed className="feed" />
      </div>
    </div>
  );
};

export default Home;
