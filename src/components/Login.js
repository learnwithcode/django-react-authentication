import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import Card from './Card';
import Spinner from './Spinner';


class Login extends React.Component {
    state = {username: "",
            password: ""}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.username, this.state.password)
        // if(this.props.isAuthenticated) {
        //     this.props.history.push("/profile/");
        // }
        
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        const {username, password } = this.state;
        var login = <h3>Login</h3>

        return (
            <Card>
                
                {this.props.error ? this.props.error.message : login}
                {this.props.loading ? 
                <Spinner/>
                
            :
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text" name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"
                value={username}
                onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                value={password} 
                onChange={this.onChange}
                type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
          </form>}
        </Card>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);