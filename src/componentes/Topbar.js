import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import button from "react-bootstrap/Button";

export default function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
        <img src="https://images.squarespace-cdn.com/content/v1/5d9f76ad58a4874af8e463b4/1586534119294-5IBOSU4B1NALRFQBQXDD/instacart+logo.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav
          style={{
            padding: "30px 40px 20px 40px",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: "bolder",
            display: "flex",
          }}
        >
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
