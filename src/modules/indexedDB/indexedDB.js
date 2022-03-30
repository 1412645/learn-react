import React, { useState, useEffect } from 'react';
import { DatabaseService } from '../../services/database';

const IndexedDB = () => {
  const [toDos, setToDo] = useState([]);

  const getTodosFromDatabase = () => {
    DatabaseService.init().then(async () => {
      const todos = await DatabaseService.getAll();
      setToDo(todos);
    });
  };

  const handleAddData = async () => {
    const todos = await DatabaseService.add('test');
    console.log('todos: ', todos);
  };

  useEffect(getTodosFromDatabase, []);

  return (
    <div>
      <div>IndexedDB</div>
      <button>Read </button>
      <button>Read all</button>
      <button onClick={handleAddData}>Add data</button>
      <button>Delete data </button>
    </div>
  );
};

export default IndexedDB;
