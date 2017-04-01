import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import validations from '../../../../utils/validation';

import { Form, FormField, TextField, Button } from '../../../../components/forms';

import Step from '../Step';

import styles from './styles.scss';
const cx = classNames.bind(styles);


const validate = data => {
	
	const errors = {};
	
	if(!validations.validEmail(data.email)) {
		errors.email = 'Email should be a valid email address.';
	}
	
	if(!validations.required(data.email)) {
		errors.email = 'Email Required';
	}

	if(!validations.matches(data.password, data.confirmPassword)) {
		errors.password = 'Password confirmation should match the password';
	}

	if(!validations.minLength(data.password, 6)) {
		errors.password = 'Password should be minimum 6 characters long';
	}

	if(!validations.required(data.password)) {
		errors.password = 'Password is required';
	}

	if(!validations.required(data.confirmPassword)) {
		errors.confirmPassword = 'Password confirmation is required';
	}

	return errors;
};


const Step1 = (props) => {
	
	const {data, onChange} = props;

	const handleChangeField = (name, value) => {
		onChange(name, value);
	};
	
	
	return (

		<Step 
			{...props}
			validate={validate}
		>

			<FormField
				label="Email"
			    errors={data.errors.email}
			>
				<TextField
					value={data.email}
					onBlur={(value) => handleChangeField('email', value)}
				/>
			</FormField>

			<FormField
				label="Password"
				errors={data.errors.password}
			>
				<TextField
					type="password"
					value={data.password}
					onBlur={(value) => handleChangeField('password', value)}
				/>
			</FormField>

			<FormField
				label="Confirm password"
				errors={data.errors.confirmPassword}
			>
				<TextField
					type="password"
					value={data.confirmPassword}
					onBlur={(value) => handleChangeField('confirmPassword', value)}
				/>
			</FormField>
			
		</Step>
	)
}


Step1.propTypes = {
	onValidationFail: PropTypes.func,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};



export default Step1;