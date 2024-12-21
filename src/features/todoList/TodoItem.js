import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../../components/SubHeader';

function TodoItem() {
  const params = useParams(); // returns an object of all the params

  return (
    <Container>
      <SubHeader current={params.itemName} />

      <Row className='row-content'>
        <Col sm='6'>
          <h3>Description/Directions</h3>
          <p>
            Some description here..
          </p>
          <Row className='row-content'>
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
