import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import * as serviceWorker from './serviceWorker';

var todoItems = [];
todoItems.push({ index: 1, value: "learn react", done: false });
todoItems.push({ index: 2, value: "Go shopping", done: true });
todoItems.push({ index: 3, value: "buy flowers", done: true });

ReactDOM.render(
  <React.StrictMode>
    <TodoApp initItems={todoItems} />
  </React.StrictMode>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
