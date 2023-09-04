import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h1 className="display-2">Northcoders News</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
