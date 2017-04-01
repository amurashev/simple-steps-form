

import {
	STEP_NEXT,
	STEP_BACK,

	FORM_CHANGE_FIELD,
	FORM_VALIDATION_ERROR,
} from '../constants'

export function nextStep() {
	return {
		type: STEP_NEXT
	}
}

export function backStep() {
	return {
		type: STEP_BACK
	}
}



export function goToDashboard() {
	return (dispatch, getState) => {
		
		const state = getState().toJS();
		const form = state.form;

		const data = {
			user_data: {
				email: form.email,
				password: form.password,
				date_of_birth: Date.parse(form.month + '/' + form.day + '/' + form.year) / 1000,
				gender: form.gender,
				how_hear_about_us: form.how_hear_about_us
			}
		};

		console.log(data);
	}
}


export function formChangeField(name, value) {
	return (dispatch, getState) => {		
		dispatch({
			type: FORM_CHANGE_FIELD,
			name,
			value
		});
	}
}



export function stepSubmit() {
	return (dispatch, getState) => {

		dispatch(nextStep());
	}
}



export function formValidationFail(errors) {
	return (dispatch, getState) => {

		dispatch({
			type: FORM_VALIDATION_ERROR,
			errors
		});
	}
}


