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
    });
    test('with a medium size', () => {
        const { container, getByTestId } = render(<Medium onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId("button-medium");
        expect(button).toHaveStyleRule("width", "160px");
        expect(button).toHaveStyleRule("background-color", "transparent");
        button.click();
        expect(spy).toHaveBeenCalledTimes(1);
    });
    test('with a large size', () => {
        const { container, getByTestId } = render(<Large onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId("button-large");
        expect(button).toHaveStyleRule("width", "200px");
        expect(button).toHaveStyleRule("background-color", "transparent");
        button.click();
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
