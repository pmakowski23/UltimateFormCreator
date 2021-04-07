import './App.css';
import { FunctionComponent } from 'react';
import { Layout } from './components/shared/Layout';

import { auth, provider } from './firebase';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveUser, setUserLogout, selectUserName } from './redux/userSlice';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user?.displayName,
          userEmail: result.user?.email,
        }),
      );
    });
  };
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogout());
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Layout>
      {userName ? <button onClick={handleSignOut}>Sign out</button> : <button onClick={handleSignIn}>Sign in</button>}
    </Layout>
  );
};

export default App;
