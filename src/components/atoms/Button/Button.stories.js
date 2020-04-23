import React from 'react';
import Button from './Button';

export const Primary = () => (
  <Button size="small" onClick={ onClickButton }> Primary </Button>
);
export const Secondary = () => (
  <Button type="secondary" size="medium" onClick={ onClickButton }> Secondary </Button>
);
export const Tertiary = () => (
  <Button type="tertiary" size="large" onClick={ onClickButton }> Tertiary </Button>
);

const onClickButton = (e) => {
  e.preventDefault();
  alert('Hello button')
}
