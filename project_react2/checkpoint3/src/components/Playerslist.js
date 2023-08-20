import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Playercard({name,team,nationality,jerseyNumber,age,image}) {
  return (
    <Card style= {{ width: '18rem' }}>
      <Card.Img variant="top" src= {image} />
    
        <ListGroup className="list-group-flush">
        <ListGroup.Item>{name}</ListGroup.Item>
        <ListGroup.Item>{team}</ListGroup.Item>
        <ListGroup.Item>{nationality}</ListGroup.Item>
        <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
        <ListGroup.Item>{age}</ListGroup.Item>
      </ListGroup>
   
    </Card>
  );
}

export default Playercard;