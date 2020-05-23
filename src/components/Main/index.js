import React from 'react';
import {
	BrowserRouter as Router,
	Switch, Route, Redirect,
} from 'react-router-dom';

import Header from '../Header';
import About from '../About';
import ReposList from '../ReposList';
import Subscriptions from '../Subscriptions';
import FollowersList from '../FollowersList';
import SideMenu from '../SideMenu';


import './style.css';

const routes = [{
	path: '/about',
	key: 'default',
	children: <About />,	
}, {
	path: '/repositories',
	key: 'repo',
	children: <ReposList />,
},{
	path: '/subscriptions',
	key: 'subscr',
	children: <Subscriptions />,
}, {
	path: '/followers',
	key: 'followers',
	children: <FollowersList />,
}, {
	path: '/',
	exact: true,
	key: 'default',
	render: () => <Redirect to="/about" />,
}];

class Main extends React.Component {
	render() {
		return (
			<div className='content'>
				<Router>
					<SideMenu/>
					<main>
						<Header/>
						<Switch>
							{ routes.map(route => <Route {...route} />) }		
						</Switch>
					</main>
				</Router>
			</div>
		);
	}
}

export default Main;
