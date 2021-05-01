import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Input from "./Input";

const validationFormSchema = Yup.object().shape({
  name: Yup.string().required("This is necessary field"),
  password: Yup.number().required("This is necessary field"),
  password_conf: Yup.number().required("This is necessary field"),
  email: Yup.string()
    .email("Invalid email")
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("This is necessary field"),
});

const AccountModal = () => {
  const submitForm = () => {};

  return (
    <>
      <h1 className="items-wrapper__content__form__header">
        Checkout your Order
      </h1>

      <Formik
        initialValues={{
          name: "",
          password: "",
          password_conf: "",
          email: "name@domain.com",
        }}
        onSubmit={submitForm}
        validationSchema={validationFormSchema}
      >
        {() => {
          return (
            <Form>
              <Input name="name" type="text" label="Name" />
              <Input name="email" type="text" label="Email" />
              <Input name="password" type="password" label="Password" />
              <Input
                name="password-conf"
                type="password"
                label="Your Address"
              />
              <Input name="phoneNumber" type="text" label="Confirm Password" />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default AccountModal;
