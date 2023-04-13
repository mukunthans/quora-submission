import { useEffect,useState,useContext } from "react";
import { useParams ,useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useSelector  } from "react-redux";
import api from '../api/question&ans'
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


   const handleSubmit = async ( ) => {
    console.log(question);

        const datetime = format(new Date(), "MMMM dd yyyy pp");
      const updatedQuestion = {...question,answers : [...question.answers]};

      const answerId = updatedQuestion.answers.length+1;


      const ans = { answerId : `${id}.${answerId}`, answer, answerdBy: user.email ,datetime};
      updatedQuestion.answers.push(ans);

          try{
      const response = await api.put(`/questions/${id}`, updatedQuestion);
      const updatedqAa = qAa.map((qAa) =>
        qAa.id.toString() === id ? updatedQuestion : qAa
      ); 
      console.log(updatedqAa);
      setqAa(updatedqAa);
      console.log('response');
      console.log({ ...response.data });

      setAnswer('');
      navigate('/');
    }catch(err)
    {
      console.log(`Error: ${err.message}`);
    }
   
  }


  return (
    <div className="addAnswer">
      <h3>{question.question}</h3>
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
  );
};

export default AddAnswer
