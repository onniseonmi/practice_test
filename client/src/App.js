import "./App.css";
import react from "react";
import Nav from "./components/Nav";
import CocktalList from "./pages/CocktalList";
import Community from "./pages/Community";
import Mainpage from "./pages/Mainpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact={true} path="/">
          <Mainpage />
        </Route>
        <Route path="/cocktaillist">
          <CocktalList />
        </Route>
        <Route path="/community">
          <Community />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
