import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Small, Medium, Large } from '../components/atoms/Button/Button.stories';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

// Test of Button stories
describe('Renders Button component', () => {
    test('with a default behavior', () => {
        const { getByTestId } = render(<Small />, <Medium />);
        const getElement = getByTestId;
        expect(getElement).toBeTruthy();
        let smallTestId = getElement('small-button');
        expect(smallTestId).toHaveTextContent('Small');
        expect(smallTestId).toHaveStyle(`font-size: 16px; width: 133px`);

        // Test of medium button
        let mediumTestId = getElement('medium-button');
        expect(mediumTestId).toHaveStyle(`width: 160px`)
    });
});
