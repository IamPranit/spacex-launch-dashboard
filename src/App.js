import "./App.css";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LaunchList from "./components/launches/LaunchList";

function App() {
  const cookieStatus = document.cookie.startsWith("userAuth=");
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/">
          {cookieStatus && cookieStatus ? 
            <Redirect to="/dashboard" />
           : 
            <Redirect to="/login" />
          }
        </Route>
        <Switch>
          <Route exact path="/dashboard">
            <LaunchList />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
