import React, {  useContext,useState } from "react";
import './styles/feed.css'
import {  useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import DataContext from "../context/DataContext";
import Modal from "./Modal";
import SingleFeed from "./SingleFeed";



const Feed = () => {


  const { searchResults, isOpen, setIsOpen } = useContext(DataContext);
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
              <SingleFeed key={data.id} data={data} />
            )
          })}
        </>
      ) : (
        <div>Not Availble</div>
      )}
      
    </div>
  );
}

export default Feed