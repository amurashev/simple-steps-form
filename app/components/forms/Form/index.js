import React, { PropTypes } from 'react';

const Form = (props) => {
	const { onSubmit, children, className } = props;
	
	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			onSubmit()
		}} className={className}>
			{children}
		</form>
	)
};

Form.propTypes = {
	onSubmit: PropTypes.func,
	className: PropTypes.string
};

Form.defaultProps = {

};

export default Form;
