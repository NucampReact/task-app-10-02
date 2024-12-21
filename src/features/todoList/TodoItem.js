import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../../components/SubHeader';
import { allCompletedItems } from './todoSplice';

function TodoItem() {
  const params = useParams(); // returns an object of all the params
  console.log(params);
  const completedItems = allCompletedItems();
  const isCompleted = completedItems.includes(params.itemName); //creating a bolean from the includes method by checking if our named item is in the completedItems array

  return (
    <Container>
      <SubHeader current={params.itemName} />

      <Row className='row-content'>
        <Col sm='6'>
          {isCompleted && (
            <img
              src='/completedImg.png'
              alt='Completed'
              style={{ width: '250px' }}
            />
          )}
          <h3>Description/Directions</h3>
          <p>
            Unsure of what you were going to do for class but if we create a
            button with a modal we can add a form to edit the tasks properties
            to assign it to someone, date etc.
          </p>
          <Row className='row-content'>
            {isCompleted ? (
              <>
                <Col>
                  <p>
                    Completed by:
                    <br />
                    Dynamic Name
                  </p>
                </Col>
                <Col>
                  <p>
                    Completed on:
                    <br />
                    Dynamic Date
                  </p>
                </Col>
              </>
            ) : (
              <>
                <Col>
                  <p>
                    Assigned to:
                    <br />
                    Dynamic Name
                  </p>
                </Col>
                <Col>
                  <p>
                    Due date:
                    <br />
                    Dynamic Date
                  </p>
                </Col>
              </>
            )}
          </Row>
        </Col>
        <Col sm='6'>
          <Card>
            <CardHeader className='bg-custom-primary text-white'>
              <h3>Additional Tasks</h3>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='row-content'>
        <Col xs='12'>
          <h3>Notes</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoItem;
