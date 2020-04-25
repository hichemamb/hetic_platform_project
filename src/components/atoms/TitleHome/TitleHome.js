import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import background from '../../../assets/intro.svg';
import '../../../assets/fonts/font.css';

const UIBackground = {
    default: background
}


const TitleHome = ({background}) => {
    return(
        <div >
            <TitleHomeContainer background={ background }>
                <div style={{ width: '80%', margin: '0 auto' }}>
                    <TitleHomeStyled>Micheal Jordan</TitleHomeStyled>
                    <TitleHomeDiscover>United Center Chicago Bulls <br/> West Madison Street, Chicago <br/> États-Unis </TitleHomeDiscover>
                </div>
            </TitleHomeContainer>
        </div>
    )
}

const TitleHomeContainer = styled.div`
    background: url(${(props) => UIBackground[props.background]}) no-repeat center;
    background-size: inherit;
    text-align: center;
    overflow: auto;
`;

const TitleHomeStyled = styled.h1`
    font-size: 200px;
    font-family: 'Chakra Petch', sans serif;
    line-height: 153px;
    text-transform: uppercase;
    color: #ffffff;
    text-shadow: 0 0 10px black;
`

const TitleHomeDiscover = styled.p`
    font-size: 14px;
    font-family: 'Chakra Petch', sans serif;
    font-weight: 700;
    line-height: 20px;
    text-transform: capitalize;
    color: #ffffff;
    text-align: right;
`

TitleHome.displayName = 'TitleHome';
TitleHome.defaultProps = {
    background: 'default',
};

TitleHome.propTypes = {
    background: PropTypes.oneOf(['by default the value of the background is "default", to change the value, add your image url']),
    children: PropTypes.element.isRequired
};

export default TitleHome;