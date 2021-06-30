import React from 'react';
import { Formik, Form } from 'formik';
import { render, screen } from '@testing-library/react';
import ShippingInput from '../shippingComponents/ShippingInput';

describe('Shipping input test', () => {
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
        {() => {
          return (
            <Form>
              <ShippingInput name="input" />
            </Form>
          );
        }}
      </Formik>
    );
    const shippingInput = screen.getByTestId('shipping-input');
    expect(shippingInput).toBeVisible();
  });
});
