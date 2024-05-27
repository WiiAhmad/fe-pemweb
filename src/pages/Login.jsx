import InputForm from "../components/InputForm";
import NavbarComp from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import FormCheck from "react-bootstrap/FormCheck";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <NavbarComp />
      <Container className="mt-5">
        <Row className="py-5">
          <Col md={6} className="mx-auto">
            <div className="shadow p-5 rounded">
              <h2 className="text-center mb-4">Selamat Datang !</h2>
              <h4 className="text-center mb-4">Masuk</h4>
              <p className="text-center mb-4">Lorem Ipsum is simply</p>
              <Form>
                <InputForm
                  textLabel="User name"
                  htmlFor="username"
                  placeholder="Enter your user name"
                  type="text"
                  id="username"
                />
                <InputForm
                  textLabel="Password"
                  htmlFor="password"
                  placeholder="Enter your Password"
                  type="password"
                  id="password"
                />
                <Form.Group
                  controlId="formBasicCheckbox"
                  className="d-flex justify-content-between align-items-center"
                >
                  <FormCheck type="checkbox" label="Remember me" />
                  <a href="#" className="text-right">
                    Forgot Password?
                  </a>
                </Form.Group>
                <Button variant="success" type="submit" className="w-100">
                  Login
                </Button>
                <p className="text-center mt-3">
                  Don't have an Account ? <Link to="/register">Register</Link>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
