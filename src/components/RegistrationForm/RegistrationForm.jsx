/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Form } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import MyInput from './MyInput';
import './RegistrationForm.scss';

// import { CREATE_USER } from '../../store/user/types';
// import { TOGGLE_FORM } from '../../store/form/types';
// import { SET_ITEMS } from '../../store/items/types';

export default function RegistrationForm() {
  //   const dispatch = useDispatch();
  //   const items = useSelector((state) => state.items.items.data);

  const submitForm = () => {
    console.log(1);
    // dispatch({ type: TOGGLE_FORM, payload: false });
    // localStorage.removeItem('Cart');
    // dispatch({ type: CREATE_USER, payload: values });
    // const newArr = items.map((el) => {
    //   el.inCart = false;
    //   return el;
    // });
    // dispatch({ type: SET_ITEMS, payload: newArr });
  };

  const validationFormSchema = Yup.object().shape({
    firstName: Yup.string().required('Required').min(2, 'Too Short!'),
    lastName: Yup.string().required('Required').min(3, 'Too Short!'),
    address: Yup.string().required('Required'),
    phoneNumber: Yup.number().required('Required').min(6, 'Too Short!'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          address: '',
          address2: '',
          country: '',
          city: '',
          postalCode: '',
          phoneNumber: '',
        }}
        onSubmit={submitForm}
        validationSchema={validationFormSchema}
      >
        {(formikProps) => {
          console.log(formikProps);
          return (
            <Form className="delivery-page__form">
              <div className="sss">
                <MyInput name="firstName" type="text" label="First Name" />
                <MyInput name="lastName" type="text" label="Last Name" />
              </div>
              <MyInput name="address" type="text" label="Address" />
              <MyInput name="address2" type="text" label="Address 2" />
              <div className="sss">
                <MyInput name="country" type="text" label="Country" />
                <MyInput name="city" type="text" label="City" />
              </div>
              <div className="sss">
                <MyInput
                  name="postalCode"
                  type="text"
                  label="Zip/Postal Code"
                />
                <MyInput name="phoneNumber" type="text" label="Phone Number" />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
