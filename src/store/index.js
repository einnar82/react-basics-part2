import React, { useState, useMemo, useContext } from "react";

const AppContext = React.createContext({});

const useAppContext = () => {
  return useContext(AppContext);
};

const useAppState = () => {
  const initialState = {
    count: 0,
    data: [],
    user: {},
    todos: []
  };
  const [state, setState] = useState(initialState);
  const actions = useMemo(() => getActions(setState), [setState]);

  return { state, actions };
};

const getActions = setState => ({
  increment: () => {
    setState(state => ({ ...state, count: state.count + 1 }));
  },
  decrement: () => {
    setState(state => ({ ...state, count: state.count - 1 }));
  },
  fetchData: () => {
    console.log("im fetching data");
  },
  addTodo: todo => {
    setState(state => ({
      ...state,
      todos: state.todos.concat(todo)
    }));
  },
  deleteTodo: id => {
    setState(state => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  }
});

export { useAppState, AppContext, useAppContext };
