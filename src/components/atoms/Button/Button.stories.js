import React from 'react';
import Button from './Button';

export const Primary = () => (
  <Button size="small" onClick={ onClickButton }> Start </Button>
);

const onClickButton = (e) => {
  e.preventDefault();
  alert('Hello button')
}
