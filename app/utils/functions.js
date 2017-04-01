
import { bindActionCreators } from 'redux';


export const mapDispatchToProps = (Actions) => {
    return (dispatch) => {
        return { 
            actions: bindActionCreators(Actions, dispatch) 
        }
    }
};
