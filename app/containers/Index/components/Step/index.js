import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';


import { Icon } from '../../../../components/base';

import { Form, FormField, TextField, Button } from '../../../../components/forms';

import styles from './styles.scss';
const cx = classNames.bind(styles);



class Step extends React.Component {
	
	state = {
		isActive: false
	}
	
	componentDidMount(){
		this.setState({ isActive: true})
	}


	handleOnSubmit() {
		
		
		const { data, onSubmit,  onValidationFail, validate, } = this.props;
		const errors = validate(data);

		if(Object.keys(errors).length) {
			onValidationFail(errors);
		} else {
			onSubmit();
		}
	};
	
	render() {
		
		const { isActive } = this.state;
		const { children, backStep, isFirst, isLast } = this.props;

		return (

			<Form onSubmit={() => this.handleOnSubmit()} className={cx(styles.form, { isActive })}>

				<div className={styles.formContent}>
					{
						children
					}
				</div>

				{
					!isLast && <div className={styles.stepsButtons}>

						{
							!isFirst &&
							<div  className={styles.backButtonBox}>
								<Button onClick={() => backStep()} className={styles.backButton}>
									Back
								</Button>
							</div>
						}

						{
							<div  className={styles.nextButtonBox}>
								<Button
									className={styles.nextButton}
									type="submit"
								>
									<div className={styles.nextButtonInner}>
										<span>Next</span>
										<Icon type="arrow_forward" className={styles.successCircle} />
									</div>
								</Button>
							</div>
						}

					</div>
				}

			</Form>
		)
	}
}


Step.propTypes = {
	onValidationFail: PropTypes.func,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	backStep: PropTypes.func
};

Step.defaultProps = {
	isFirst: false,
	isLast: false
};

export default Step;