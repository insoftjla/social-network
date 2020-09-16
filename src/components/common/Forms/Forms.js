import {Button, Form, FormControl} from "react-bootstrap";
import React from "react";

export let SearchForm = (props) => {
    return (
        <Form inline>
            <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
            />
            <Button variant="light" >Search</Button>
        </Form>
    );
}