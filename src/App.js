import Main from './components/Main/index';
import UserContextProvider from './Context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Main />
    </UserContextProvider>
  );
}

export default App;
