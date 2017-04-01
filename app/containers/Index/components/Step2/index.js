import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import Step from '../Step';
import { Form, FormField, ControlledInput, RadioSet, TextField, Select, Button } from '../../../../components/forms';

import styles from './styles.scss';
const cx = classNames.bind(styles);

import validations from '../../../../utils/validation';


const GENDERS_DATA = [
	{ value: 'male', name: 'Male' },
	{ value: 'female', name: 'Female' },
	{ value: 'unspecified', name: 'Unspecified' }
];

const HEAD_ABOUT_DATA = [
	{ value: 1, name: 'From internet'},
	{ value: 2, name: 'From street'}
];


const validate = data => {

	const errors = {};


	const dateOfBirth = data.month + '/' + data.day + '/' + data.year;

	if(!validations.checkAge(dateOfBirth, 18)) {
		errors.date_of_birth = 'The user must be 18 year old or more';
	}

	if(!validations.dateValid(dateOfBirth)) {
		errors.date_of_birth = 'Incorrect date';
	}

	if(!validations.matchDay(data.day) || !validations.matchMonth(data.month) || !validations.matchYear(data.year)) {
		errors.date_of_birth = 'All fields in “Date of birth” should be valid respectively';
	}

	if(!validations.required(data.day) || !validations.required(data.month) || !validations.required(data.year)) {
		errors.date_of_birth = 'All fields in “Date of birth” are required.';
	}

	if(!validations.required(data.gender)) {
		errors.gender = '.One gender option must be selected from the 3 given';
	}
	

	return errors;
};


const Step2 = (props) => {

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
				label="Date of birth"
				errors={data.errors.date_of_birth}
			>
				<div className={styles.birthDayBox}>
					<ControlledInput
						value={data.day}
						maxLength={2}
						placeHolder="DD"
						onlyNumber={true}
						className={styles.birthDayBoxInner}
						onBlur={(value) => handleChangeField('day', value)}
					/>
					<ControlledInput
						value={data.month}
						maxLength={2}
						placeHolder="MM"
						onlyNumber={true}
						className={styles.birthDayBoxInner}
						onBlur={(value) => handleChangeField('month', value)}
					/>
					<ControlledInput
						value={data.year}
						maxLength={4}
						placeHolder="YYYY"
						onlyNumber={true}
						className={styles.birthDayBoxInner}
						onBlur={(value) => handleChangeField('year', value)}
					/>
				</div>
			</FormField>

			<FormField
				label="Gender"
				errors={data.errors.gender}
			>
				<RadioSet
					items={GENDERS_DATA}
				    value={data.gender}
					onChange={(value) => handleChangeField('gender', value)}
				/>
			</FormField>

			<FormField
				label="Where did you hear about is?"
				errors={data.errors.how_hear_about_us}
			>
				<Select
					value={data.how_hear_about_us}
					items={HEAD_ABOUT_DATA}
					onChange={(value) => handleChangeField('how_hear_about_us', value)}
				/>
			</FormField>
		</Step>

	)
};


Step2.propTypes = {
	onValidationFail: PropTypes.func,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};


export default Step2;