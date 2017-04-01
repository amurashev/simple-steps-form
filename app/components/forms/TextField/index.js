import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import { ControlledInput } from '../';

import styles from './styles.scss';
const cx = classNames.bind(styles);


export class TextField extends React.Component {

    render() {
        
        const { value, type, onlyNumber, maxLength, isDisabled, onChange, onFocus, onBlur, className } = this.props;


        return (
            <div className={cx(className, styles.textField)}>
                <ControlledInput
                    value={value}
                    type={type}
                    disabled={isDisabled}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onlyNumber={onlyNumber}
                    maxLength={maxLength}
                />
            </div>
        );
    }
}

TextField.defaultProps = {
    isDisabled: false
};

TextField.propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    onlyNumber: PropTypes.bool,
    maxLength: PropTypes.number,
    type: PropTypes.string
};

export default TextField;
