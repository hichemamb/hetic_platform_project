import React from 'react';
import Button from './Button';

export const Small = () => (
  <Button size="small" onClick={ onClickButton } testid="primary-button"> Primary </Button>
);
export const Medium = () => (
  <Button type="secondary" size="medium" onClick={ onClickButton }> Secondary </Button>
);
export const Large = () => (
  <Button type="tertiary" size="large" onClick={ onClickButton }> Tertiary </Button>
);

const onClickButton = (e) => {
  e.preventDefault();
  alert('Hello button')
}
