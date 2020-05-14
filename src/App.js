import React from 'react';
import Main from './components/Main/index';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		};
	}

	componentDidMount() {
		// fetch account by userName
		fetch(`https://api.github.com/users/inna-i`)
			.then(resp => resp.json())
			.then(user => this.setState({
				user: user,
			}))
			.catch(reason => console.log('Error: ' + reason));
	}

	render() {
		if (!this.state.user) return (<span>Loading...</span>);

		return (<Main user={this.state.user} />);
	}
}

export default App;
