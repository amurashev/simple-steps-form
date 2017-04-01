import React from 'react';

import { ProgressBar } from '../../../../components/base';
import { Button } from '../../../../components/forms';

import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';

import styles from './styles.scss';

export default class Container extends React.Component {

	
	submit = (values) => {
		//console.warn('Container submit', values);
	};

	render() {
		const { form, actions } = this.props;
		const { stepNum } = form;
		

		return (
			<div className={styles.box}>

				<div className={styles.formHeader}>
					{
						stepNum !== 3 ? "Sign up" : "Thank you!"
					}
				</div>
				
				<ProgressBar
					value={stepNum}
					maxValue={3}
				/>

				<div className={styles.formBox}>
					
						{
							stepNum == 1 && <Step1
								isFirst={true}
								data={form}
								onSubmit={actions.stepSubmit}
								backStep={actions.backStep}
								onChange={actions.formChangeField}
								onValidationFail={actions.formValidationFail}
							/>
						}
		
						{
							stepNum == 2 && <Step2
								data={form}
								onSubmit={actions.stepSubmit}
								backStep={actions.backStep}
								onChange={actions.formChangeField}
								onValidationFail={actions.formValidationFail}
							/>
						}
		
		
						{
							stepNum == 3 && <Step3 
								onSubmit={() => actions.goToDashboard()}
								isLast={true}
							/>
						}
				</div>

				
			</div>
		);

	}
}






