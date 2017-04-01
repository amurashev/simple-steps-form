import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.scss';
const cx = classNames.bind(styles);

const Input = ({ value, type, maxLength, placeHolder, onChange, onKeyDown, onBlur, onFocus, className, disabled }) =>
    <input
        className={cx(className, styles.input)}
        type={type}
        value={value}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeHolder}
        onChange={(e) => onChange(e.target.value) }
        onBlur={(e) => onBlur(e.target.value) }
        onFocus={(e) => onFocus(e.target.value) }
    />;

Input.propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    placeHolder: PropTypes.string
};

Input.defaultProps = {
    type: "text",
    placeHolder: ''
};

export default Input;

