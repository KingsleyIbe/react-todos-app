import React from 'react';
import ReactDOM from 'react-dom';
// import TodoContainer from './classBased/components/TodoContainer';
import TodoContainer from './functionBased/components/TodoContainer';
import './styles/App.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <TodoContainer /> */}
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
