
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';

import App from './app';
import reducers from './reducers';


const AppComponent = () => {

    const reducer = combineReducers(reducers);
    const store = createStore(
        reducer,
        applyMiddleware(thunk)
    );

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    )
};

document.addEventListener("DOMContentLoaded", () => new AppComponent());



