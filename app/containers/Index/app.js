
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import { mapDispatchToProps } from '../../utils/functions';

import Container from './components/Container';



class App extends React.Component {
    
    render() {
        return <Container {...this.props} />
    }
}


function mapStateToProps(state) {
    
    return {
        form: state.get('form').toJS()
    }
}


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps(Actions))(App);