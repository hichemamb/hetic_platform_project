import PropTypes from 'prop-types';
import styled from 'styled-components';


// quaternary, quinary, senary, septenary, octonary, nonary,
const UIColors = {
    primary:{
        color: '#6FBE3F'
    },
    secondary: {
        color: '#F44949'
    },
    outlined: {
        color: 'transparent'
    }
}

const UISizes = {
    small:{
        width: '50px'
    },
    medium: {
        width: '100px'
    },
    large: {
        width: '200px'
    }
}

const Button = styled.button`
    width: 100px;
    font-size: 16px;
    width: ${ props =>  UISizes[props.size].width};
    outline: none;
    transition: all ease .4s;
    padding: 16px;
    border-radius: 50px;
    border-color: none;
    background-color: ${props => UIColors[props.type].color};
    cursor: pointer
`;

Button.displayName = 'Button';
Button.defaultProps = {
    size: 'medium',
    type: 'primary'
};

Button.propTypes = {
 type: PropTypes.oneOf(['primary, secondary, outline']),
 size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;