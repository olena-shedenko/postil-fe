import React from 'react';
import { render, screen } from '@testing-library/react';
import ShippingRadio from '../shippingComponents/ShippingRadio';
import { Formik, Field } from 'formik';

describe('account modal Checkbox test', () => {
  it('smoke', () => {
    render(
      <Formik
        initialValues={{
          name: '',
          surname: '',
          address: '',
          secondAddress: '',
          city: '',
          zip: '',
          phone: '',
        }}
        onSubmit={jest.fn()}
      >
        <Field
          component={ShippingRadio}
          name="field test"
          id="field test"
          onChange={() => {
            console.log('test');
          }}
        />
      </Formik>
    );
    const shippingRadio = screen.getByTestId('shipping-radio');
    expect(shippingRadio).toBeVisible();
  });
});
