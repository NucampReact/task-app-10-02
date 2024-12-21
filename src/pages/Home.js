import React from 'react';
import TodoList from '../features/todoList/TodoList';
import SubHeader from '../components/SubHeader';

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
  return (
    <div className='App'>
      <SubHeader current='Home' />
      <TodoList
        title='My Active List'
        showNewButton={true}
        completed={false}
        items={['Do Laundry', 'Clean Room']}
      />
      <TodoList
        title='Completed List'
        showNewButton={false}
        completed={true}
        items={['Take Out Trash', 'Make Dinner']}
      />
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
