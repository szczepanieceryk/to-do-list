import React from 'react';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🗓️ To Do App List</h1>
        <ToDoList />
      </div>
    </div>
  );
};

export default App;
