import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Nav className="me-auto" href="/">
          <Nav.Link href="/"> Home</Nav.Link>
        </Nav>
        <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/topics"> View topics</Nav.Link>
        </Nav>
        <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
          <Navbar.Text> View users</Navbar.Text>
        </Nav>

        <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
          <NavDropdown title="Articles" id="basic-nav-dropdown">
            <NavDropdown.Item href="/articles">
              View all articles
            </NavDropdown.Item>
            <NavDropdown.Item>Add a new article</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;

//might need to stack it
