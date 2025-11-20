import React from 'react';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <div className="md:relative h-screen text-white">
      <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 rounded-lg shadow-sm">
        <h1 className="text-xl font-bold text-center">🗓️ To Do App List</h1>
        <ToDoList />
      </div>
    </div>
  );
};

export default App;
