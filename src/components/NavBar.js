import React, { useContext} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./styles/nav.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { FaSearchengin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import DataContext from "../context/DataContext";



const NavBar = () => {


    const { search, setSearch, isOpen, setIsOpen } = useContext(DataContext);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();


  const checkLogIn = () => {
    if (!user.user) {
      setIsOpen(true);
      //navigate("/login",{replace:true});
      return false;
    }
    return true;
  };

  const navigateToAddQuestion = () => {
    if (checkLogIn()) {
      navigate("/addQuestion");
    }
  };
  const navigateToAnswerQuestion = () => {
    if (checkLogIn()) {
      navigate("/addAnswer");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setSearch("");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
            alt="logo"
          />
        </NavLink>
        <div className="navInput">
          <span className="icon">
            <FaSearchengin />
          </span>
          <input
            id="search"
            type="text"
            placeholder="Type here to search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="nav-bar-btns">
          <button className="nav-btns" onClick={() => navigateToAddQuestion()}>
            Add Questions
          </button>
          <button
            className="nav-btns"
            onClick={() => navigateToAnswerQuestion()}
          >
            Answer Questions
          </button>
          {!user.user ? (
            <button className="nav-btns">
              <NavLink className="link" to="/login">
                Login
              </NavLink>
            </button>
          ) : (
            <div>
              <button className="nav-btns" onClick={() => logout()}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default NavBar;
