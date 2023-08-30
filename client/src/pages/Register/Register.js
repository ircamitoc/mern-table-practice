import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./register.css";
import { Row, Form } from "react-bootstrap";
import Select from "react-select";

const Register = () => {
  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    sex: "",
    location: "",
  });

  // status options
  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  return (
    <>
      <div className="container">
        <br />
        <h2 className="text-center mt-1">Register Your Details</h2>
        <br />
        <Card className="shadow mt-3 p-3">
          <div className="profile_div text-center">
            <img src="./kirby.jpg" alt="img" />
          </div>
          <br />
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="fname" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lname" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" name="lname" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Sex</Form.Label>
                <Form.Check // prettier-ignore
                  type={"radio"}
                  label={`Male`}
                  name="sex"
                  value={`Male`}
                />
                <Form.Check // prettier-ignore
                  type={"radio"}
                  label={`Female`}
                  name="sex"
                  value={`Female`}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Status</Form.Label>
                <Select options={options} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Add Profile Picture</Form.Label>
                <Form.Control type="file" name="user_profile" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" name="location" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Register;
