import React from 'react';
import Button from './Button';

export const Small = ({onClick}) => (
  <Button 
    size="small" 
    type="primary" 
    onClick={ onClick } 
    testid="button-small"> Small
  </Button> 
);
export const Medium = ({onClick}) => (
  <Button 
    size="medium"  
    type="primary" 
    onClick={ onClick} 
    testid="button-medium"> Medium
  </Button> 
);
export const Large = ({onClick}) => (
  <Button 
    size="large" 
    type="primary" 
    onClick={ onClick } 
    testid="button-large" > Large
  </Button> 
);
