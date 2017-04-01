import { fromJS } from 'immutable';

import {
    FORM_CHANGE_FIELD,
    FORM_VALIDATION_ERROR,

    STEP_NEXT,
    STEP_BACK
} from '../constants';

const initialState = fromJS({
    
    stepNum: 1,
    
    email: null,
    password: null,
    confirmPassword: null,
    day: null,
    month: null,
    year: null,

    date_of_birth: null,
    gender: null,
    how_hear_about_us: null,
    errors: {}
});

export default function formReducer(state = initialState, action) {
    
    
    switch(action.type) {
        
        case FORM_CHANGE_FIELD: 
            return state.set(action.name, action.value);
        
        case FORM_VALIDATION_ERROR:
            return state.set('errors', action.errors);

        case STEP_NEXT: return state.set('stepNum', state.get('stepNum') + 1);
        case STEP_BACK: return state.set('stepNum', state.get('stepNum') - 1);
        
        default: return state;
    }
}

