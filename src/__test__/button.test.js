import React from 'react';
import { render } from '@testing-library/react';
import { Small, Medium, Large } from '../components/atoms/Button/Button.stories';
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
});

