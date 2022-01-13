import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/TodoContainer';
import Header from './components/Header';
import './styles/App.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
