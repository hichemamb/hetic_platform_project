import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { withDesign } from 'storybook-addon-designs';
import Button from './Button';


export default {
  title: 'Button',
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

export const Primary = () => (
  <Button type="primary" size="large" onClick={ onClick }> Validated</Button>
);

const onClick = (e) => {
  e.preventDefault();
  alert('Hello button')
}

// ButtonDefault.story = {
//     name: 'Button basic',
//     parameters: {
//        design: {
//           type: 'figma',
//           url: 'https://www.figma.com/file/8RQyaZMzX69cDcejSonfEb/Projet-Hetic-SCHOOL?node-id=12%3A128'
//        }
//     }
//  }
