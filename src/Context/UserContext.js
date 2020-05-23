import React, { createContext } from 'react';

export const UserContext = createContext();

class UserContextProvider extends React.Component {
    state = {
        user: null,
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
        return (
            <UserContext.Provider value={{ user: this.state.user }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;
