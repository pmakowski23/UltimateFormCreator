import { FC } from 'react';
import { Logo } from './Logo';
import { css } from '@emotion/css';

import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';

import { setUserLogout } from '../../redux/userSlice';

export const Sidebar: FC = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogout());
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '100%',
        paddingLeft: '20%',
        borderLeft: '1px solid #4CAF50',
      })}
    >
      <Logo />
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
};
