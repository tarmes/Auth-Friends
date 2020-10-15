import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import { Route, Link, Switch } from 'react-router-dom';
// import { axiosWithAuth } from './utils/axiosWithAuth';
import PrivateRoute from './components/PrivateRoute';

function App() {

	return (
		<div className="App">
			<ul>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/friends-list">Friends</Link>
				</li>
			</ul>
			<Switch>
      		<PrivateRoute exact path="/friends-list" component={FriendsList} />
      		<Route path="/login" component={Login} />
         	<Route component={Login} />
      	</Switch>

		</div>
	);
}

export default App;
