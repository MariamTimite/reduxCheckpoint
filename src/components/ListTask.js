import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../redux/taskSlice';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not-done') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>Toutes</button>
        <button onClick={() => dispatch(setFilter('done'))}>Faites</button>
        <button onClick={() => dispatch(setFilter('not-done'))}>Non faites</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
