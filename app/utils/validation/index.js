
import regex from './regex';

export default {

	required: (value) => value !== null && value !== '',

	validEmail: (value) => regex.emailRegex.test(value),

	minLength: (value, length) => {
		if (!regex.numericRegex.test(length)) {
			return false;
		}

		return (String(value).length >= parseInt(length, 10));
	},

	maxLength: (value, length) => {
		if (!regex.numericRegex.test(length)) {
			return false;
		}

		return (value.length <= parseInt(length, 10));
	},

	matches: (value1, value2) => value1 === value2,

	range: (value, min, max) => {
		return (parseInt(value, 10) >= min && parseInt(value, 10) <= max);
	},

	matchDay: function (value) {
		return this.range(value, 1, 31)
	},
	
	matchMonth: function (value)  {
		return this.range(value, 1, 12)
	},
	matchYear: function (value) {
		return this.range(value, 1900, 2100)
	},

	dateValid: (value) => {
		var bits = value.split('/');
		var d = new Date(bits[2], bits[1] - 1, bits[0]);
		return d && (d.getMonth() + 1) == bits[1];
	},

	checkAge: (value, ageCheck) => {
		var today = new Date();
		var birthDate = new Date(value);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
				
		return age >= ageCheck;

	}
}