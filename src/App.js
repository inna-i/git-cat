import {
	BrowserRouter as Router,
	Switch, Route, Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import ReposList from './components/ReposList';
import Subscriptions from './components/Subscriptions';
import FollowersList from './components/FollowersList';
import SideMenu from './components/SideMenu';
import UserContextProvider from './Context/UserContext';

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
	render: () => <Redirect to="/repositories" />,
}];


function App() {
  return (
    <div className="content">
      <Router>
        <UserContextProvider>
          <SideMenu />
          <main>
            <Header />
            <Switch>
              {routes.map((route) => (
                <Route {...route} />
              ))}
            </Switch>
          </main>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
