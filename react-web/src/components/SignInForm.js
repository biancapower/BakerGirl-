import React from 'react';
import { Container, Button, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';


function SignInForm({ onSignIn }) {
  return (
    <Container>
      <Col>
        <Row className="mt-5">
          <Col>
            <h1>Sign In</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Form onSubmit={ onSignIn }>
              <FormGroup>
                <Label>
                  Email
                </Label>
                <Input type="email" name="email"/>
              </FormGroup>              

              <FormGroup>              
                <Label>
                  Password
                </Label>
                <Input type="password" name="password"/>
              </FormGroup>              

              <div className="text-center mt-5">
                <Button type="submit">
                  Sign In
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}

export default SignInForm;
