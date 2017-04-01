import React, { PropTypes } from 'react';
import styles from './styles.scss';

const ProgressBar = props => {
    const getValue = () => {
        const tempValue = props.value - props.minValue;
        const tempMaxValue = props.maxValue - props.minValue;
        
        return  100 * tempValue / tempMaxValue;
    };
    return (
        <div className={styles.progress}>
            <div className={styles.bar} style={{
                width: getValue() + '%'
            }}>
            </div>
        </div>
    );
}





ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    minValue: PropTypes.number,
    maxValue: PropTypes.number
};
ProgressBar.defaultProps = {
    minValue: 0,
    maxValue: 100
};

export default ProgressBar;