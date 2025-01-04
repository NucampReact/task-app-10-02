import React from 'react';
import { useSelector } from 'react-redux';
import SubHeader from '../components/SubHeader';
import TodoList from '../features/todoList/TodoList';

function CompletedItems() {
  const completedTasks = useSelector(function(state) {
    // select what you need from the state
    return state.tasks.filter(task => task.completed);
  });

  return (
    <>
      <SubHeader current='Completed Items' />
      <TodoList
        title='My Completed List'
        showNewButton={false}
        completed={true}
        items={completedTasks}
      />
    </>
  )
}

export default CompletedItems;