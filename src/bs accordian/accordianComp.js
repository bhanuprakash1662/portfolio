import Accordion from 'react-bootstrap/Accordion';

function Accordian(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
            <img src={props.img} alt='imagee' style={{height:"200px"}}></img>
          <p>{props.disc}</p>

        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
  );
}

export default Accordian;