import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RadioButtonsGroup from './RadioButtonsGroup';

const TestBtns = {
  single: 'single',
  double: 'double',
  queen: 'queen',
};

describe('RadioButtonsGroup', () => {
  it('should render properly', () => {
    const onChange = jest.fn();
    render(
      <RadioButtonsGroup values={TestBtns} name="sizes" onChange={onChange} />
    );
    const radioBtns = screen.getAllByRole('radio');
    radioBtns.forEach((radioBtn) => expect(radioBtn).toBeVisible());
  });

  it('should call callback', () => {
    const onChange = jest.fn();
    render(
      <RadioButtonsGroup values={TestBtns} onChange={onChange} name="sizes" />
    );
    const radioBtns = screen.getAllByRole('radio');
    fireEvent.click(radioBtns[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('single');
  });
});
