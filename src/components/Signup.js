import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import Card from './Card';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

class Signup extends React.Component {

    state = {username: "",
            email:"",
            password1: "",
            password2:""}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.username,this.state.email, this.state.password1, this.state.password2)
        
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        const {username, email,password1, password2 } = this.state;
        var login = <h3>Signup</h3>
        return (
            <Card>
              {this.props.error ? this.props.error.message : login}
              {this.props.loading ? 
                <Spinner/>
          :
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <label htmlFor="usernamefield">Username</label>
                <input type="text" name='username' className="form-control"  id="usernamefield" aria-describedby="emailHelp" placeholder="Enter Username"
                value={username}
                onChange={this.onChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="emailfield">Email</label>
                <input type="text" name='email' className="form-control" id="emailfield" aria-describedby="emailHelp" placeholder="Enter Email"
                value={email}
                onChange={this.onChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="password1">Password1</label>
                <input
                value={password1} 
                onChange={this.onChange}
                type="password" name='password1' id="password1" className="form-control" placeholder="Enter Password1"/>
              </div>
              <div className="form-group">
                <label htmlFor="password2">Password2</label>
                <input
                value={password2} 
                onChange={this.onChange}
                type="password" name='password2' id="password2" className="form-control" placeholder="Enter Password2"/>
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
              already have an account?
              <Link to="/">Login</Link>
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
        onAuth: (username, email,  password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);