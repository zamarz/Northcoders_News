import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Navbar.Text> View topics</Navbar.Text>
        </Nav>
        <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
          <Navbar.Text> View all comments</Navbar.Text>
        </Nav>
        <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
          <Navbar.Text> View users</Navbar.Text>
        </Nav>

        <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
          <NavDropdown title="Articles" id="basic-nav-dropdown">
            <NavDropdown.Item>View all articles</NavDropdown.Item>
            <NavDropdown.Item>Add a new article</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;

//might need to stack it
