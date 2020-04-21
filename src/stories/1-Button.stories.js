import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Validated = () => <Button>Hello, World!</Button> 

Validated.story = {
    parameters: {
       design: {
          type: 'figma',
          url: 'https://www.figma.com/file/8RQyaZMzX69cDcejSonfEb/Projet-Hetic-SCHOOL?node-id=0%3A1'
       }
    }
 }
