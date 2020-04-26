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

const Title = ({size, title="Default", showLine="none" }) => {
    return(
        <TitleStyledContainer>
            <TitleStyled size={size} showLine={ showLine }
            > { title }
            </TitleStyled>
        </TitleStyledContainer>
    )
}

const TitleStyledContainer = styled.div`
    position: relative;
    width: 50%;
    text-align: right;
`;
const TitleStyled = styled.span`
    color: #ffffff;
    text-transform: capitalize;
    font-size: ${props => UIFSize[props.size].fontSize};
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 700;
    line-height: 40px;
    ::after {
        content: '';
        background-color: #ffffff;
        position: absolute;
        right: 0;
        width: 100px;
        height: 1px;
        bottom: -15px;
        display: ${(props) => props.showLine};
    }
`;

Title.displayName = 'Title';
Title.defaultProps = {
    size: 'large',
};

Title.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    children: PropTypes.element.isRequired
};

export default Title;