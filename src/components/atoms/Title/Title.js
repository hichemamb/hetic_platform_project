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
const UIColors = {
    primary:{
        color: '#ffffff',
    },
}

const Title = ({color, size, title, text, textAlign, DirectionBorderLeft, DirectionBorderRight  }) => {
    return(
        <StyledTitle 
        color={color} 
        size={size}
        textAlign={textAlign}
        left={DirectionBorderLeft}
        right={DirectionBorderRight}
        > { title }
            <StyledSubTitle 
            text={text}>{ text }
            </StyledSubTitle>
        </StyledTitle>
    )
}

const StyledTitle = styled.h1`
    color: ${props => UIColors[props.color].color};
    text-transform: capitalize;
    text-align: ${props => props.textAlign};
    font-size: ${props => UIFSize[props.size].fontSize};
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 700;
    width: 50%;
    line-height: 41px;
    position: relative;
    ::after {
        content: '';
        background-color: #ffffff;
        position: absolute;
        right: ${props => props.right ? '0' : 'initial'};
        left: ${props => props.left || 'initial'};
        width: 100px;
        height: 1px;
        bottom: 0
    }
`;

const StyledSubTitle = styled.h4`
    text-transform: capitalize;
    font-size: 14px;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 700;
`;

Title.displayName = 'Title';
Title.defaultProps = {
    size: 'large',
    color: 'primary',
    textAlign: 'left'
};

Title.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['primary']),
    textAlign: PropTypes.oneOf(['left' | 'right']),
    DirectionBorderRight: PropTypes.oneOf(['right']),
    DirectionBorderLeft: PropTypes.oneOf(['left']),
    children: PropTypes.element.isRequired
};

export default Title;