import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const AddTask = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nouvelle tâche" />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
};

export default AddTask;
