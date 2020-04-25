import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title/Title'
import '../../../assets/fonts/font.css'


const TitleGroup = () => {
    return(
        <>
            <Title title="Space Jam"  size="large"/>
            <Title title="1996 - Warner Bros. Pictures"  size="small"  showLine="block"/>
        </>
    )
}


TitleGroup.displayName = 'TitleGroup';
TitleGroup.defaultProps = {
    size: 'large',
    showLine: 'none',
};

TitleGroup.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    showLine: PropTypes.oneOf(['For to display, choose properties block or none']),
    children: PropTypes.element.isRequired
};

export default TitleGroup;