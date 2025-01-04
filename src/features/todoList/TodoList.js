import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  InputGroup,
} from 'reactstrap';

/*
  React State Management:

  - Special mechanism to communicate to React Framework when we need our component
    to re-render with updates
  
    Hooks:
      - useState(): Update the state of a React Component
        - Returns an array of two elements
          - 1st: Pointer to the data you're tracking
          - 2nd: A function to update the data
      
          Example:
          let results = useState();
          let addedItem = results[0];
          let setAddedItem = results[1];
*/

// <TodoList items={[]} /> = TodoList();
function TodoList({ title, showNewButton, completed, items: todoItems }) {
  const [addedItem, setAddedItem] = useState(false);
  const [newItem, setNewItem] = useState();
  const dispatcher = useDispatch();

  // Get items based on active or completed
  const [items, setItems] = useState(todoItems);

  useEffect(() => {
    setItems(todoItems)
  }, [todoItems])

  const addNewItem = () => {
    setAddedItem(true); // provide updated value as argument
    // console.log('Changing addItem to true', addedItem);
  };

  const saveItem = () => {
    const updatedItems = items.concat(newItem);
    setItems(updatedItems);

    setNewItem('');
  };

  const markItemAsCompleted = (event) => {
    let taskTitle = event.target.value;

    // Dispatch an action to update the task to completed
    let action = {
      type: 'complete-task',
      taskTitle: taskTitle
    }
    dispatcher(action);
  }

  const deleteTask = (task) => {
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: 'DELETE'
    })
      .then()
      .catch()
  }

  // Render a list of items within a card
  const showItems = () => {
    const jsxItems = items.map(function (item) {
      // loop over items, and return an array of JSX
      let completedClass = '';
      let checkClass = '';
      let isChecked = false;
      if (item.completed) {
        completedClass = 'text-muted';
        isChecked = true;
        checkClass = 'bg-secondary border-secondary';
      }

      return (
        <li key={item.title} className={`${completedClass} list-group-item`}>
          <input
            onChange={markItemAsCompleted}
            value={item.title}
            className={`${checkClass} form-check-input`}
            type='checkbox'
            checked={isChecked}
          />
          <Link to={`/todo/${item.title}`}>
            <span className='ms-3'>{item.title}</span>&nbsp;&nbsp;
          </Link>
          <Button onClick={() => deleteTask(item)} color="danger" size="sm">Delete</Button>
        </li>
      );
    });

    return jsxItems;
  };

  // Display input for adding a new item
  const showAddedItemInput = () => {
    if (addedItem) {
      return (
        <Row>
          <Col>
            <InputGroup className='shadow-sm bg-white rounded mt-3'>
              <Input
                className='input'
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
              />
              <Button
                onClick={saveItem}
                className='btn-custom2'
              >
                Save
              </Button>
            </InputGroup>
          </Col>
        </Row>
      );
    }
  };

  const showButton = () => {
    if (showNewButton) {
      return (
        <CardFooter>
          <Button
            onClick={addNewItem}
            className='btn-custom1'
            size='sm'
          >
            Add New
          </Button>
        </CardFooter>
      );
    }
  };

  return (
    <section className='todo-list mt-2'>
      <Card className='mt-3'>
        <CardHeader>{title}</CardHeader>
        <CardBody>
          <ul className='list-group list-group-flush'>{showItems()}</ul>
          {showAddedItemInput()}
        </CardBody>
        {showButton()}
      </Card>
    </section>
  );
}

export default TodoList;

/*
function sayName() {
  console.log('My name is Jolie');
};

sayName(); // My name is Nas
sayName(); // My name is Mary
sayName(); // My name is Bob
sayName(); // My name is Jolie
*/
