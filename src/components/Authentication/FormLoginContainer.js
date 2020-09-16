import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Forms/renderField";
import {maxLength10, required} from "../../utils/validator/validator";
import {Alert, Button, Form} from "react-bootstrap";

const FormLoginContainer = (props) => {

    const onLogin = (data) => {
        props.login(data.username, data.password, data.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onLogin}/>
        </div>
    );
}

const FormLogin = (props) => {

    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId="formBasicLogin">
                <Form.Label>Username</Form.Label>
                <Form.Control as={Field}
                              type="text"
                              component={Input}
                              name={"username"}
                              placeholder={"Please enter Username"}
                              validate={[required, maxLength10]}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control as={Field}
                              type={"password"}
                              component={Input}
                              name={"password"}
                              placeholder={"Please enter password"}
                              validate={[required, maxLength10]}/>
            </Form.Group>

            {
                props.error && <Form.Group controlId="formBasicError">
                    <Alert variant="danger">
                        {props.error}
                    </Alert>
                </Form.Group>
            }


            <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="Remember me"
                />
            </Form.Group>

            <Button
                className="float-right"
                variant="primary"
                type="submit">
                Sign in
            </Button>
        </Form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(FormLogin);


export default FormLoginContainer;