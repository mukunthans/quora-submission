import React, {  useContext } from "react";
import './styles/feed.css'
import {  useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import DataContext from "../context/DataContext";
import Modal from "./Modal";



const Feed = () => {


  const { searchResults, isOpen, setIsOpen } = useContext(DataContext);

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
/*   const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchQAndAData(search));
  },[dispatch,search])


   */


  return (
    <div className="feed">
      {searchResults ? (
        <>
          {searchResults.map((data) => {
            return (
              <div key={data.id} className="feed-single">
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

                <div className="answers">
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
                </div>
                <div className="feed-add-answer-btns">
                  <button
                    className="feed-add-answer-btn"
                    onClick={() => checkLogIn(data.id)}
                  >
                    Add Answer
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div>Not Availble</div>
      )}
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default Feed