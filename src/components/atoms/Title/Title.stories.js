import React from 'react';
import Title from './Title';

export const TitleDefault = () => (
  <Title
    testid="title-default"
    />
);
export const TitleMedium = () => (
  <Title
    size="medium"
    title="He Got the game"
    testid="title-medium"
    />
);
export const TitleSmall = () => (
  <Title 
    size="small"
    title="He Got the game"
    testid="title-small"
    />
);
export const TitleWithLine = () => (
  <Title 
    size="small"
    title="He Got the game"
    testid="title-line"
    showLine="block"
    />
);