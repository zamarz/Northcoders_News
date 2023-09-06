import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";

const Header = () => {
  const { username } = useContext(UserContext);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h1 className="display-2">Northcoders News</h1>
          <p>Logged in as {username}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
