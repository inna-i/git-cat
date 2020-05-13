import React from 'react';
import Main from './components/Main/index';

import './App.css';

class App extends React.Component {
		constructor(props) {
				super(props);
				this.state = {
					user: {},
					isLoaded: false,
				};
		}

		getUser(userId) {
			fetch(`https://api.github.com/users`)
				.then(response => response.json())
				.then(result => result.find(user => user.id === userId))
				.then(user => this.setState({
					user: user,
					isLoaded: true
				}))
				.catch(reason => console.log('Error: ' + reason));
		}

		componentDidMount() {
			// TODO: retrieve id from url.
			this.getUser(5);
		}

	render() {
			const {user, isLoaded} = this.state;

		return (<Main user={this.state.user} />);
		}
}

export default App;
