import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import Step from '../Step';

import { Icon } from '../../../../components/base';
import { Button } from '../../../../components/forms';

import styles from './styles.scss';
const cx = classNames.bind(styles);


const Step3 = (props) => {

	const {onSubmit} = props;

	return (

		<Step
			{...props}
		>
			<div className={styles.step3Box}>
				<Icon type="check_circle" className={styles.successCircle}/>
				<Button onClick={onSubmit}>
					<div className={styles.goToDashboardButton}>
						<span>Go to Dashboard</span>
						<Icon type="arrow_forward"/>
					</div>
				</Button>
			</div>
		</Step>
	)
}


export default Step3;