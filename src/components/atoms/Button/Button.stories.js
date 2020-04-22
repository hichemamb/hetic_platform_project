import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/8RQyaZMzX69cDcejSonfEb/Projet-Hetic-SCHOOL'
    }
  },
  notes: {
    disabled: true
  }
};


export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

const onClick = (e) => {
  e.preventDefault();
  alert('Hello button')
}
export const ButtonBasic = () => <Button onClick={ onClick }>Validated</Button> 

ButtonBasic.story = {
    name: 'Button basic',
    parameters: {
       design: {
          type: 'figma',
          url: 'https://www.figma.com/file/8RQyaZMzX69cDcejSonfEb/Projet-Hetic-SCHOOL?node-id=12%3A128'
       }
    }
 }
