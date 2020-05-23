import React from 'react';
import Main from './components/Main/index';
import UserContextProvider from './Context/UserContext';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			hasError: false,
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

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (!this.state.user) return (<span>Loading...</span>);

		if (this.state.hasError) {
			return (<h2>Omg! There is an error occured :(</h2>)
		}
		// to get error msg just don't pass the props to Main component
		return (
			<UserContextProvider>
				<Main />
			</UserContextProvider>
		);
	}
}

export default App;
