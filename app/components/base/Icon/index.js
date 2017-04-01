import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

const Icon = ({type, className}) => {
	return <i className={classNames(className, styles.icon, 'material-icons')}>{type}</i>
};


Icon.propTypes = {
	type: PropTypes.string.isRequired
};
Icon.defaultProps = {
	
};

export default Icon;