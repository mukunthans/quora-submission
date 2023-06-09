import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "./styles/addQuestion.css";
import DataContext from "../context/DataContext";
import {FaLink} from "react-icons/fa"
const AddQuestions = () => {
  const { qAa, setqAa } = useContext(DataContext);
  /*     const qAa = useSelector((state) => state.qAa.qAa); */
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [questionUrl,setQuestionUrl] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = qAa.length ? qAa[qAa.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd yyyy pp");
    const newQuestion = {
      id,
      question,
      questionUrl,
      datetime,
      askedBy: user.email,
      profilePic:
        user.photo ||
        "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
      answers: [],
    };

    const allqAa = [...qAa, newQuestion];
    localStorage.setItem("questions", JSON.stringify(allqAa));
    setqAa(allqAa);
    setQuestion("");
    navigate("/");
    alert("Question added");
  };

  return (
    <div className="AddQuestion">
      <h2>Add Question</h2>
      <form className="addQuestionForm" onSubmit={handleSubmit}>
        <label htmlFor="question">Question:</label>
        <input
          id="question"
          type="text"
          value={question}
          required
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question here"
        />
        < FaLink  style={{display:"inline-block"}}/>

          <input
          style={{padding:0,border:0 ,outline:"none",display:"inline-block"} }
          
          type="text"
          value={questionUrl}
          onChange={(e) => setQuestionUrl(e.target.value)}
          placeholder="Optional: include a link that gives context"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddQuestions;
