import React, {  useContext,useState } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import DataContext from "../context/DataContext";
import Modal from "./Modal";
 
 
 
const SingleFeed = ({data}) => {

    console.log("data");
    console.log(data);


    const { isOpen, setIsOpen } = useContext(DataContext);
    const [showAnswer,setShowAnswer] = useState(false);
  
      const navigate = useNavigate();
      const user = useSelector((state) => state.user);
  
  
      const checkLogIn = (id) => {
        if (!user.user) {
          setIsOpen(true);
          //navigate("/login",{replace:true});
          return false;
        }
        navigate(`/addAnswer/${id}`)
        return true;
      };


    return (

        <div  className="feed-single">
        <div className="feed-single-row1">
          <div className="feed-profile-pic">
            <img src={data.profilePic} alt="profile" />
          </div>
          <h3 className="feed-question">{data.question}</h3>
        </div>
        <div className="feed-single-row2">
          <p>Asked By : {data.askedBy}</p>
          <p>{data.datetime}</p>
        </div>
        <div className="question-img">
          {
          data.questionUrl && <img className="question-img-url" src={data.questionUrl} ></img>
}
        </div>

      { showAnswer &&  <div className="answers">
          <h3>Answers:</h3>
          {data.answers.length ? (
            data.answers.map((ans) => {
              return (
                <div key={ans.answerId} className="answer">
                  <p>👉 {ans.answer}</p>
                  <div className="answerDetails">
                    <p>Answered By : {ans.answerdBy}</p>
                    <p> {ans.datetime}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="no-answers-text">😓 No answers yet</p>
          )}
        </div>}
        <div className="feed-add-answer-btns">
          <button
            className="feed-add-answer-btn"
            onClick={() => checkLogIn(data.id)}
          > Add Answer </button>
          { !showAnswer && <button
            className="feed-show-answer-btn"
            onClick={() => setShowAnswer(true)}
          >Show Answer</button>}
          {
            showAnswer && <button className="feed-hide-answer-btn" onClick={() => setShowAnswer(false)}>^</button>
          }
            
          
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>

    );
    
}


export default SingleFeed;