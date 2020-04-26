import React from 'react';
import Button from './Button';

export const Small = () => (
  <Button size="small" type="primary" onClick={ onClickButton } testid="primary-button">Medium</Button> 
);
export const Medium = () => (
  <Button size="medium"  type="primary" onClick={ onClickButton} >Medium</Button> 
);
export const Large = () => (
  <Button size="large" type="primary" onClick={ onClickButton } >Medium</Button> 
);

const onClickButton = (e) => {
  e.preventDefault();
  alert('Hello button')
}
