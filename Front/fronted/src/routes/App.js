import "./App.css";
import {BrowserRouter, Switch, Router} from 'react-router-dom';
import login from "../views/login";
import inicio from "../views/inicio";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Router exact path="/login" Component={login}/>
        <Router exact path="/inicio" Component={inicio}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
