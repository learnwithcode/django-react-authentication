import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';


class App extends React.Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

    render() {
        return (
          <div>
            <BrowserRouter>
              <Layout {...this.props}/>
            </BrowserRouter>
          </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);