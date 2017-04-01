import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.scss';
const cx = classNames.bind(styles);

const Button = ({ className, type, children, isDisabled, onClick }) => {

    const handleButtonClick = () => !isDisabled && typeof onClick === 'function' && onClick();

    return (
        <button
            type={type}
            className={cx(className, styles.button)}
            onClick={(e) => handleButtonClick(e)}
        >
            {children}
        </button>
    )
};


Button.defaultProps = {
    isDisabled: false,
    type: 'button'
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    isDisabled: PropTypes.bool
};

export default Button;
