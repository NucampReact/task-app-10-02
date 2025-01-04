import React from 'react';
import TodoList from '../features/todoList/TodoList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux';
import { Alert } from 'reactstrap';
import ActiveItems from './ActiveItems';
import CompletedItems from './CompletedItems';

/*
  React Component = Function that returns JSX (JavaScript XML [extensible markup language] )

  HTML:
  <p id="myId" class=""></p> == Paragraph tags

  XML:
  <foobar hello="world"></foobar> != paragraph

  Conversion Process of XML into HTML:

  1. Parses all of the XML
  2. Turns all the XML nodes into JS objects/nodes
    Example: div = document.createElement('div');
             div.innerHTML = "<p>My content</p>";
  3. Organizing all the JS into the right structure

  React Inject HTML into your DOM:

  - Happens at the time of render (i.e. <App />)
*/
function Home() {

  // Read the data from Redux Store -- count all my tasks
  // Special hook to read data -- useSelector()
  const activeTasks = useSelector(function(state) {
    // select what you need from the state
    return state.tasks.filter(task => !task.completed);
  });

  const completedTasks = useSelector(function(state) {
    // select what you need from the state
    return state.tasks.filter(task => task.completed);
  });

  const totalTasks = activeTasks.length + completedTasks.length;

  console.log('My Active Tasks Are', activeTasks);
  console.log('My Completed Tasks Are', completedTasks);

  return (
    <div className='App'>
      <SubHeader current='Home' />
      <Alert color='info'>Total Tasks: {totalTasks}</Alert>
      <ActiveItems />
      <CompletedItems />
    </div>
  );
}

/*
const props = {
  title: 'My Active List',
  foo: 'bar',
  num: 1
};

TodoList(props);
*/

export default Home;

// function sayName(name) {
//   console.log('my name is', name);
// }

// sayName('Nas');
// sayName('Mary')
