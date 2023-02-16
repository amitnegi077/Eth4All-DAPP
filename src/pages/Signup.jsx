import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container } from "@mui/material";

const Signup = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // singnup api
    setSubmitting(false);
  };

  return (
    <Container maxWidth="sm">
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Field
              as={TextField}
              name="firstName"
              label="First Name"
              fullWidth
              margin="normal"
              error={Boolean(errors.firstName)}
              helperText={<ErrorMessage name="firstName" />}
            />
            <Field
              as={TextField}
              name="lastName"
              label="Last Name"
              fullWidth
              margin="normal"
              error={Boolean(errors.lastName)}
              helperText={<ErrorMessage name="lastName" />}
            />
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              margin="normal"
              error={Boolean(errors.email)}
              helperText={<ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              error={Boolean(errors.password)}
              helperText={<ErrorMessage name="password" />}
            />
            <Field
              as={TextField}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              error={Boolean(errors.confirmPassword)}
              helperText={<ErrorMessage name="confirmPassword" />}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Signup;
