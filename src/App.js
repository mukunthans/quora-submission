import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import { login, logout } from "./features/user/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import AddQuestions from "./components/AddQuestions";
import AnswerQuestions from "./components/AnswerQuestions";
import Layout from "./components/Layout";
import AddAnswer from "./components/AddAnswer";
import ChooseAnswer from "./components/ChooseAnswer";
import { DataProvider } from "./context/DataContext";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
          console.log(authUser);
    });


    
  }, [dispatch]);


  return (
    <DataProvider>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addQuestion" element={<AddQuestions />} />
          <Route path="addAnswer" element={<AnswerQuestions />}>
            <Route index element={<ChooseAnswer />} />
            <Route path=":id" element={<AddAnswer />} />
          </Route>
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
