import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppContext, useAppState } from "./store";
import App from "./App";
import About from "./pages/About";
import Todos from "./pages/Todos";
import "./css/MyApp.css";
import AddTodo from "./pages/AddTodo";

const MyApp = () => {
  const { state, actions } = useAppState();

  return (
    <AppContext.Provider value={{ state, actions }}>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/add-todo">
            <AddTodo />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default MyApp;
