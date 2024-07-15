import { MouseEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LOGIN_FORM_NAMES } from "./types";

import { LoginFormContainer, Title, InputsContainer } from "./styles";

function LoginForm() {
  const validator = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string()
      .required("The field is mandatory")
      .email("Must be email format"),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.string()
      .required("The field is mandatory")
      .min(5, "The password too short")
      .max(15, "The password too long"),
  });

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: "",
      [LOGIN_FORM_NAMES.PASSWORD]: "",
    },

    validationSchema: validator,
    validateOnMount: true,
    validateOnChange: false,

    onSubmit: (values, helpers) => {
      console.log("Submitted.");
      console.log(values);
      console.log(helpers);
    },
  });

  const login = (event: MouseEvent): void => {
    event.preventDefault();
    console.log("User logged in succesfully");
  };

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_NAMES.EMAIL}
          type="text"
          placeholder="Enter your email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />

        <Input
          id="password-id"
          name={LOGIN_FORM_NAMES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </InputsContainer>
      <Button disabled={formik.isSubmitting} name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;
