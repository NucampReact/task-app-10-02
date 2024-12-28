let initialState = {
  tasks: [] // all the tasks I have
};

function TaskReducer(state = initialState, action) {
  if (action.type === 'create-todo-item') {
    // Add the created task item to the tasks array

    const newState = { ...state };
    newState.tasks.push(action.task);

    return newState;
  
  } else if (action.type === 'complete-task') {
    
    // Update the task, mark it as complete
    const newState = { ...state };

    for (let i = 0; i < newState.tasks.length; i++) {
      if (newState.tasks[i].title === action.taskTitle) {
        newState.tasks[i].completed = true;
      }
    }

    return newState;

  } else {
    return initialState;
  }
};

export default TaskReducer;