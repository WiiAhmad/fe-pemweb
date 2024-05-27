import InputForm from "../components/InputForm";
import NavbarComp from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div>
      <NavbarComp />
      <Container className="mt-5">
        <Row className="py-5">
          <Col md={6} className="mx-auto">
            <div className="shadow p-5 rounded">
              <h2 className="text-center mb-4">Welcome!</h2>
              <h4 className="text-center mb-4">Sign Up</h4>
              <p className="text-center mb-4">
                Please fill in the form to create an account.
              </p>
              <Form>
                <InputForm
                  textLabel="Name"
                  htmlFor="name"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                />
                <InputForm
                  textLabel="Username"
                  htmlFor="username"
                  placeholder="Enter your username"
                  type="text"
                  id="username"
                />
                <InputForm
                  textLabel="Password"
                  htmlFor="password"
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                />
                <InputForm
                  textLabel="Confirm Password"
                  htmlFor="confirmPassword"
                  placeholder="Confirm your password"
                  type="password"
                  id="confirmPassword"
                />
                <Button variant="success" type="submit" className="w-100">
                  Register
                </Button>
                <p className="text-center mt-3">
                  Already have an Account? <Link to="/login">Login</Link>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegisterPage;