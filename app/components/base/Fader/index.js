import React, { PropTypes } from 'react';

import styles from './styles.scss';


const Fader = ({ onClick }) =>
    <div
        className={styles.fader}
        onClick={() => onClick()}
    ></div>;

Fader.propTypes = {
    onClick: PropTypes.func.isRequired
};

Fader.defaultProps = {
    
};

export default Fader;
