import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Movie({title,description,posterURL,rating}) {
  return (
    <Card style= {{ width: '18rem' }}>
        <Card.Img variant="top" src= {posterURL} />
        <ListGroup className="list-group-flush">
        <ListGroup.Item>{title}</ListGroup.Item>
        <ListGroup.Item>{description}</ListGroup.Item>
        <ListGroup.Item>{rating}</ListGroup.Item>
      </ListGroup>
   
    </Card>
  );
}

export default Movie;