import React from 'react';
import { Formik, Form } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PaymentImput from './PaymentImput';
import './CartForm.scss';

// import { CREATE_USER } from '../../store/user/types';
// import { TOGGLE_FORM } from '../../store/form/types';
// import { SET_ITEMS } from '../../store/items/types';

export default function PaymentForm() {
  // const dispatch = useDispatch();
  // const items = useSelector((state) => state.items.data);
  const cardValidityPeriod =
    document.getElementsByClassName('cardValidityPeriod');

  // const submitForm = (values) => {
  //     dispatch({type:TOGGLE_FORM,payload:false})
  //     localStorage.removeItem("Cart")
  //     dispatch({type:CREATE_USER,payload:values})
  //     const newArr = items.map(el => {
  //         el.inCart = false
  //         return el
  //     })
  //     dispatch({type:SET_ITEMS,payload:newArr})
  // }

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
        // onSubmit={submitForm}
        validationSchema={validationFormSchema}
      >
        {(formikProps) => {
          for (let index = 0; index < cardValidityPeriod.length; index += 1) {
            cardValidityPeriod[index].addEventListener('keydown', (e) => {
              if (
                formikProps.values.cardValidityPeriod.length === 1 &&
                e.key !== 'Backspace'
              ) {
                // eslint-disable-next-line no-param-reassign
                formikProps.values.cardValidityPeriod = `${formikProps.values.cardValidityPeriod}/`;
              } else if (e.key === 'Backspace') {
                // eslint-disable-next-line no-param-reassign
                formikProps.values.cardValidityPeriod =
                  // eslint-disable-next-line no-self-assign
                  formikProps.values.cardValidityPeriod;
              }
            });
          }

          //   cardNo.addEventListener('onKeyDown', (e) => {
          //     if (formikProps.values.cardNo.length === 4) {
          //       formikProps.values.cardNo = `${formikProps.values.cardNo}    `;
          //     } else if (e.key === 'Backspace') {
          //       formikProps.values.cardNo = formikProps.values.cardNo;
          //     }
          //     if (formikProps.values.cardNo.length === 12) {
          //       formikProps.values.cardNo = `${formikProps.values.cardNo}    `;
          //     } else if (formikProps.values.cardNo.length === 20) {
          //       formikProps.values.cardNo = `${formikProps.values.cardNo}    `;
          //     }
          //   });

          return (
            <Form className="form">
              <div className="card-info">
                {formikProps.values.cardNo === '' &&
                formikProps.touched.cardNo ? (
                  <PaymentImput
                    name="cardNo"
                    type="text"
                    label="0000    0000    0000    0000"
                    className="cardNo error"
                    maxlength="19"
                    // onKeyDown={(e) => {
                    //   if (formikProps.values.cardNo.length === 4 && e.keyCode === 8) {
                    //     console.log(2);
                    //     formikProps.values.cardNo = `${formikProps.values.cardNo}    `;
                    //   } else if (e.keyCode === 8) {
                    //     formikProps.values.cardNo = formikProps.values.cardNo;
                    //   }
                    // }}
                  />
                ) : (
                  <PaymentImput
                    name="cardNo"
                    type="text"
                    label="0000    0000    0000    0000"
                    className="cardNo"
                    maxlength="19"
                    // onKeyDown={(e) => {
                    //   if (formikProps.values.cardNo.length === 4) {
                    //     console.log(2);
                    //     formikProps.values.cardNo = `${formikProps.values.cardNo}    `;
                    //   } else if (e.keyCode === 8) {
                    //     formikProps.values.cardNo = formikProps.values.cardNo;
                    //   }
                    // }}
                  />
                )}
                {formikProps.values.cardValidityPeriod === '' &&
                formikProps.touched.cardValidityPeriod ? (
                  <PaymentImput
                    name="cardValidityPeriod"
                    type="text"
                    label="MM/YY"
                    className="cardValidityPeriod error"
                    maxlength="5"
                    // onKeyDown={(e) => {
                    //   if (formikProps.values.cardValidityPeriod.length === 2) {
                    //       console.log(3);
                    //     formikProps.values.cardValidityPeriod = `${formikProps.values.cardValidityPeriod}/`;
                    //   }
                    // }}
                  />
                ) : (
                  <PaymentImput
                    name="cardValidityPeriod"
                    type="text"
                    label="MM/YY"
                    className="cardValidityPeriod"
                    maxlength="5"
                    // onKeyDown={(e) => {
                    //   if (formikProps.values.cardValidityPeriod.length === 2) {
                    //     console.log(formikProps.values);
                    //     formikProps.values.cardValidityPeriod = `${formikProps.values.cardValidityPeriod}/`;
                    //   }
                    // }}
                  />
                )}
                {formikProps.values.CVV === '' && formikProps.touched.CVV ? (
                  <PaymentImput
                    name="CVV"
                    type="text"
                    label="CVV"
                    className="CVV error"
                    maxlength="3"
                    // onKeyDown={(e) => {
                    //   console.log(e);
                    // }}
                  />
                ) : (
                  <PaymentImput
                    name="CVV"
                    type="text"
                    label="CVV"
                    className="CVV"
                    maxlength="3"
                    // onKeyDown={(e) => {
                    //   console.log(e);
                    // }}
                  />
                )}
              </div>
              {formikProps.values.cardHolder === '' &&
              formikProps.touched.cardHolder ? (
                <PaymentImput
                  name="cardHolder"
                  type="text"
                  label="Card Holder Name"
                  className="cardHolder error"
                  //   onKeyDown={(e) => {
                  //     console.log(e);
                  //   }}
                />
              ) : (
                <PaymentImput
                  name="cardHolder"
                  type="text"
                  label="Card Holder Name"
                  className="cardHolder"
                  //   onKeyDown={(e) => {
                  //     console.log(e);
                  //   }}
                />
              )}
              {/* <div>
                                <button type="submit" className="submit">Checkout</button>
                            </div> */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
