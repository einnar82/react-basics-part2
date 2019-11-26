import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppContext, useAppState } from "./store";
import App from "./App";
import About from "./pages/About";
import Todos from "./pages/Todos";
import "./css/MyApp.css";
import AddTodo from "./pages/AddTodo";

const links = [
  {
    link: "/",
    component: () => <App />,
    name: "Home"
  },
  {
    link: "/about",
    component: () => <About />,
    name: "About"
  },
  {
    link: "/todos",
    component: () => <Todos />,
    name: "Todos"
  },
  {
    link: "/add-todo",
    component: () => <AddTodo />
  }
];
const MyApp = () => {
  const { state, actions } = useAppState();

  return (
    <AppContext.Provider value={{ state, actions }}>
      <Router>
        <ul>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        <Switch>
          {links.map((item, index) => {
            return (
              <Route
                key={index}
                exact={item.link === "/" ? true : false}
                path={item.link}
              >
                {item.component}
              </Route>
            );
          })}
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default MyApp;
