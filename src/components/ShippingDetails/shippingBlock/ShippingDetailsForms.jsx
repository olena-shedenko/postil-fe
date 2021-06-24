import React, { useState } from 'react';
import '../ShippingDetails.scss';
import { Formik, Form, Field } from 'formik';
import ShippingInput from '../shippingComponents/ShippingInput';
import validationDeliveryFormSchema from './ValidationSchema';
import ShippingRadio from '../shippingComponents/ShippingRadio';
import ShippingBack from '../../BagSummary/ShippingBack';
import ShippingSelect from '../shippingComponents/ShippingSelect';

const selectOptions = [
  { key: 'Country', value: '' },
  { key: 'Ukraine', value: 'Ukraine' },
  { key: 'Poland', value: 'Poland' },
  { key: 'Czech', value: 'Czech' },
];

const ShippingDetailsForms = () => {
  const [free, setFree] = useState(false);
  const [paid, setPaid] = useState(false);
  function selectFree() {
    setFree(!free);
    setPaid(false);
  }
  function selectPaid() {
    setPaid(!paid);
    setFree(false);
  }
  const onSubmit = (values) => {
    sessionStorage.setItem('shipping-details', JSON.stringify(values));
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          address: '',
          secondAddress: '',
          country: '',
          city: '',
          zip: '',
          phone: '',
        }}
        onSubmit={onSubmit}
        validationSchema={validationDeliveryFormSchema}
      >
        {() => {
          return (
            <div>
              <p className="title">SHIPPING DETAILS</p>
              <Form className="shipping">
                <ShippingInput
                  classname="shipping--block__input"
                  placeholder="First Name"
                  name="name"
                  type="text"
                />
                <ShippingInput
                  classname="shipping--block__input"
                  placeholder="Last Name"
                  name="surname"
                  type="text"
                />
                <ShippingInput
                  classname="shipping--block__input"
                  placeholder="Address"
                  name="address"
                  type="text"
                  width="39.2vw"
                />
                <ShippingInput
                  classname="shipping--block__input"
                  placeholder="Address 2"
                  name="secondAddress"
                  type="text"
                  width="39.2vw"
                />
                <ShippingSelect
                  classname="shipping--block__select"
                  name="country"
                  options={selectOptions}
                />
                <ShippingInput
                  classname="shipping--block__input"
                  placeholder="City"
                  name="city"
                  type="text"
                />
                <ShippingInput
                  classname="shipping--block__input"
                  placeholder="Zip/Postal Code"
                  name="zip"
                  type="text"
                />
                <ShippingInput
                  classname="shipping--block__input"
                  placeholder="Phone Number"
                  name="phone"
                  type="tel"
                />
              </Form>
              <Form className="checkboxes">
                <Field
                  component={ShippingRadio}
                  name="Delivery"
                  id="Free Delivery"
                  text="Free Shipping"
                  span="Between 2-5 working days"
                  onChange={selectFree}
                  labelClass={
                    free ? 'checkboxes--item selected' : 'checkboxes--item'
                  }
                />
                <Field
                  component={ShippingRadio}
                  name="Delivery"
                  id="Paid Delivery"
                  text="Next Day Delivery - 10$"
                  span="24 hours from checkout"
                  onChange={selectPaid}
                  labelClass={
                    paid ? 'checkboxes--item selected' : 'checkboxes--item'
                  }
                />
              </Form>
            </div>
          );
        }}
      </Formik>
      <ShippingBack />
    </div>
  );
};

export default ShippingDetailsForms;
