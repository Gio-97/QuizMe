import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import Admin from "./Admin";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <Admin adminStateProp={isAdmin} />

      <Admin adminStateProp={setIsAdmin} />
    </>
  );
};

export default App;
