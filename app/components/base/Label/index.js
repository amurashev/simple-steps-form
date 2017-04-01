import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import styles from './styles.scss';

const Label = ({ text, className }) =>
    <label className={cx(className, styles.label)}>{text}</label>;

Label.propTypes = {
    text: PropTypes.string.isRequired
};
Label.defaultProps = {
    text: ""
};

export default Label;