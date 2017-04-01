import React, { PropTypes } from 'react';

import { Fader } from '../';

import classNames from 'classnames/bind';
import styles from './styles.scss';
const cx = classNames.bind(styles);


const UP_KEY = 38;
const DOWN_KEY = 40;
const ENTER_KEY = 13;
const ESC_KEY = 27;

const ListItem = ({ name, onClick, isActive }) => {
	
	
	return (
		<div
			className={cx(styles.item, { isActive: isActive })}
			//onClick={() => onClick()}
		>
			<span className={styles.itemName}>{ name }</span>
		</div>
	)
};
	

ListItem.propTypes = {
	//onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired
};

ListItem.defaultProps = {
	
};



class List extends React.Component {

	state = {
		activeValue: -1
	};

	componentDidMount() {
		this.addKeyDownListiner();
	}

	handleListClose() {
		const { onCancelClick } = this.props;
		if(typeof onCancelClick === "function") {
			onCancelClick();
		}
	}


	handleItemClick(i) {
		const { onItemClick, data, value } = this.props;

		if(typeof onItemClick === "function") {

			const selectedItem = data[i];
			const isSelected = value == selectedItem.value;

			onItemClick({
				value: selectedItem.value,
				isSelected,
				i
			});
		}
	}

	handleItemMouseEnter(key) {
		const { activeValue } = this.state;

		if(activeValue != key) {
			this.setState({ activeValue: key });
		}
	}

	handleItemMouseLeave() {
		const { activeValue } = this.state;

		if(activeValue != -1) {
			this.setState({ activeValue: -1 });
		}
	}



	addKeyDownListiner() {

		this.keyListiner = (e) => {

			const { data } = this.props;
			const { activeValue } = this.state;
			if(e.keyCode == UP_KEY) {
				this.setState({
					activeValue: activeValue > 0 ? activeValue - 1 : 0
				});
			}
			if(e.keyCode == DOWN_KEY) {
				this.setState({
					activeValue: activeValue < data.length - 1 ? activeValue + 1 : data.length - 1
				});
			}
			if(e.keyCode == ENTER_KEY) {
				if((activeValue > 0 <= data.length) && data[activeValue]) {
					this.handleItemClick(activeValue);
				}
			}
			if(e.keyCode == ESC_KEY) {
				this.handleListClose();

			}

			if(e.keyCode == ESC_KEY || e.keyCode == ENTER_KEY ||
				e.keyCode == UP_KEY || e.keyCode == DOWN_KEY) {
				e.stopPropagation();
				e.preventDefault();
				return false;
			}
		};
		document.addEventListener("keydown", this.keyListiner, false);
	}

	render() {
		const { data, itemTemplate, itemProps,  } = this.props;
		const { activeValue } = this.state;

		return (
			<div 
				className={classNames(styles.list)}
				ref={(ref) => this.list = ref}
			>
				<Fader onClick={() => this.handleListClose()} />
				<div className={classNames(styles.items)}>
					{
						data.map((item, i) => {
	
							const isActive = activeValue == i;
	
							return (
								<div
									key={i}
									className={classNames(styles.itemBox)}
									onMouseEnter={() => this.handleItemMouseEnter(i)}
									onMouseLeave={() => this.handleItemMouseLeave(i)}
									onClick={() => this.handleItemClick(i)}
								>
									<ListItem
										isActive={isActive}
									    name={item.name}
									/>
								</div>
							)
						})
					}
				</div>
			</div>
		);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.keyListiner, false);
	}
}


List.propTypes = {
	//onClick: PropTypes.func.isRequired
};

List.defaultProps = {

};

export default List;
