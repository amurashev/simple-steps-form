import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import { Icon, List } from '../../base';

import styles from './styles.scss';


class Select extends React.Component {
    
    state = {
        listIsShow: false,     
        textValue: ''       
    };

    componentWillMount(){
        this.setValue(this.props);
    }

    componentWillReceiveProps(props) {
        this.setValue(props);
    }

    setValue(props) {
        const { value, items } = props;
        
        if(value) {
            const selectedItem = items.filter(item => item.value === value)[0];
            
            if(selectedItem) {
                this.setState({
                    textValue: selectedItem.name
                })
            }
        }
        
    }


    toggleList(value) {
        this.setState({
            listIsShow: value
        });
    }

    handleSelectClick(){
        this.toggleList(true);
    }

    handleItemSelect(selectedItem){
        const { i } = selectedItem;
        const { items } = this.props;
        this.toggleList(false);

        this.handleChangeValue(items[i].value);
    }

    handleListCancel(){
        this.toggleList(false);
    }

    handleChangeValue(value){
        const { onChange } = this.props;
        if(typeof onChange === "function") {
            onChange(value);
        }
    }



    render() {
        
        const { listIsShow, textValue } = this.state;
        const { items } = this.props;  
        

        return (
            <div className={classNames(styles.select)}>
                <div className={styles.innerBox}>
                    <div 
                        className={styles.valueBox}
                        onClick={() => this.handleSelectClick()}
                    >{textValue}</div>
                    <div className={styles.iconBox}>
                        <Icon  className={styles.icon} type="keyboard_arrow_down"/>
                    </div>
                </div>
                {
                    listIsShow ?
                        <div className={styles.listBox}>
                            <List
                                data={items}
                                onItemClick={(data) => this.handleItemSelect(data)}
                                onCancelClick={() => this.handleListCancel()}
                            />
                        </div>
                       : null
                }
               
            </div>
        );
    }
}


Select.propTypes = {
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func
};

Select.defaultProps = {

};

export default Select;

