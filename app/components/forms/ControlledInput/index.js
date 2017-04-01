import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import { Input } from '../../base';

import styles from './styles.scss';
const cx = classNames.bind(styles);


export class ControlledInput extends React.Component {

    state = {
        value: ''
    };

    componentDidMount() {
        this.setInputValue(this.props.value);
    }

    componentWillReceiveProps(props) {
        this.setInputValue(props.value);
    }

    setInputValue(value) {
        this.setState({
            value: value || ''
        });
    }

    checkValidation(value) {
        const { onlyNumber } = this.props;

        if(onlyNumber) {
            const reg = /\-?\d+(\.\d{0,2})?/g.exec(value);
            return reg ? reg[0] : '';
            
            //TODO 
        } else {
            return value;
        }
    }

    onInputChange(value) {
        const { onChange } = this.props;
        const newValue = this.checkValidation(value);

        this.setInputValue(newValue);

        if(typeof onChange === "function") {
            onChange(newValue);
        }
    }

    onInputFocus(value) {
        const { onFocus } = this.props;
        if(typeof onFocus === "function") {
            onFocus(value);
        }
        
    }

    onInputBlur(value) {
        const { onBlur } = this.props;
        
        if(typeof onBlur === "function") {
            onBlur(value);
        }
    }
   
    

    render() {
        const { className, type, isDisabled, maxLength, placeHolder } = this.props;
        const { value } = this.state;
        
        return (
            <Input
                className={cx(className, styles.controlledInput)}
                value={value}
                type={type}
                maxLength={maxLength}
                placeHolder={placeHolder}
                disabled={isDisabled}
                onChange={(value) => this.onInputChange(value)}
                onFocus={(value) => this.onInputFocus(value)}
                onBlur={(value) => this.onInputBlur(value)}
            />
        );
    }

}

ControlledInput.defaultProps = {
    
};

ControlledInput.propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    textAlign: PropTypes.string,
    maxLength: PropTypes.number,
    type: PropTypes.string,
    placeHolder: PropTypes.string
};

export default ControlledInput;
