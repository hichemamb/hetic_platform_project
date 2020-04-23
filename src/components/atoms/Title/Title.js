import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../../../assets/fonts/font.css'

const UIFSize = {
    small:{
        fontSize: '14px',
    },
    medium:{
        fontSize: '34px',
    },
    large:{
        fontSize: '60px',
    },
}

const Title = ({type, color='#FFFFFF', title}) => {
    return(
        <StyledTitle type={type} color={color}> 
            { title }
        </StyledTitle>
    )
}

const StyledTitle = styled.h1`
    text-transform: capitalize;
    font-size: ${props => UIFSize[props.type].fontSize};
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 700;
`;

Title.displayName = 'Title';
Title.defaultProps = {
    type: 'large',
    color: '#000000'
};

Title.propTypes = {
    type: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['Black or defined other color with color props']),
    children: PropTypes.element.isRequired
};

export default Title;