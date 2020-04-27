import React from 'react';
import Button from './Button';

export const Small = () => (
  <Button size="small" type="primary" onClick={ onClickButton } dataTestid="small-button">Small</Button> 
);
export const Medium = () => (
  <Button size="medium"  type="primary" onClick={ onClickButton} dataTestid="medium-button">Medium</Button> 
);
export const Large = () => (
  <Button size="large" type="primary" onClick={ onClickButton } dataTestid="large-button" >Large</Button> 
);

const onClickButton = (e) => {
  e.preventDefault();
  console.log('okok')
}
