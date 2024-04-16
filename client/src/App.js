import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import Admin from "./Admin";
import RandomQuizzes from "./Pages/Homepage/RandomQuizzes";
import Home from "./Pages/Homepage";
import AllQuizzes from "./Pages/Quiz/AllQuizzes";
import NewQuiz from "./Pages/Quiz/NewQuiz";
import Quizzes from "./Pages/Quiz/Quizzes";
import Quiz from "./Pages/Quiz/Quiz";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>

      <Switch>
        <Route path="/admin" element={<Admin isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/allQuizzes" element= {<AllQuizzes/>}/>
        <Route path="/newQuiz" element={<NewQuiz/>}/>
        <Route path="/quizzes/:category" element={<Quizzes/>}/>
        <Route path="/quiz/:_id" element={<Quiz/>}/>
      </Switch>
    </Router>
      
      


    
  );
};

export default App;
