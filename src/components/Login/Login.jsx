import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  let obj = {
     name1: "Bobur",
     pass: "11111",
     gmail : "bobur@gmail.com" 
  }




const navigateFunc = () => {
  if(name === obj.name1 && email === obj.gmail && password === obj.pass){
    navigate("/crud")
    alert("Successfullu logined")
  }
}


  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={7}>
            <Form>
                <h1>Login page</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  onChange={(e) => setName(e.target.value)}
                />
                { name !== obj.name1 ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                {email !== obj.gmail ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <br />
                <label>You can use only numbers</label>
                <Form.Control
                  type="number"
                  placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {password !== obj.pass && password.length !== 5  ? (
                  <p style={{ color: "red" }}>Invalid</p>
                ) : (
                  <p style={{ color: "green" }}>Success</p>
                )}
              </Form.Group>
             
              {name.length > 4 && password.length > 4 && email.length > 4 ? (
                <Button onClick={navigateFunc} style={{ width: "100%" }} variant="primary">
                  Submit
                </Button>
              ) : (
                <Button
                  onClick={navigateFunc}
                  style={{ width: "100%" }}
                  variant="danger"
                >
                  Submit
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
