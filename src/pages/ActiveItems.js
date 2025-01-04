import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubHeader from '../components/SubHeader';
import TodoList from '../features/todoList/TodoList';

function ActiveItems() {
  const dispatcher = useDispatch();

  const activeTasks = useSelector(function(state) {
    // select what you need from the state
    return state.tasks.filter(task => !task.completed);
  });
  
  useEffect(() => {
    fetch(`http://localhost:3001/tasks`)
      .then(async function(response) {
        const tasks = await response.json();
        
        // dispatch an action to save into redux
        dispatcher({
          type: 'load-tasks',
          tasks
        })
      })
      .catch(function() {

      });
  }, [])

  return (
    <>
      <SubHeader current='Active Items' />
      <TodoList
        title='My Active List'
        showNewButton={true}
        completed={false}
        items={activeTasks}
      />
    </>
  )
}

export default ActiveItems;