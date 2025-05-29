import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/taskSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, newDescription: newDesc }));
    setEditMode(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {editMode ? (
        <>
          <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
          <button onClick={handleEdit}>✔️</button>
        </>
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
          {task.description}
        </span>
      )}
      <button onClick={() => setEditMode(!editMode)}>✏️</button>
    </div>
  );
};

export default Task;
