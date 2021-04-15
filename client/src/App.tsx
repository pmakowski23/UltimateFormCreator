import './App.css';
import { FunctionComponent } from 'react';
import { Layout } from './components/shared/Layout';

import { useSelector } from 'react-redux';
import { selectUserName } from './redux/userSlice';

import { Login } from './pages/Login';
import { Sites } from './pages/Sites';

const App: FunctionComponent = () => {
  const userName = useSelector(selectUserName);

  return <Layout>{userName ? <Sites /> : <Login />}</Layout>;
};

export default App;
