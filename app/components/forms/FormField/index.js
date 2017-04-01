import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';
const cx = classNames.bind(styles);

import { Label } from '../../../components/base';

const FormField = (props) => {
	
	const { name, label, children, errors } = props;
	
	return (
		<div className={styles.formField}>
			<div className={styles.labelBox}>
				<Label text={label} className={cx({
					isError: errors
				})} />
			</div>
			<div className={styles.childrenBox}>
				{children}
			</div>
			{
				errors && <div className={styles.errorBox}>{errors}</div>
			}
		</div>
	)
};



FormField.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
};

FormField.defaultProps = {

};

export default FormField;