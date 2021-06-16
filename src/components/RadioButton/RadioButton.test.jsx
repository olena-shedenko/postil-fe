import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  it('should render properly', () => {
    const onChange = jest.fn();
    render(
      <RadioButton
        value="Some value"
        checked
        text="Some text"
        name="Some name"
        onChange={onChange}
      />
    );
    const radioBtns = screen.getAllByRole('radio');
    radioBtns.forEach((radioBtn) => expect(radioBtn).toBeVisible());
  });
  it('should render colored button', () => {
    const onChange = jest.fn();
    render(
      <RadioButton
        value="red"
        checked
        text="red"
        name="color"
        onChange={onChange}
        isColored
      />
    );
    const coloredBtn = screen.getByDisplayValue('red');
    expect(coloredBtn).toBeVisible();
  });
  it('should call callback', () => {
    const onChange = jest.fn();
    render(
      <>
        <RadioButton
          value="one"
          checked
          text="one"
          name="one"
          onChange={onChange}
        />
        <RadioButton
          value="two"
          checked={false}
          text="two"
          name="two"
          onChange={onChange}
        />
      </>
    );

    const radioBtn1 = screen.getByDisplayValue('one');
    const radioBtn2 = screen.getByDisplayValue('two');
    expect(radioBtn1).toBeChecked();
    expect(radioBtn2).not.toBeChecked();

    fireEvent.click(radioBtn2, {
      target: {
        value: 'two',
      },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('two');
  });
});
