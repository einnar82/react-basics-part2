import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
// import MyApp from "./MyApp";
import * as serviceWorker from "./serviceWorker";
import ReduxMain from "./ReduxMain";

const store = createStore(rootReducer);
// ReactDOM.render(<MyApp />, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <ReduxMain />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
