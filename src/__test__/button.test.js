import React from 'react';
import { render } from '@testing-library/react';
import { Small, Medium, Large } from '../components/atoms/Button/Button.stories';
import Button from '../components/atoms/Button/Button.js';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

// Test of Button stories
describe('Renders Button component', () => {
    test('with a default behavior', () => {
    const { container } = render(<Small />);
    expect(container).toBeTruthy();
    });
    test('with a medium size', () => {
    const { container } = render(<Medium />);
    expect(container).toBeTruthy();
    });
    test('with a large size', () => {
    const { container } = render(<Large />);
    expect(container).toBeTruthy();
    });

    // I verify if that he rendering a button style defined with styled components.
    // Each time there is an error this code will print the error 
    // in a snapshots file as well as the sudden style change 
    // of the processed component.
    test('it works', () => {
        const button = renderer.create(<Button />).toJSON()
        expect(button).toMatchSnapshot()
    })
});

