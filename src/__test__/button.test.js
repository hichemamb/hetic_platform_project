import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { 
    Small, 
    Medium, 
    Large 
} from '../components/atoms/Button/Button.stories';

// Test of Button stories
describe('Renders Button component', () => {
    let spy;

    beforeEach(() => {
        spy = jest.fn();
    });
    test('with a small size', () => {
        const { container, getByTestId } = render(<Small onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId("button-small");
        expect(button).toHaveStyleRule("width", "133px");
        expect(button).toHaveStyleRule("background-color", "transparent");
        button.click();
        expect(spy).toHaveBeenCalledTimes(1);
        // const { getByTestId } = render(<Small />, <Medium />);
        // const getElement = getByTestId;
        // expect(getElement).toBeTruthy();
        // let smallTestId = getElement('small-button');
        // expect(smallTestId).toHaveTextContent('Small');
        // expect(smallTestId).toHaveStyle(`font-size: 16px; width: 133px`);

        // // Test of medium button
        // let mediumTestId = getElement('medium-button');
        // expect(mediumTestId).toHaveStyle(`width: 160px`)
    });
});
