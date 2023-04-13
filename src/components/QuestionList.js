import { useSelector } from "react-redux";
import './styles/questionList.css';
import { useContext } from "react";
import DataContext from "../context/DataContext";

const QuestionList = () => {
  const {qAa} = useContext(DataContext);
  return (
    <div className="questionsList">
      <h3>Questions List</h3>
      {qAa.length ? (
        <ul className="question-list">
          {qAa.map((item) => (
            <li key={item.id}>{item.question}</li>
          ))}
        </ul>
      ) : (
        <p>List is Empty</p>
      )}
    </div>
  );
};

export default QuestionList;
