import { Container, CloseButton, Form, Row, Col } from "react-bootstrap";

const Todo = ({ text, removeTodo }) => {
  return (
    <div className="Todo">
      <Container fluid>
        <Row>
          <Col>
            <Form.Check className="mb-0" label={text} />
          </Col>
          <Col className="align-middle" xs="auto">
            <CloseButton style={{ "font-size": "10px" }} onClick={() => removeTodo(text)} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Todo