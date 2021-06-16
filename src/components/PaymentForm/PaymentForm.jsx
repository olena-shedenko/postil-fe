import React from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PaymentImput from './PaymentImput';
import './CartForm.scss';
import { useEffect } from 'react';

// import { CREATE_USER } from '../../store/user/types';
// import { TOGGLE_FORM } from '../../store/form/types';
// import { SET_ITEMS } from '../../store/items/types';

export default function PaymentForm(props) {
  const { history } = props;
  // const payBy = document.getElementsByClassName('pay_by');
  // const payBy = document.getElementsByClassName('pay_by');
  // const dispatch = useDispatch();
  // console.log(payBy);
  // const items = useSelector((state) => state.items.data);
  // const cardValidityPeriod =
  //   document.getElementsByClassName('cardValidityPeriod');

  const submitForm = (values) => {
    const payBy = document.getElementsByClassName('pay_by');

    if(payBy[0].classList[1] === "active"){
      const newPaymentMethod = {
        customId: values.cardNo,
        name: values.cardHolder,
        paymentProcessor: values.cardHolder,
        ...values,
      };
      console.log(newPaymentMethod);
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
        .then((values) => {
          history.push('/thank_you_screen');
        })
        .catch((err) => {});
    }else if(payBy[1].classList[1] === "active"){
      const newPaymentMethod = {
        customId: "unknown",
        name: "unknown",
        paymentProcessor: "courier",
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
        .then((values) => {
          history.push('/thank_you_screen');
        })
        .catch((err) => {});
    }
  };

  const validationFormSchema = Yup.object().shape({
    cardNo: Yup.number().required('Required').min(16, 'Too Short!'),
    cardValidityPeriod: Yup.string().required(null).min(5, '-5').max(5, '5'),
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
                    maxlength="19"
                  />
                ) : (
                  <PaymentImput
                    name="cardNo"
                    type="text"
                    label="0000 0000 0000 0000"
                    className="cardNo"
                    maxlength="19"
                  />
                )}
                {formikProps.values.cardValidityPeriod === '' &&
                formikProps.touched.cardValidityPeriod ? (
                  <PaymentImput
                    name="cardValidityPeriod"
                    type="text"
                    label="MM/YY"
                    className="cardValidityPeriod input-error"
                    maxlength="5"
                  />
                ) : (
                  <PaymentImput
                    name="cardValidityPeriod"
                    type="text"
                    label="MM/YY"
                    className="cardValidityPeriod"
                    maxlength="5"
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
