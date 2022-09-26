import { sendPasswordResetEmail } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../config/firebaseConfig";
import "./forget.css";
export default function ForgotPassword() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(userEmail));
    setIsSubmit(true);
    setError("");
    sendPasswordResetEmail(auth, userEmail, { url: "https://fscxperts.web.app/" })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit && error) {
      console.log(userEmail);
    }
  });
  const validate = (email) => {
    const errors = {};
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!email) {
      errors.email = "Email is required";
    } else if (!regexemail.test(email)) {
      errors.email = "This is not a valid Email";
    }
    return errors;
  };
  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit && !error ? (
        <Alert variant="success" className="p-2 rounded mt-0 h5">
          Email Sent Successfully
        </Alert>
      ) : (
        error && (
          <Alert variant="danger" className="p-2 rounded mt-0 h5">
            {error}
          </Alert>
        )
      )}
      <Form className="w-100">
        <Row>
          <Col className="p-1">
            <FormControl
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="mb-2 Input inputfp"
              id="inlineFormInputGroup"
              autocomplete="off"
              placeholder="Email"
              required
            />
            <p className="text-danger mb-0" style={{ fontSize: "12px" }}>
              {formErrors.email}
            </p>
          </Col>
        </Row>
        <Button className="SubmitButton" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <div className="Nlink MutedLink">
        Already have an account ?
        <Link to="/login" className="Nlink BoldLink" >
          Signin
        </Link>
      </div>
    </>
  );
}
