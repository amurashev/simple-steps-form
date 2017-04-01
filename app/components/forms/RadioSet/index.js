import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';
const cx = classNames.bind(styles);

const RadioItem = ({ name, value, isActive, onClick }) =>
    (
        <div
            className={cx(styles.item, { isActive })}
            onClick={onClick}
        >{name}</div>
    );

RadioItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    onClick: PropTypes.func.isRequired
};

RadioItem.defaultProps = {

};



const RadioSet = ({ value, items, onChange }) =>
    (
        <div className={styles.items}>
            {
                items.map((item) => 
                    <RadioItem 
                        {...item}
                        key={item.value}
                        onClick={() => onChange(item.value)}
                        isActive={value === item.value}
                    />
                )
            }
        </div>
    );

RadioSet.propTypes = {
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func
};

RadioSet.defaultProps = {

};

export default RadioSet;

