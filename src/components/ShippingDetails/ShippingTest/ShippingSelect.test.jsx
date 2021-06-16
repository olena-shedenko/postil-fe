import React from 'react';
import { Formik, Form } from 'formik';
import { render, screen } from '@testing-library/react';
import ShippingSelect from '../shippingComponents/ShippingSelect';
const testOptions = [
  { key: 'Test', value: '' },
  { key: 'test1', value: 'test1' },
  { key: 'test2', value: 'test2' },
  { key: 'test3', value: 'test3' },
];
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
              <ShippingSelect options={testOptions} name="select" />
            </Form>
          );
        }}
      </Formik>
    );
    const shippingInput = screen.getByTestId('shipping-select');
    expect(shippingInput).toBeVisible();
  });
});
