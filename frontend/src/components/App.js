import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Logout from './auth/Logout';
import Homepage from './app/Homepage';


const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/logout' component={Logout} />
                </Switch>
            </Router>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));