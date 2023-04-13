import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import QuestionList from "./QuestionList";
import './styles/layout.css'


const Layout = () => {
  return (
    <div className="main">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="main-area">
        <div className="outlet">
          <Outlet />
        </div>

        <QuestionList />
      </div>
    </div>
  );
};

export default Layout;
