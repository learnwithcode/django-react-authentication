import React from 'react';
import Login from './Login';
import Signup from './Signup'
import { Route, Link } from 'react-router-dom';
import Logout from './Logout';
import Profile from './Profile';
import ThankLogout from './ThankLogout';

class Layout extends React.Component {
    render() {

        return(
            <div>
                <nav className="navbar navbar-dark bg-light"
                style={{marginBottom:'30px'}}>
                <ul className="nav justify-content-end">

                    { this.props.isAuthenticated ?
                    <li className="nav-item">
                    <Link className="nav-link" to="/logout/">Logout</Link>
                    </li>
                    :
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Login</Link>
                    </li>
                    }
                    {this.props.isAuthenticated ?
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile/">Profile</Link>
                    </li>
                    :
                    <li className="nav-item">
                    <Link className="nav-link" to="/sign-up/">Signup</Link>
                    </li>
                    }

                </ul>
                </nav>  
             <Route path="/" exact component={Login}/>   
             <Route path="/sign-up/" exact component={Signup}/> 
             <Route path="/logout/" exact component={Logout}/> 
             <Route path="/profile/" exact component={Profile}/>
             <Route path="/thakyou-logout/" exact component={ThankLogout}/>       
          </div>
        )
    }
}

export default Layout;