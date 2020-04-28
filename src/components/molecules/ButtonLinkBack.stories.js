import React from 'react';
import ButtonLinkBack from './ButtonLinkBack';

export const ButtonLinkBackDefault = ({width, height}) => (
  <ButtonLinkBack title="Retour"  width={width}  height={height} onClick={onClickButton}/>
);


const onClickButton = (e) => {
  e.preventDefault();
  alert("Hello button");
};