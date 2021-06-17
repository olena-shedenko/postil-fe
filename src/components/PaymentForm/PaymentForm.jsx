import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import PaymentImput from './PaymentImput';
import './CartForm.scss';
// import {
//   SUCCESS_REMOVE_PRODUCT_FROM_CART,
//   CLEAR_CART,
// } from '../../store/types';
import { deleteCart } from '../../store/operations';

export default function PaymentForm(props) {
  const { history } = props;
  const dispatch = useDispatch();

  const submitForm = (values) => {
    const payBy = document.getElementsByClassName('pay_by');

    if (payBy[0].classList[1] === 'active') {
      const newPaymentMethod = {
        customId: values.cardNo,
        name: values.cardHolder,
        paymentProcessor: values.cardHolder,
        ...values,
      };
      const jwt = sessionStorage.getItem('token');
      axios
        .post('https://postil-bedding.herokuapp.com/api/payment-methods', {
          newPaymentMethod,
          headers: {
            Authorization: jwt,
          },
        })
        .then(() => {
          history.push('/thank_you_screen');
          dispatch(deleteCart());
          localStorage.clear('bag');
        })
        .catch(() => {
          history.push('/thank_you_screen');
          dispatch(deleteCart());
          localStorage.clear('bag');
        });
    } else if (payBy[1].classList[1] === 'active') {
      const newPaymentMethod = {
        customId: 'unknown',
        name: 'unknown',
        paymentProcessor: 'courier',
      };
      const jwt = sessionStorage.getItem('token');
      axios
        .post(
          'https://postil-bedding.herokuapp.com/api/payment-methods',
          newPaymentMethod,
          {
            headers: {
              Authorization: jwt,
            },
          }
        )
        .then(() => {
          history.push('/thank_you_screen');
          dispatch(deleteCart());
          localStorage.clear('bag');
        })
        .catch(() => {
          history.push('/thank_you_screen');
          dispatch(deleteCart());
          localStorage.clear('bag');
        });
    }
  };

  const validationFormSchema = Yup.object().shape({
    cardNo: Yup.number().required('Required').min(16, 'Too Short!'),
    cardValidityPeriod: Yup.string().required(null).min(4, '-5').max(4, '5'),
    CVV: Yup.number().required('Required').min(3, 'Too Short!'),
    cardHolder: Yup.string().required('Required'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          cardNo: '',
          cardValidityPeriod: '',
          CVV: '',
          cardHolder: '',
        }}
        onSubmit={submitForm}
        validationSchema={validationFormSchema}
      >
        {(formikProps) => {
          return (
            <Form className="form" id="payment-form">
              <div className="card-info">
                {formikProps.values.cardNo === '' &&
                formikProps.touched.cardNo ? (
                  <PaymentImput
                    name="cardNo"
                    type="text"
                    label="0000 0000 0000 0000"
                    className="cardNo input-error"
                    maxlength="16"
                  />
                ) : (
                  <PaymentImput
                    name="cardNo"
                    type="text"
                    label="0000 0000 0000 0000"
                    className="cardNo"
                    maxlength="16"
                  />
                )}
                {formikProps.values.cardValidityPeriod === '' &&
                formikProps.touched.cardValidityPeriod ? (
                  <PaymentImput
                    name="cardValidityPeriod"
                    type="text"
                    label="MM/YY"
                    className="cardValidityPeriod input-error"
                    maxlength="4"
                  />
                ) : (
                  <PaymentImput
                    name="cardValidityPeriod"
                    type="text"
                    label="MM/YY"
                    className="cardValidityPeriod"
                    maxlength="4"
                  />
                )}
                {formikProps.values.CVV === '' && formikProps.touched.CVV ? (
                  <PaymentImput
                    name="CVV"
                    type="text"
                    label="CVV"
                    className="CVV input-error"
                    maxlength="3"
                  />
                ) : (
                  <PaymentImput
                    name="CVV"
                    type="text"
                    label="CVV"
                    className="CVV"
                    maxlength="3"
                  />
                )}
              </div>
              {formikProps.values.cardHolder === '' &&
              formikProps.touched.cardHolder ? (
                <PaymentImput
                  name="cardHolder"
                  type="text"
                  label="Card Holder Name"
                  className="cardHolder input-error"
                />
              ) : (
                <PaymentImput
                  name="cardHolder"
                  type="text"
                  label="Card Holder Name"
                  className="cardHolder"
                />
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
