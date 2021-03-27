import { css } from '@emotion/css';
import { FC } from 'react';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div
      className={css({
        backgroundColor: '#424250',
        padding: '40px',
        height: '100vh',
      })}
    >
      <div className={css({ backgroundColor: '#33333d', height: '100%' })}>{children}</div>
    </div>
  );
};
