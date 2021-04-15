import { FunctionComponent } from 'react';

import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';

import { Logo } from '../components/shared/Logo';
import { css } from '@emotion/css';

import { setActiveUser } from '../redux/userSlice';
import { GoogleLoginButton } from '../components/shared/GoogleLoginButton';

export const Login: FunctionComponent = () => {
  const dispatch = useDispatch();

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

  return (
    <div
      className={css({
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <Logo />
      <GoogleLoginButton handleClick={handleSignIn} />
    </div>
  );
};
