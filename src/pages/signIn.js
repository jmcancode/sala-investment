import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function SignIn() {
  return (
    <>
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#c60000" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "45%"
          }}
        >
          <Row xs={1} md={1} lg={1}>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Control type="text" placeholder="username" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button variant="outline-light" type="submit">
                  Enter
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
