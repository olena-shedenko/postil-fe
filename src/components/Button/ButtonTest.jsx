import React from 'react';
import Button from './Button';

const ButtonTest = () => {
  return (
    <div>
      <Button
        onClick={() => {
          console.log('Hello world!');
        }}
        type="button"
        backgroundColor="red"
        className="btn btn2"
      >
        PRESS ME
      </Button>
    </div>
  );
};

export default ButtonTest;
