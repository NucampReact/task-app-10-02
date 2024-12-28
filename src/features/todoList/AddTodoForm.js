import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardBody, CardHeader, CardFooter, Form, FormGroup, Input, Label, Button } from 'reactstrap';

function AddTodoForm() {
  // Capture all of the form data into our state
  const [ formData, setFormData ] = useState({});
  const [ disableButton, setDisableButton ] = useState(false);
  const dispatcher = useDispatch();

  // { name: 'Do Homework', description: '', due_date: 'mm/dd/yyyy', ... }

  /*
    useEffect(): Initiate some "side effect" upon different renders on our component
      - State changes: forces re-render
      - When our component first renders
      - When our component unmounts

      Two arguments:
        1. Callback fn: Your "side effect" (aka custom code)
        2. Dependencies: What changes/effects you're listening for
          a) [] = First render
          b) [ var1, var2, var3... ] = List of state variables
          c) null/undefined = On every single render
  */

  useEffect(() => {
    // first render
    
  }, [])

  useEffect(function() {
    // Restrict title to only 10 characters
    let regex = /^[a-zA-Z]{1,10}$/;

    if (!regex.test(formData.title)) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }

  }, [ formData.title, formData.description ]); // Only run this when title changes

  useEffect(() => {
    // Run validation for due_date

  }, [ formData.due_date ])

  const createItem = () => {
    // Send the task to redux reducer
    const action = {
      type: 'create-todo-item',
      task: formData
    };

    dispatcher(action);
  };

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
   
    // formData // { name: 'Do Homework', description: '' }
    // formData[name] = value; // this won't work, breaks immutability
    const updatedFormData = { ...formData, [name]: value }

    // set formdata
    setFormData(updatedFormData);
  }

  return (
    <Card>
      <CardHeader>Add New Item</CardHeader>
      <CardBody>
        <Form>
          <FormGroup>
            <Label>Title</Label>
            <Input onChange={handleInput} name="title" />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input onChange={handleInput} name="description" type="textarea" />
          </FormGroup>
          <FormGroup>
            <Label>Due Date</Label>
            <Input onChange={handleInput} name="due_date" type="date" />
          </FormGroup>
          <FormGroup>
            <Label>Assignee</Label>
            <Input onChange={handleInput} name="assignee" type="select">
              <option>Please select...</option>
              <option>Nas B</option>
              <option>Mary C</option>
              <option>Bob D</option>
            </Input>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>
              Priority
            </legend>
            <FormGroup check>
              <Input
                name="priority"
                type="radio"
                value="high"
                onChange={handleInput}
              />
              {' '}
              <Label check>
                High
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="priority"
                type="radio"
                value="medium"
                onChange={handleInput}
              />
              {' '}
              <Label check>
                Medium
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="priority"
                type="radio"
                value="low"
                onChange={handleInput}
              />
              {' '}
              <Label check>
                Low
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
      </CardBody>
      <CardFooter>
        <Button disabled={disableButton} onClick={createItem} color="primary">Create</Button>
      </CardFooter>
    </Card>
  )
};

export default AddTodoForm;