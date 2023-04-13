import React ,{}from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import './styles/modal.css'


const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ open,  onClose }) {

    const navigate = useNavigate();
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div>
          <img className="modal-img"
            src="https://media.istockphoto.com/id/1290154699/vector/comic-speech-bubble-with-text-oops-message-in-pop-art-style.jpg?s=612x612&w=0&k=20&c=4J-vEqvSWx-HEq8IiG5qP1WcM4Sf1xNsmXNInjMzWHY="
            alt="oops"
          />
        </div>
        <h4 className="modal-text">You have to Login to perform this action</h4>

        <div className="modal-btns">
          <button className="close-btn" onClick={onClose}>Close</button>
          <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
