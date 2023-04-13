import React,{useEffect,useState} from 'react'
import NavBar from './NavBar'
import Feed from './Feed'
import QuestionList from './QuestionList'
import './styles/home.css';

const Home = () => {

  return (
    <div className="home">
      <div className="home-content">
        <Feed className="feed"/>
      </div>
    </div>
  );
}

export default Home