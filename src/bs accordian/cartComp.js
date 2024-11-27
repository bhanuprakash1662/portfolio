import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} style={{height:"200px"}} />
      <Card.Body style={{overflowY:"scroll",  height:"150px"}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.disc}
        </Card.Text>
        <Button variant="primary">{props.count}</Button>
      </Card.Body>
      <Card.Footer>
        {props.Cat}
      </Card.Footer>
    </Card>
  );
}

export default cards;