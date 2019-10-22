import React from 'react';
import './App.css';
import { Button } from 'antd';

import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
