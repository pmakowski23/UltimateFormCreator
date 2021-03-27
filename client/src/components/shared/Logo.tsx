import { FC } from 'react';
import { Heading } from './Heading';
import logo from '../../images/logo.svg';
import { css } from '@emotion/css';

export const Logo: FC = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        textAlign: 'center',
      })}
    >
      <img className={css({ height: '200px' })} src={logo} alt="logo" />
      <Heading>Ultimate Form Creator</Heading>
    </div>
  );
};
