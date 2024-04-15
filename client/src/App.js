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

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>

      <Switch>
        <Route path="/admin" element={<Admin isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/allQuizzes" element= {<AllQuizzes/>}/>
        <Route path="/newQuiz" element={<NewQuiz/>}/>
      </Switch>
    </Router>
      
      


    
  );
};

export default App;
