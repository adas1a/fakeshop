import '../../../App.css';
import {Modal, Button, Form, Nav} from 'react-bootstrap';
import React from 'react';
import useModal from "../../../hooks/useModal";

 const Login = () => {
     const [show, open, close] = useModal();

    return (
        <React.Fragment>

            <Nav.Link onClick={open} className="login">Log in</Nav.Link>

            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in to your account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={close}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}
export default Login;