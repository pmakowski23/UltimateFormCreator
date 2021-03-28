import { FC } from 'react';
import { Logo } from './Logo';
import { css } from '@emotion/css';

export const Sidebar: FC = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '100%',
        borderLeft: '1px solid #4CAF50',
      })}
    >
      <Logo />
    </div>
  );
};
