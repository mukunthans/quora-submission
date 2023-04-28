import { useState,useContext } from "react";
import { useParams ,useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useSelector  } from "react-redux";
import './styles/addAnswer.css'
import DataContext from "../context/DataContext";

const AddAnswer = () => {

/*    const qAa = useSelector((state) => state.qAa.qAa); */
  const {qAa,setqAa} = useContext(DataContext);
   const user = useSelector((state) => state.user.user);
   const navigate = useNavigate();
  
   const {id} = useParams();
   const question = qAa.find(question => (question.id).toString() === id);
   const [answer,setAnswer] = useState("");


   const handleSubmit =  ( ) => {
    console.log(question);

        const datetime = format(new Date(), "MMMM dd yyyy pp");
      const updatedQuestion = {...question,answers : [...question.answers]};

      const answerId = updatedQuestion.answers.length+1;


      const ans = { answerId : `${id}.${answerId}`, answer, answerdBy: user.email ,datetime};
      updatedQuestion.answers.push(ans);

      const updatedqAa = qAa.map((qAa) =>
        qAa.id.toString() === id ? updatedQuestion : qAa
      ); 
      console.log(updatedqAa);
      setqAa(updatedqAa);
      localStorage.setItem("questions", JSON.stringify(updatedqAa));


      setAnswer('');
      navigate('/');
      alert("Answer added");

   
  }


  return (
    <>
      {question ? (
        <div className="addAnswer">
          <h3>{question.question}</h3>
          <div className="feed-single-row2">
          <p>Asked By : {question.askedBy}</p>
          <p>{question.datetime}</p>
        </div>
        <div className="question-img">
          {
          question.questionUrl && <img className="question-img-url" src={question.questionUrl} ></img>
}
        </div>
          <form className="addAnswer-form" onSubmit={(e) => e.preventDefault()}>
            <input
              id="answer"
              type="text"
              value={answer}
              required
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here"
            />
            <button type="submit" onClick={() => handleSubmit()}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <p>Please Reload</p>
      )}
    </>
  );
};

export default AddAnswer
