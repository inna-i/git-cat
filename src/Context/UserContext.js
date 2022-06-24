import React, { createContext } from "react";
import { fetchUser } from "../services/fetchData";

export const UserContext = createContext();

class UserContextProvider extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    // fetch account by userName

    const getData = async () => {
      const data = await fetchUser();
      this.setState({
        user: data,
      });
    };

    getData();
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
