import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import jsonProduct from './product';

let newObj= JSON.parse(jsonProduct);
function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src= {newObj.image}/>
      <Card.Body>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>  <Name  name = {newObj.name}/></ListGroup.Item>
        <ListGroup.Item><Price price = {newObj.price}/></ListGroup.Item>
        <ListGroup.Item> <Description description={newObj.description}/></ListGroup.Item>
      </ListGroup>
      
    </Card>
  );
}

export default Cards;