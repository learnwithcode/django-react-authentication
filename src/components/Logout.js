import React from 'react';
import * as actions from '../store/actions/auth';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends React.Component {

    componentDidMount () {
        this.props.onLogout();
    }


    render () {
        return <Redirect to="/thakyou-logout/"/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()) 
    }
}
export default connect(null, mapDispatchToProps)(Logout);