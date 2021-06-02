import React from 'react';
import { Formik, Form } from 'formik';
import { render, screen } from '@testing-library/react';
import Input from '../modalComponents/Input';

describe('account modal Input test', () => {
  it('smoke', () => {
    render(
      <Formik
        initialValues={{
          loginOrEmail: '',
          password: '',
          accept: false,
        }}
        onSubmit={jest.fn()}
      >
        {() => {
          return (
            <Form>
              <Input />
              <Button type="submit" />
            </Form>
          );
        }}
      </Formik>
    );
    const input = screen.getByTestId('logo');
    expect(input).toBeVisible();
  });
});
