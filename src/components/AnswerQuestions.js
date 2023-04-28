import React,{useContext} from 'react'
import { Outlet ,Link} from 'react-router-dom'
import './styles/answerQuestions.css'
import DataContext from '../context/DataContext'


const AnswerQuestions = () => {
/*     const qAa = useSelector((state) => state.qAa); */

  const {searchResults} = useContext(DataContext);

  return (
    <div className="answerQuestions">
      <div className="quesList">
        <h2 style={{ padding: "5px" }}>Select from here</h2>
        {searchResults.length ? (
          searchResults.map((item) => {
            return (
              <div className="question-links" key={item.id}>
                <Link to={`${item.id}`}>{item.question} </Link>
              </div>
            );
          })
        ) : (
          <p>You Have No questions to answer</p>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default AnswerQuestions