import React from 'react';
import { Formik, Form } from 'formik';
import { render, screen } from '@testing-library/react';
import Input from '../modalComponents/Input';
import Button from '../../Button/Button';

describe('account modal Input test', () => {
  it('shold render', () => {
    render(
      <Formik onSubmit={jest.fn()}>
        {() => {
          return (
            <Form>
              <Input placeholder="name" type="text" name="name" />
              <Button type="submit" />
            </Form>
          );
        }}
      </Formik>
    );
    const input = screen.getByRole('input');
    expect(input).toBeVisible();
  });
});
