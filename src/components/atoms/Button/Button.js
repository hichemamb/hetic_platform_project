import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UIColors = {
    primary:{
        color: 'transparent'
    },
    secondary: {
        color: '#F44949'
    },
    tertiary: {
        color: 'green'
    }
}
const UISizes = {
    small:{
        width: '133px'
    },
    medium: {
        width: '160px'
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
 size: PropTypes.oneOf(['small', 'medium', 'large']),
 type: PropTypes.string.isRequired,
 children: PropTypes.string.isRequired,
 onClick: PropTypes.func.isRequired
};

export default Button;