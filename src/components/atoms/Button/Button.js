import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// quaternary, quinary, senary, septenary, octonary, nonary,
const UIColors = {
    primary:{
        color: '#2F2F2F'
    },
    secondary: {
        color: '#F44949'
    },
    tertiary: {
        color: 'transparent'
    }
}
const UISizes = {
    small:{
        width: '133px'
    },
    medium: {
        width: '100px'
    },
    large: {
        width: '200px'
    }
}

const Button = ({size, children, type, onClick}) => {
    return(
        <StyledButton size={size} type={type} onClick={onClick}> { children } </StyledButton>
    )
}

const StyledButton = styled.button`
    font-size: 16px;
    width: ${ props =>  UISizes[props.size].width};
    outline: none;
    transition: all ease .4s;
    border: 1px solid #FFFFFF;
    padding-top: 13px;
    padding-bottom: 13px;
    border-radius: 2px;
    border-color: none;
    color: #FFFFFF;
    background-color: ${props => UIColors[props.type].color};
    cursor: pointer;
    text-transform: uppercase;
    :hover {
        background-color: white;
        color: #2F2F2F;
    }
`;

Button.displayName = 'Button';
Button.defaultProps = {
    size: 'small',
    type: 'primary'
};

Button.propTypes = {
 type: PropTypes.oneOf(['primary, secondary, tertiary']),
 size: PropTypes.oneOf(['small', 'medium', 'large']),
 children: PropTypes.element.isRequired,
 onClick: PropTypes.func.isRequired
};

export default Button;